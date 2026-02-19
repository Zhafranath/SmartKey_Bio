import json
import re
from pathlib import Path

# ----- Konfigurasi nama file -----
# File JS/JSON yang berisi taksonomiData (data 1–101 spesies)
TAKSONOMI_FILE = Path("taksonomiData.js")          # ganti ke nama file kamu kalau beda

# File JS/JSON yang berisi mapping no -> {habitat, ekosistem}
HABITAT_FILE = Path("habitatEkosistemByNo.json")   # isinya seperti yang kamu kirim barusan

# File output (hasil gabungan)
OUTPUT_JSON = Path("newTaksonomiData.json")
OUTPUT_JS = Path("newTaksonomiData.js")           # versi JS untuk frontend


def load_js_or_json(path: Path):
    """
    Membaca file:
    - Kalau isinya JSON murni -> langsung json.loads
    - Kalau isinya JS module 'export const ... = { ... };' -> dibersihkan dulu lalu di-json.loads
    """
    if not path.exists():
        raise FileNotFoundError(f"File tidak ditemukan: {path}")

    text = path.read_text(encoding="utf-8").strip()
    if not text:
        raise ValueError(f"File {path} kosong (tidak ada isinya).")

    # Kalau sudah JSON murni (mulai dari { atau [), langsung parse
    if text.lstrip().startswith("{") or text.lstrip().startswith("["):
        return json.loads(text)

    # --- Anggap formatnya JS: 'export const xxx = { ... };' ---

    # Buang semua yang ada di depan '{' pertama (termasuk komentar dan 'export const ... =')
    start = text.find("{")
    if start == -1:
        raise ValueError(f"Tidak menemukan '{{' di {path}, format file tidak dikenali.")
    text = text[start:]

    # Buang ';' di akhir kalau ada
    text = text.strip()
    if text.endswith(";"):
        text = text[:-1]

    # Ubah root: menjadi "root": (untuk taksonomiData.js)
    text = re.sub(r'\broot\s*:', '"root":', text, count=1)

    # Ubah key habitat: dan ekosistem: menjadi "habitat": dan "ekosistem":
    text = re.sub(r'(\s*)(habitat|ekosistem)\s*:', r'\1"\2":', text)

    # Hapus koma yang menggantung sebelum } atau ]
    # misalnya '},\n  ]' -> '}\n  ]'
    text = re.sub(r",(\s*[\]}])", r"\1", text)

    # Sekarang harusnya sudah JSON valid
    return json.loads(text)


def save_json(data, path: Path):
    """
    Menyimpan objek Python ke file JSON dengan indent rapi.
    """
    with path.open("w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def save_js_export(variable_name: str, data, path: Path):
    """
    Menyimpan data sebagai file JS dengan export const.
    """
    json_str = json.dumps(data, ensure_ascii=False, indent=2)
    js_content = f"export const {variable_name} = {json_str};\n"
    with path.open("w", encoding="utf-8") as f:
        f.write(js_content)


def merge_taksonomi_and_habitat():
    # 1. Load data spesies (taksonomiData) dari file JS/JSON
    taksonomi_data = load_js_or_json(TAKSONOMI_FILE)

    # 2. Load data habitat & ekosistem (bisa JS seperti yang kamu kirim)
    habitat_data_raw = load_js_or_json(HABITAT_FILE)

    # 3. Normalisasi key habitat_data (string "1"/"2" -> int 1/2) kalau perlu
    habitat_data = {}
    for key, value in habitat_data_raw.items():
        try:
            new_key = int(key)
        except (ValueError, TypeError):
            new_key = key
        habitat_data[new_key] = value

    # 4. Ambil list root
    root_list = taksonomi_data.get("root", [])

    # 5. Loop setiap item dan gabungkan habitat + ekosistem berdasarkan "no"
    for item in root_list:
        nomor = item.get("no")
        info_habitat = habitat_data.get(nomor)
        if info_habitat:
            item["habitat"] = info_habitat.get("habitat")
            item["ekosistem"] = info_habitat.get("ekosistem")

    # 6. Bentuk struktur final
    new_taksonomi = {
        "root": root_list
    }

    # 7. Simpan ke file JSON dan JS
    save_json(new_taksonomi, OUTPUT_JSON)  # newTaksonomiData.json
    save_js_export("newTaksonomiData", new_taksonomi, OUTPUT_JS)  # newTaksonomiData.js

    print(f"✅ Berhasil membuat {OUTPUT_JSON} dan {OUTPUT_JS}")


if __name__ == "__main__":
    merge_taksonomi_and_habitat()
