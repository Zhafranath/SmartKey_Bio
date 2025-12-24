// buildNavigation.js
import { taksonomiData } from "./src/taxonomyData.js";
import fs from "fs";

/* =========================
   HELPER
========================= */

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .trim()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "");

const titleCase = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

/* =========================
   TREE BUILDER
========================= */

function buildTaxonomyTree(data) {
  const tree = {};

  const levels = [
    "kingdom",
    "filum",
    "kelas",
    "ordo",
    "famili",
    "genus",
    "spesies",
  ];

  data.forEach((item) => {
    let parentKey = "root";

    levels.forEach((level) => {
      const value = item.taksonomi[level];
      if (!value) return;

      const id = slugify(value);

      if (!tree[parentKey]) tree[parentKey] = [];

      if (!tree[parentKey].some((n) => n.id === id)) {
        tree[parentKey].push({
          id,
          name: value.replace(/\(.*?\)/g, "").trim(),
        });
      }

      parentKey = id;
    });
  });

  return tree;
}

/* =========================
   GENERATE
========================= */

const tree = buildTaxonomyTree(taksonomiData.root);

const navigationStructure = {};

Object.entries(tree).forEach(([key, children]) => {
  navigationStructure[key] = children
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((item) => ({
      id: item.id,
      name: item.name,
      desc: "",
      icon: "AUTO",
      color: "AUTO",
      border: "AUTO",
    }));
});

/* =========================
   WRITE FILE
========================= */

const output = `// navigationStructure.js
// ⚠️ AUTO-GENERATED — DO NOT EDIT MANUALLY

export const navigationStructure = ${JSON.stringify(
  navigationStructure,
  null,
  2
)};
`;

fs.writeFileSync("./navigationStructurenew.js", output);

console.log("✅ navigationStructure.js generated successfully");
