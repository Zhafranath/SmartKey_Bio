// navigationStructure.js
import {
  Cat,
  Leaf,
  Sprout,
  Microscope,
  Dna,
  Activity,
  Bug,
  Shell,
  Star,
  Worm,
  Cookie,
  Droplets,
  Circle,
  Flower,
  TreeDeciduous,
  Fish,
  Fingerprint,
  Snail,
  Hexagon,
  Ghost,
  PawPrint,
  Users,
  Rat,
  Bird,
} from "lucide-react";

export const navigationStructure = {
  // =============================================
  // 1. ROOT LEVEL: KINGDOM
  // =============================================
  root: [
    {
      id: "animalia",
      name: "Animalia",
      desc: "Multicellular, heterotrophic animals.",
      icon: Cat,
      color: "bg-red-100 text-red-600",
      border: "border-red-200",
    },
    {
      id: "plantae",
      name: "Plantae",
      desc: "Plants, performing photosynthesis.",
      icon: Leaf,
      color: "bg-green-100 text-green-600",
      border: "border-green-200",
    },
    {
      id: "fungi",
      name: "Fungi",
      desc: "Mushrooms and molds, absorbing organic nutrients.",
      icon: Sprout,
      color: "bg-yellow-100 text-yellow-600",
      border: "border-yellow-200",
    },
    {
      id: "protista",
      name: "Protista",
      desc: "Simple eukaryotic organisms.",
      icon: Microscope,
      color: "bg-purple-100 text-purple-600",
      border: "border-purple-200",
    },
    {
      id: "monera",
      name: "Monera",
      desc: "Prokaryotic organisms (bacteria).",
      icon: Dna,
      color: "bg-gray-100 text-gray-600",
      border: "border-gray-200",
    },
  ], // ============================================= // 2. PHYLUM / DIVISION LEVEL // =============================================

  animalia: [
    {
      id: "chordata",
      name: "Chordata",
      desc: "Possess a backbone or notochord.",
      icon: Activity,
      color: "bg-red-50 text-red-600",
      border: "border-red-200",
    },
    {
      id: "arthropoda",
      name: "Arthropoda",
      desc: "Jointed legs, exoskeleton.",
      icon: Bug,
      color: "bg-amber-50 text-amber-600",
      border: "border-amber-200",
    },
    {
      id: "mollusca",
      name: "Mollusca",
      desc: "Soft-bodied, often with a shell.",
      icon: Shell,
      color: "bg-blue-50 text-blue-600",
      border: "border-blue-200",
    },
    {
      id: "echinodermata",
      name: "Echinodermata",
      desc: "Spiny-skinned animals (Starfish).",
      icon: Star,
      color: "bg-cyan-50 text-cyan-600",
      border: "border-cyan-200",
    },
    {
      id: "annelida",
      name: "Annelida",
      desc: "Segmented worms.",
      icon: Worm,
      color: "bg-pink-50 text-pink-600",
      border: "border-pink-200",
    },
    {
      id: "nematoda",
      name: "Nematoda",
      desc: "Roundworms.",
      icon: Activity,
      color: "bg-rose-50 text-rose-600",
      border: "border-rose-200",
    },
    {
      id: "platyhelminthes",
      name: "Platyhelminthes",
      desc: "Flatworms.",
      icon: Cookie,
      color: "bg-orange-50 text-orange-600",
      border: "border-orange-200",
    },
    {
      id: "cnidaria",
      name: "Cnidaria",
      desc: "Possess stinging cells (Jellyfish).",
      icon: Droplets,
      color: "bg-indigo-50 text-indigo-600",
      border: "border-indigo-200",
    },
    {
      id: "porifera",
      name: "Porifera",
      desc: "Porous animals (Sponges).",
      icon: Circle,
      color: "bg-stone-50 text-stone-600",
      border: "border-stone-200",
    },
  ],

  plantae: [
    {
      id: "angiospermae",
      name: "Angiospermae",
      desc: "Flowering plants (Seeds enclosed in fruit).",
      icon: Flower,
      color: "bg-green-50 text-green-600",
      border: "border-green-200",
    },
    {
      id: "gymnospermae",
      name: "Gymnospermae",
      desc: "Non-flowering plants with naked seeds.",
      icon: TreeDeciduous,
      color: "bg-emerald-50 text-emerald-600",
      border: "border-emerald-200",
    },
    {
      id: "pteridophyta",
      name: "Pteridophyta",
      desc: "Ferns and their relatives.",
      icon: Leaf,
      color: "bg-lime-50 text-lime-600",
      border: "border-lime-200",
    },
    {
      id: "bryophyta",
      name: "Bryophyta",
      desc: "Mosses and liverworts.",
      icon: Sprout,
      color: "bg-teal-50 text-teal-600",
      border: "border-teal-200",
    },
  ],

  fungi: [
    {
      id: "basidiomycota",
      name: "Basidiomycota",
      desc: "Club fungi.",
      icon: Circle,
      color: "bg-yellow-50 text-yellow-600",
      border: "border-yellow-200",
    },
    {
      id: "ascomycota",
      name: "Ascomycota",
      desc: "Sac fungi.",
      icon: Cookie,
      color: "bg-amber-50 text-amber-600",
      border: "border-amber-200",
    },
    {
      id: "zygomycota",
      name: "Zygomycota",
      desc: "Conjugated fungi (Bread mold).",
      icon: Activity,
      color: "bg-orange-50 text-orange-600",
      border: "border-orange-200",
    },
  ], // ============================================= // 3. CLASS LEVEL // ============================================= // --- CHORDATA ---

  chordata: [
    {
      id: "mammalia",
      name: "Mammalia",
      desc: "Nursing, warm-blooded animals with hair.",
      icon: Cat,
      color: "bg-orange-50 text-orange-600",
      border: "border-orange-200",
    },
    {
      id: "aves",
      name: "Aves",
      desc: "Feathered animals (Birds).",
      icon: Bird,
      color: "bg-sky-50 text-sky-600",
      border: "border-sky-200",
    },
    {
      id: "reptilia",
      name: "Reptilia",
      desc: "Crawling, scaly animals.",
      icon: Hexagon,
      color: "bg-emerald-50 text-emerald-600",
      border: "border-emerald-200",
    },
    {
      id: "amphibia",
      name: "Amphibia",
      desc: "Live in both water and land (Frogs).",
      icon: Droplets,
      color: "bg-lime-50 text-lime-600",
      border: "border-lime-200",
    },
    {
      id: "actinopterygii",
      name: "Actinopterygii",
      desc: "Ray-finned bony fish.",
      icon: Fish,
      color: "bg-blue-100 text-blue-600",
      border: "border-blue-300",
    },
    {
      id: "chondrichthyes",
      name: "Chondrichthyes",
      desc: "Cartilaginous fish (Sharks).",
      icon: Fish,
      color: "bg-slate-100 text-slate-600",
      border: "border-slate-300",
    },
  ], // --- ARTHROPODA ---

  arthropoda: [
    {
      id: "insecta",
      name: "Insecta",
      desc: "Insects (6 legs).",
      icon: Bug,
      color: "bg-lime-50 text-lime-600",
      border: "border-lime-200",
    },
    {
      id: "arachnida",
      name: "Arachnida",
      desc: "Spiders and scorpions (8 legs).",
      icon: Fingerprint,
      color: "bg-stone-50 text-stone-600",
      border: "border-stone-200",
    },
    {
      id: "crustacea",
      name: "Crustacea",
      desc: "Shrimps, crabs, and lobsters.",
      icon: Shell,
      color: "bg-cyan-50 text-cyan-600",
      border: "border-cyan-200",
    },
    {
      id: "myriapoda",
      name: "Myriapoda",
      desc: "Centipedes and millipedes.",
      icon: Worm,
      color: "bg-amber-100 text-amber-700",
      border: "border-amber-300",
    },
  ], // --- MOLLUSCA ---

  mollusca: [
    {
      id: "gastropoda",
      name: "Gastropoda",
      desc: "Snails and slugs (Stomach-footed).",
      icon: Snail,
      color: "bg-blue-50 text-blue-600",
      border: "border-blue-200",
    },
    {
      id: "cephalopoda",
      name: "Cephalopoda",
      desc: "Octopuses and squids (Head-footed).",
      icon: Hexagon,
      color: "bg-indigo-50 text-indigo-600",
      border: "border-indigo-200",
    },
    {
      id: "bivalvia",
      name: "Bivalvia",
      desc: "Clams and oysters (Two-shelled).",
      icon: Shell,
      color: "bg-sky-50 text-sky-600",
      border: "border-sky-200",
    },
  ], // --- ANGIOSPERMAE ---

  angiospermae: [
    {
      id: "liliopsida",
      name: "Liliopsida",
      desc: "Monocots (One embryonic leaf).",
      icon: Sprout,
      color: "bg-lime-50 text-lime-600",
      border: "border-lime-200",
    },
    {
      id: "magnoliopsida",
      name: "Magnoliopsida",
      desc: "Dicots (Two embryonic leaves).",
      icon: Flower,
      color: "bg-rose-50 text-rose-600",
      border: "border-rose-200",
    },
  ], // --- GYMNOSPERMAE ---

  gymnospermae: [
    {
      id: "gnetopsida",
      name: "Gnetopsida",
      desc: "Gnetophytes (e.g., Gnetum gnemon).",
      icon: TreeDeciduous,
      color: "bg-amber-50 text-amber-600",
      border: "border-amber-200",
    },
    {
      id: "cycadopsida",
      name: "Cycadopsida",
      desc: "Cycads.",
      icon: Leaf,
      color: "bg-emerald-50 text-emerald-600",
      border: "border-emerald-200",
    },
    {
      id: "pinopsida",
      name: "Pinopsida",
      desc: "Pines and conifers.",
      icon: TreeDeciduous,
      color: "bg-teal-50 text-teal-600",
      border: "border-teal-200",
    },
  ], // --- OTHERS ---

  echinodermata: [
    {
      id: "asteroidea",
      name: "Asteroidea",
      desc: "Starfish.",
      icon: Star,
      color: "bg-orange-50 text-orange-600",
      border: "border-orange-200",
    },
    {
      id: "echinoidea",
      name: "Echinoidea",
      desc: "Sea urchins.",
      icon: Circle,
      color: "bg-purple-50 text-purple-600",
      border: "border-purple-200",
    },
  ],
  annelida: [
    {
      id: "clitellata",
      name: "Clitellata",
      desc: "Earthworms and leeches.",
      icon: Worm,
      color: "bg-pink-50 text-pink-600",
      border: "border-pink-200",
    },
  ],
  cnidaria: [
    {
      id: "scyphozoa",
      name: "Scyphozoa",
      desc: "True jellyfish.",
      icon: Droplets,
      color: "bg-blue-50 text-blue-600",
      border: "border-blue-200",
    },
    {
      id: "anthozoa",
      name: "Anthozoa",
      desc: "Sea anemones and corals.",
      icon: Flower,
      color: "bg-red-50 text-red-600",
      border: "border-red-200",
    },
  ],
  porifera: [
    {
      id: "demospongiae",
      name: "Demospongiae",
      desc: "Common sponges.",
      icon: Circle,
      color: "bg-yellow-50 text-yellow-600",
      border: "border-yellow-200",
    },
  ],
  nematoda: [
    {
      id: "chromadorea",
      name: "Chromadorea",
      desc: "Common roundworms.",
      icon: Activity,
      color: "bg-gray-50 text-gray-600",
      border: "border-gray-200",
    },
  ],
  platyhelminthes: [
    {
      id: "turbellaria",
      name: "Turbellaria",
      desc: "Planarians.",
      icon: Activity,
      color: "bg-orange-50 text-orange-600",
      border: "border-orange-200",
    },
    {
      id: "trematoda",
      name: "Trematoda",
      desc: "Flukes.",
      icon: Ghost,
      color: "bg-red-50 text-red-600",
      border: "border-red-200",
    },
  ], // ============================================= // 4. ORDER LEVEL // ============================================= // --- MAMMALIA ---

  mammalia: [
    {
      id: "carnivora",
      name: "Carnivora",
      desc: "Meat-eaters.",
      icon: PawPrint,
      color: "bg-red-100 text-red-700",
      border: "border-red-300",
    },
    {
      id: "primates",
      name: "Primata",
      desc: "Apes and Humans.",
      icon: Users,
      color: "bg-purple-100 text-purple-700",
      border: "border-purple-300",
    },
    {
      id: "rodentia",
      name: "Rodentia",
      desc: "Gnawing mammals (Rats).",
      icon: Rat,
      color: "bg-amber-100 text-amber-700",
      border: "border-amber-300",
    },
    {
      id: "cetacea",
      name: "Cetacea",
      desc: "Whales and dolphins.",
      icon: Fish,
      color: "bg-blue-100 text-blue-700",
      border: "border-blue-300",
    },
    {
      id: "artiodactyla",
      name: "Artiodactyla",
      desc: "Even-toed ungulates (Cows).",
      icon: Cat,
      color: "bg-green-100 text-green-700",
      border: "border-green-300",
    },
    {
      id: "perissodactyla",
      name: "Perissodactyla",
      desc: "Odd-toed ungulates (Horses).",
      icon: Cat,
      color: "bg-yellow-100 text-yellow-700",
      border: "border-yellow-300",
    },
    {
      id: "proboscidea",
      name: "Proboscidea",
      desc: "Elephants.",
      icon: Star,
      color: "bg-gray-100 text-gray-700",
      border: "border-gray-300",
    },
    {
      id: "diprotodontia",
      name: "Diprotodontia",
      desc: "Kangaroos and relatives.",
      icon: Star,
      color: "bg-orange-100 text-orange-700",
      border: "border-orange-300",
    },
    {
      id: "chiroptera",
      name: "Chiroptera",
      desc: "Bats.",
      icon: Ghost,
      color: "bg-zinc-100 text-zinc-700",
      border: "border-zinc-300",
    },
  ], // --- INSECTA ---

  insecta: [
    {
      id: "lepidoptera",
      name: "Lepidoptera",
      desc: "Butterflies and moths.",
      icon: Bug,
      color: "bg-pink-100 text-pink-700",
      border: "border-pink-300",
    },
    {
      id: "hymenoptera",
      name: "Hymenoptera",
      desc: "Bees, wasps, and ants.",
      icon: Bug,
      color: "bg-yellow-100 text-yellow-700",
      border: "border-yellow-300",
    },
    {
      id: "diptera",
      name: "Diptera",
      desc: "Mosquitoes and flies.",
      icon: Bug,
      color: "bg-gray-100 text-gray-700",
      border: "border-gray-300",
    },
    {
      id: "coleoptera",
      name: "Coleoptera",
      desc: "Beetles.",
      icon: Bug,
      color: "bg-green-100 text-green-700",
      border: "border-green-300",
    },
  ], // --- LILIOPSIDA ---

  liliopsida: [
    {
      id: "poales",
      name: "Poales",
      desc: "Grasses and cereals (Rice, Corn, Sugar Cane).",
      icon: Sprout,
      color: "bg-yellow-100 text-yellow-700",
      border: "border-yellow-300",
    },
    {
      id: "arecales",
      name: "Arecales",
      desc: "Palms (Coconut, Palm Oil).",
      icon: TreeDeciduous,
      color: "bg-green-100 text-green-700",
      border: "border-green-300",
    },
    {
      id: "zingiberales",
      name: "Zingiberales",
      desc: "Ginger and banana relatives.",
      icon: Leaf,
      color: "bg-orange-100 text-orange-700",
      border: "border-orange-300",
    },
    {
      id: "asparagales",
      name: "Asparagales",
      desc: "Orchids and onions.",
      icon: Flower,
      color: "bg-purple-100 text-purple-700",
      border: "border-purple-300",
    },
  ], // --- MAGNOLIOPSIDA ---

  aves: [
  { id: "galliformes", name: "Galliformes", desc: "Burung darat (Ayam).", icon: Bird, color: "bg-sky-50 text-sky-600", border: "border-sky-200" },
  { id: "accipitriformes", name: "Accipitriformes", desc: "Burung pemangsa (Elang).", icon: Bird, color: "bg-red-50 text-red-600", border: "border-red-200" },
  { id: "strigiformes", name: "Strigiformes", desc: "Burung hantu.", icon: Ghost, color: "bg-indigo-50 text-indigo-600", border: "border-indigo-200" },
  ],

reptilia: [
  { id: "squamata", name: "Squamata", desc: "Kadal dan Ular.", icon: Hexagon, color: "bg-emerald-50 text-emerald-600", border: "border-emerald-200" },
  { id: "crocodilia", name: "Crocodilia", desc: "Buaya dan Aligator.", icon: Activity, color: "bg-green-50 text-green-600", border: "border-green-200" },
],

amphibia: [
  { id: "anura", name: "Anura", desc: "Katak dan Kodok.", icon: Droplets, color: "bg-lime-50 text-lime-600", border: "border-lime-200" },
],

actinopterygii: [
  { id: "cypriniformes", name: "Cypriniformes", desc: "Ikan bersisip (Ikan Mas).", icon: Fish, color: "bg-blue-50 text-blue-600", border: "border-blue-200" },
  { id: "siluriformes", name: "Siluriformes", desc: "Ikan lele.", icon: Fish, color: "bg-slate-50 text-slate-600", border: "border-slate-200" },
],

  magnoliopsida: [
    {
      id: "solanales",
      name: "Solanales",
      desc: "Nightshades (Chili, Tomato).",
      icon: Cookie,
      color: "bg-red-100 text-red-700",
      border: "border-red-300",
    },
    {
      id: "malvales",
      name: "Malvales",
      desc: "Mallows (Durian, Hibiscus).",
      icon: Flower,
      color: "bg-pink-100 text-pink-700",
      border: "border-pink-300",
    },
    {
      id: "sapindales",
      name: "Sapindales",
      desc: "Citrus and mango relatives.",
      icon: TreeDeciduous,
      color: "bg-lime-100 text-lime-700",
      border: "border-lime-300",
    },
    {
      id: "rosales",
      name: "Rosales",
      desc: "Roses and banyan trees.",
      icon: Flower,
      color: "bg-rose-100 text-rose-700",
      border: "border-rose-300",
    },
    {
      id: "fabales",
      name: "Fabales",
      desc: "Legumes (Sensitive plant).",
      icon: Leaf,
      color: "bg-emerald-100 text-emerald-700",
      border: "border-emerald-300",
    },
    {
      id: "asterales",
      name: "Asterales",
      desc: "Sunflowers and daisies.",
      icon: Star,
      color: "bg-yellow-100 text-yellow-700",
      border: "border-yellow-300",
    },
    {
      id: "myrtales",
      name: "Myrtales",
      desc: "Myrtles and cloves.",
      icon: TreeDeciduous,
      color: "bg-green-100 text-green-700",
      border: "border-green-300",
    },
    {
      id: "piperales",
      name: "Piperales",
      desc: "Betel and pepper relatives.",
      icon: Leaf,
      color: "bg-green-100 text-green-700",
      border: "border-green-300",
    },
    {
      id: "cucurbitales",
      name: "Cucurbitales",
      desc: "Gourds and pumpkins (Watermelon).",
      icon: Circle,
      color: "bg-green-100 text-green-700",
      border: "border-green-300",
    },
    {
      id: "caryophyllales",
      name: "Caryophyllales",
      desc: "Cactus and spinach relatives.",
      icon: Flower,
      color: "bg-fuchsia-100 text-fuchsia-700",
      border: "border-fuchsia-300",
    },
  ], // --- GNETOPSIDA ---

  gnetopsida: [
    {
      id: "gnetales",
      name: "Gnetales",
      desc: "Melinjo and Gnetum relatives.",
      icon: TreeDeciduous,
      color: "bg-amber-100 text-amber-700",
      border: "border-amber-300",
    },
  ],
  carnivora: [
  {
    id: "felidae",
    name: "Felidae",
    desc: "Cats, Lions, and Tigers.",
    icon: Cat,
    color: "bg-orange-50 text-orange-600",
    border: "border-orange-200",
  },
  {
    id: "canidae",
    name: "Canidae",
    desc: "Dogs, Wolves, and Foxes.",
    icon: PawPrint,
    color: "bg-amber-50 text-amber-600",
    border: "border-amber-200",
  },
],
primates: [
  {
    id: "hominidae",
    name: "Hominidae",
    desc: "Great apes and humans.",
    icon: Users,
    color: "bg-indigo-50 text-indigo-600",
    border: "border-indigo-200",
  },
],
proboscidea: [
  {
    id: "elephantidae",
    name: "Elephantidae",
    desc: "Elephants.",
    icon: Star,
    color: "bg-slate-50 text-slate-600",
    border: "border-slate-200",
  },
],
artiodactyla: [
  {
    id: "bovidae",
    name: "Bovidae",
    desc: "Cows, Goats, and Sheep.",
    icon: Activity,
    color: "bg-emerald-50 text-emerald-600",
    border: "border-emerald-200",
  },
  {
    id: "balaenopteridae",
    name: "Balaenopteridae",
    desc: "Rorquals (e.g., Blue Whale).",
    icon: Fish,
    color: "bg-blue-50 text-blue-600",
    border: "border-blue-200",
  },
],

// --- Dari MAGNOLIOPSIDA (Plantae) ---
caryophyllales: [
  {
    id: "nyctaginaceae",
    name: "Nyctaginaceae",
    desc: "Four o'clock family (e.g., Bougainvillea).",
    icon: Flower,
    color: "bg-pink-50 text-pink-600",
    border: "border-pink-200",
  },
],
laurales: [
  {
    id: "lauraceae",
    name: "Lauraceae",
    desc: "Laurel family (e.g., Avocado).",
    icon: Leaf,
    color: "bg-green-50 text-green-600",
    border: "border-green-200",
  },
],

// --- Dari GNETOPSIDA (Plantae) ---
gnetales: [
  {
    id: "gnetaceae",
    name: "Gnetaceae",
    desc: "Gnetum family (e.g., Melinjo).",
    icon: Sprout,
    color: "bg-yellow-50 text-yellow-600",
    border: "border-yellow-200",
  },
],

galliformes: [
  { id: "phasianidae", name: "Phasianidae", desc: "Keluarga ayam.", icon: Bird, color: "bg-orange-50 text-orange-600", border: "border-orange-200" }
],
accipitriformes: [
  { id: "accipitridae", name: "Accipitridae", desc: "Keluarga elang.", icon: Bird, color: "bg-red-50 text-red-600", border: "border-red-200" }
],
squamata: [
  { id: "varanidae", name: "Varanidae", desc: "Keluarga biawak (Komodo).", icon: Hexagon, color: "bg-emerald-50 text-emerald-600", border: "border-emerald-200" },
  { id: "elapidae", name: "Elapidae", desc: "Keluarga ular berbisa.", icon: Activity, color: "bg-red-50 text-red-600", border: "border-red-200" }
],
anura: [
  { id: "ranidae", name: "Ranidae", desc: "Keluarga katak sejati.", icon: Droplets, color: "bg-green-50 text-green-600", border: "border-green-200" }
],
cypriniformes: [
  { id: "cyprinidae", name: "Cyprinidae", desc: "Keluarga ikan mas.", icon: Fish, color: "bg-blue-50 text-blue-600", border: "border-blue-200" }
],

// =============================================
// 6. GENUS LEVEL
// =============================================

// --- Dari Family FELIDAE ---
felidae: [
  {
    id: "panthera",
    name: "Panthera",
    desc: "Big cats capable of roaring (Tigers, Lions).",
    icon: Cat,
    color: "bg-orange-100 text-orange-700",
    border: "border-orange-300",
  },
  {
    id: "felis",
    name: "Felis",
    desc: "Small cats (Domestic cats).",
    icon: Cat,
    color: "bg-orange-50 text-orange-600",
    border: "border-orange-200",
  },
],

// --- Dari Family CANIDAE ---
canidae: [
  {
    id: "canis",
    name: "Canis",
    desc: "Dogs, wolves, and jackals.",
    icon: PawPrint,
    color: "bg-amber-100 text-amber-700",
    border: "border-amber-300",
  },
],

// --- Dari Family HOMINIDAE ---
hominidae: [
  {
    id: "homo",
    name: "Homo",
    desc: "Humans and direct ancestors.",
    icon: Users,
    color: "bg-purple-100 text-purple-700",
    border: "border-purple-300",
  },
  {
    id: "pongo",
    name: "Pongo",
    desc: "Orangutans.",
    icon: Users,
    color: "bg-orange-100 text-orange-700",
    border: "border-orange-300",
  },
],

// --- Dari Family ELEPHANTIDAE ---
elephantidae: [
  {
    id: "elephas",
    name: "Elephas",
    desc: "Asian elephants.",
    icon: Star,
    color: "bg-gray-100 text-gray-700",
    border: "border-gray-300",
  },
],

// --- Dari Family BOVIDAE ---
bovidae: [
  {
    id: "bos",
    name: "Bos",
    desc: "Oxen and cattle.",
    icon: Activity,
    color: "bg-green-100 text-green-700",
    border: "border-green-300",
  },
  {
    id: "capra",
    name: "Capra",
    desc: "Goats.",
    icon: Activity,
    color: "bg-lime-100 text-lime-700",
    border: "border-lime-300",
  },
],

// --- Dari Family NYCTAGINACEAE ---
nyctaginaceae: [
  {
    id: "bougainvillea",
    name: "Bougainvillea",
    desc: "Paper flowers.",
    icon: Flower,
    color: "bg-pink-100 text-pink-700",
    border: "border-pink-300",
  },
],

// --- Dari Family GNETACEAE ---
gnetaceae: [
  {
    id: "gnetum",
    name: "Gnetum",
    desc: "Melinjo relatives.",
    icon: TreeDeciduous,
    color: "bg-amber-100 text-amber-700",
    border: "border-amber-300",
  },
],

// =============================================
// 7. SPECIES LEVEL
// =============================================

// --- Dari Genus PANTHERA ---
panthera: [
  {
    id: "panthera_tigris",
    name: "Panthera tigris",
    desc: "Sumatran Tiger.",
    icon: Cat,
    color: "bg-orange-100 text-orange-700",
    border: "border-orange-300",
  },
  {
    id: "panthera_leo",
    name: "Panthera leo",
    desc: "Lion.",
    icon: Cat,
    color: "bg-yellow-100 text-yellow-700",
    border: "border-yellow-300",
  },
],

// --- Dari Genus FELIS ---
felis: [
  {
    id: "felis_catus",
    name: "Felis catus",
    desc: "Domestic Cat.",
    icon: Cat,
    color: "bg-orange-50 text-orange-600",
    border: "border-orange-200",
  },
],

// --- Dari Genus CANIS ---
canis: [
  {
    id: "canis_lupus",
    name: "Canis lupus",
    desc: "Dog / Wolf.",
    icon: PawPrint,
    color: "bg-amber-100 text-amber-700",
    border: "border-amber-300",
  },
],

// --- Dari Genus HOMO ---
homo: [
  {
    id: "homo_sapiens",
    name: "Homo sapiens",
    desc: "Human.",
    icon: Users,
    color: "bg-purple-100 text-purple-700",
    border: "border-purple-300",
  },
],

// --- Dari Genus PONGO ---
pongo: [
  {
    id: "pongo_pygmaeus",
    name: "Pongo pygmaeus",
    desc: "Bornean Orangutan.",
    icon: Users,
    color: "bg-orange-100 text-orange-700",
    border: "border-orange-300",
  },
],

// --- Dari Genus ELEPHAS ---
elephas: [
  {
    id: "elephas_maximus",
    name: "Elephas maximus",
    desc: "Asian Elephant.",
    icon: Star,
    color: "bg-gray-100 text-gray-700",
    border: "border-gray-300",
  },
],

// --- Dari Genus BOS ---
bos: [
  {
    id: "bos_taurus",
    name: "Bos taurus",
    desc: "Cow.",
    icon: Activity,
    color: "bg-green-100 text-green-700",
    border: "border-green-300",
  },
],

// --- Dari Genus CAPRA ---
capra: [
  {
    id: "capra_hircus",
    name: "Capra hircus",
    desc: "Goat.",
    icon: Activity,
    color: "bg-lime-100 text-lime-700",
    border: "border-lime-300",
  },
],

// --- Dari Genus BOUGAINVILLEA ---
bougainvillea: [
  {
    id: "bougainvillea_glabra",
    name: "Bougainvillea glabra",
    desc: "Paper Flower.",
    icon: Flower,
    color: "bg-pink-100 text-pink-700",
    border: "border-pink-300",
  },
],

// --- Dari Genus GNETUM ---
gnetum: [
  {
    id: "gnetum_gnemon",
    name: "Gnetum gnemon",
    desc: "Melinjo.",
    icon: TreeDeciduous,
    color: "bg-amber-100 text-amber-700",
    border: "border-amber-300",
  },
],

phasianidae: [
  { id: "gallus", name: "Gallus", desc: "Genus Ayam.", icon: Bird, color: "bg-orange-100 text-orange-700", border: "border-orange-300" }
],
varanidae: [
  { id: "varanus", name: "Varanus", desc: "Genus Biawak.", icon: Hexagon, color: "bg-emerald-100 text-emerald-700", border: "border-emerald-300" }
],
ranidae: [
  { id: "fejervarya", name: "Fejervarya", desc: "Genus Katak sawah.", icon: Droplets, color: "bg-green-100 text-green-700", border: "border-green-300" }
],
cyprinidae: [
  { id: "cyprinus", name: "Cyprinus", desc: "Genus Ikan karper.", icon: Fish, color: "bg-blue-100 text-blue-700", border: "border-blue-300" }
],

// --- 7. SPECIES LEVEL ---
gallus: [
  { id: "gallus_gallus", name: "Gallus gallus", desc: "Ayam.", icon: Bird, color: "bg-orange-100 text-orange-700", border: "border-orange-300" }
],
varanus: [
  { id: "varanus_komodoensis", name: "Varanus komodoensis", desc: "Komodo Dragon.", icon: Hexagon, color: "bg-emerald-100 text-emerald-700", border: "border-emerald-300" }
],
fejervarya: [
  { id: "fejervarya_cancrivora", name: "Fejervarya cancrivora", desc: "Katak Sawah.", icon: Droplets, color: "bg-green-100 text-green-700", border: "border-green-300" }
],
cyprinus: [
  { id: "cyprinus_carpio", name: "Cyprinus carpio", desc: "Ikan Mas.", icon: Fish, color: "bg-blue-100 text-blue-700", border: "border-blue-300" }
],
};
