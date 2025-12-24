// navigationStructure.js
import {
  Cat, Leaf, Sprout, Microscope, Dna, Activity, Bug, Shell, Star, Worm,
  Cookie, Droplets, Circle, Flower, TreeDeciduous, Fish, Fingerprint,
  Snail, Hexagon, Ghost, PawPrint, Users, Rat, Bird
} from "lucide-react";

export const navigationStructure = {

  // =====================================================
  // 1. KINGDOM
  // =====================================================
  root: [
    { id: "animalia", name: "Animalia", desc: "Multicellular animals.", icon: Cat },
    { id: "plantae", name: "Plantae", desc: "Photosynthetic plants.", icon: Leaf },
    { id: "fungi", name: "Fungi", desc: "Absorptive heterotrophs.", icon: Sprout },
    { id: "protista", name: "Protista", desc: "Simple eukaryotes.", icon: Microscope },
    { id: "monera", name: "Monera", desc: "Prokaryotes.", icon: Dna },
  ],

  // =====================================================
  // 2. PHYLUM / DIVISION
  // =====================================================
  animalia: [
    { id: "chordata", name: "Chordata", desc: "Vertebrates.", icon: Activity },
    { id: "arthropoda", name: "Arthropoda", desc: "Jointed legs.", icon: Bug },
    { id: "mollusca", name: "Mollusca", desc: "Soft-bodied.", icon: Shell },
    { id: "echinodermata", name: "Echinodermata", desc: "Spiny skin.", icon: Star },
    { id: "annelida", name: "Annelida", desc: "Segmented worms.", icon: Worm },
    { id: "nematoda", name: "Nematoda", desc: "Roundworms.", icon: Activity },
    { id: "platyhelminthes", name: "Platyhelminthes", desc: "Flatworms.", icon: Cookie },
    { id: "cnidaria", name: "Cnidaria", desc: "Stinging cells.", icon: Droplets },
    { id: "porifera", name: "Porifera", desc: "Sponges.", icon: Circle },
  ],

  plantae: [
    { id: "angiospermae", name: "Angiospermae", desc: "Flowering plants.", icon: Flower },
    { id: "gymnospermae", name: "Gymnospermae", desc: "Naked seeds.", icon: TreeDeciduous },
    { id: "pteridophyta", name: "Pteridophyta", desc: "Ferns.", icon: Leaf },
    { id: "bryophyta", name: "Bryophyta", desc: "Mosses.", icon: Sprout },
  ],

  fungi: [
    { id: "basidiomycota", name: "Basidiomycota", desc: "Club fungi.", icon: Circle },
    { id: "ascomycota", name: "Ascomycota", desc: "Sac fungi.", icon: Cookie },
    { id: "zygomycota", name: "Zygomycota", desc: "Bread mold.", icon: Activity },
  ],

  // =====================================================
  // 3. CLASS
  // =====================================================
  chordata: [
    { id: "mammalia", name: "Mammalia", desc: "Warm-blooded.", icon: Cat },
    { id: "aves", name: "Aves", desc: "Birds.", icon: Bird },
    { id: "reptilia", name: "Reptilia", desc: "Scaly.", icon: Hexagon },
    { id: "amphibia", name: "Amphibia", desc: "Land & water.", icon: Droplets },
    { id: "actinopterygii", name: "Actinopterygii", desc: "Bony fish.", icon: Fish },
    { id: "chondrichthyes", name: "Chondrichthyes", desc: "Cartilage fish.", icon: Fish },
  ],

  arthropoda: [
    { id: "insecta", name: "Insecta", desc: "6 legs.", icon: Bug },
    { id: "arachnida", name: "Arachnida", desc: "8 legs.", icon: Fingerprint },
    { id: "crustacea", name: "Crustacea", desc: "Crabs.", icon: Shell },
    { id: "myriapoda", name: "Myriapoda", desc: "Many legs.", icon: Worm },
  ],

  mollusca: [
    { id: "gastropoda", name: "Gastropoda", desc: "Snails.", icon: Snail },
    { id: "cephalopoda", name: "Cephalopoda", desc: "Octopus.", icon: Hexagon },
    { id: "bivalvia", name: "Bivalvia", desc: "Clams.", icon: Shell },
  ],

  angiospermae: [
    { id: "liliopsida", name: "Liliopsida", desc: "Monocots.", icon: Sprout },
    { id: "magnoliopsida", name: "Magnoliopsida", desc: "Dicots.", icon: Flower },
  ],

  gymnospermae: [
    { id: "gnetopsida", name: "Gnetopsida", desc: "Melinjo.", icon: TreeDeciduous },
    { id: "cycadopsida", name: "Cycadopsida", desc: "Cycads.", icon: Leaf },
    { id: "pinopsida", name: "Pinopsida", desc: "Conifers.", icon: TreeDeciduous },
  ],

  // =====================================================
  // 4. ORDER
  // =====================================================
  mammalia: [
    { id: "carnivora", name: "Carnivora", icon: PawPrint },
    { id: "primates", name: "Primates", icon: Users },
    { id: "rodentia", name: "Rodentia", icon: Rat },
    { id: "cetacea", name: "Cetacea", icon: Fish },
    { id: "artiodactyla", name: "Artiodactyla", icon: Activity },
    { id: "perissodactyla", name: "Perissodactyla", icon: Activity },
    { id: "proboscidea", name: "Proboscidea", icon: Star },
    { id: "chiroptera", name: "Chiroptera", icon: Ghost },
  ],

  aves: [
    { id: "galliformes", name: "Galliformes", icon: Bird },
    { id: "accipitriformes", name: "Accipitriformes", icon: Bird },
    { id: "strigiformes", name: "Strigiformes", icon: Ghost },
    { id: "columbiformes", name: "Columbiformes", icon: Bird },
    { id: "sphenisciformes", name: "Sphenisciformes", icon: Bird },
    { id: "anseriformes", name: "Anseriformes", icon: Bird },
    { id: "struthioniformes", name: "Struthioniformes", icon: Bird },
    { id: "passeriformes", name: "Passeriformes", icon: Bird },
  ],

  reptilia: [
    { id: "squamata", name: "Squamata", icon: Hexagon },
    { id: "crocodilia", name: "Crocodilia", icon: Activity },
    { id: "testudines", name: "Testudines", icon: Hexagon },
  ],

  actinopterygii: [
    { id: "cypriniformes", name: "Cypriniformes", icon: Fish },
    { id: "siluriformes", name: "Siluriformes", icon: Fish },
    { id: "perciformes", name: "Perciformes", icon: Fish },
{ id: "syngnathiformes", name: "Syngnathiformes", icon: Fish },
  ],

  amphibia: [
    { id: "urodela", name: "Urodela", icon: Droplets },
  ],

  liliopsida: [
    { id: "poales", name: "Poales", icon: Sprout },
    { id: "arecales", name: "Arecales", icon: TreeDeciduous },
    { id: "zingiberales", name: "Zingiberales", icon: Leaf },
    { id: "asparagales", name: "Asparagales", icon: Flower },
  ],

  magnoliopsida: [
    { id: "solanales", name: "Solanales", icon: Cookie },
    { id: "malvales", name: "Malvales", icon: Flower },
    { id: "sapindales", name: "Sapindales", icon: TreeDeciduous },
    { id: "rosales", name: "Rosales", icon: Flower },
    { id: "fabales", name: "Fabales", icon: Leaf },
    { id: "asterales", name: "Asterales", icon: Star },
    { id: "myrtales", name: "Myrtales", icon: TreeDeciduous },
    { id: "piperales", name: "Piperales", icon: Leaf },
    { id: "cucurbitales", name: "Cucurbitales", icon: Circle },
    { id: "caryophyllales", name: "Caryophyllales", icon: Flower },
    { id: "laurales", name: "Laurales", icon: Leaf },
    { id: "brassicales", name: "Brassicales", icon: Leaf },
    { id: "lamiales", name: "Lamiales", icon: Flower },
    { id: "malpighiales", name: "Malpighiales", icon: TreeDeciduous },
    { id: "gentianales", name: "Gentianales", icon: Flower },
    { id: "ericales", name: "Ericales", icon: Flower },
    { id: "oxalidales", name: "Oxalidales", icon: Leaf },
    { id: "apiales", name: "Apiales", icon: Flower },
    { id: "nymphaeales", name: "Nymphaeales", icon: Droplets },
  ],

  arachnida: [
  { id: "araneae", name: "Araneae", icon: Fingerprint },
  { id: "scorpiones", name: "Scorpiones", icon: Fingerprint },
],

  diprotodontia: [
  { id: "macropodidae", name: "Macropodidae" },
  ],

  chiroptera: [
  { id: "pteropodidae", name: "Pteropodidae" },
  ],

  // =====================================================
  // 5. FAMILY
  // =====================================================

  columbiformes: [
    { id: "columbidae", name: "Columbidae", icon: Bird },
  ],

  sphenisciformes: [
    { id: "spheniscidae", name: "Spheniscidae", icon: Bird },
  ],
  anseriformes: [
    { id: "anatidae", name: "Anatidae", icon: Bird },
  ],

  struthioniformes: [
     { id: "struthionidae", name: "Struthionidae", icon: Bird },
  ],

  passeriformes: [
    { id: "paradisaeidae", name: "Paradisaeidae", icon: Bird },
    { id: "corvidae", name: "Corvidae", icon: Bird }
  ],
  macropodidae: [
  { id: "osphranter", name: "Osphranter", icon: Activity },
],

  carnivora: [
    { id: "felidae", name: "Felidae", icon: Cat },
    { id: "canidae", name: "Canidae", icon: PawPrint },
    { id: "ursidae", name: "Ursidae", icon: Cat},
  ],

    pteropodidae: [
    { id: "pteropus", name: "Pteropus", icon: Ghost },
  ],

  Proboscidea: [
    { id: "Elephantidae", name: "Elephantidae", icon: PawPrint },
  ],
  perissodactyla: [
    { id: "equidae", name: "Equidae" },
  ],

  equidae: [
    { id: "equus", name: "Equus" },
  ],

  primates: [
    { id: "hominidae", name: "Hominidae", icon: Users },
  ],

  artiodactyla: [
    { id: "bovidae", name: "Bovidae", icon: Activity },
  ],

  cetacea: [
    { id: "balaenopteridae", name: "Balaenopteridae", icon: Fish },
    { id: "delphinidae", name: "Delphinidae" },
  ],

  galliformes: [
    { id: "phasianidae", name: "Phasianidae", icon: Bird },
  ],

  squamata: [
    { id: "varanidae", name: "Varanidae", icon: Hexagon },
    { id: "elapidae", name: "Elapidae", icon: Activity },
  ],

  cypriniformes: [
    { id: "cyprinidae", name: "Cyprinidae", icon: Fish },
  ],

  caryophyllales: [
    { id: "nyctaginaceae", name: "Nyctaginaceae", icon: Flower },
  ],

  laurales: [
    { id: "lauraceae", name: "Lauraceae", icon: Leaf },
  ],

  gnetopsida: [
    { id: "gnetales", name: "Gnetales", icon: TreeDeciduous },
  ],

  gnetales: [
    { id: "gnetaceae", name: "Gnetaceae", icon: Sprout },
  ],
  brassicales: [
  { id: "caricaceae", name: "Caricaceae", icon: Leaf }, // Papaya
],

lamiales: [
  { id: "oleaceae", name: "Oleaceae", icon: Flower }, // Jasmine
  { id: "lamiaceae", name: "Lamiaceae", icon: Leaf }, // Teak
],

malpighiales: [
  { id: "euphorbiaceae", name: "Euphorbiaceae", icon: Leaf }, // Cassava, Rubber
  { id: "rafflesiaceae", name: "Rafflesiaceae", icon: Flower }, // Rafflesia
],

gentianales: [
  { id: "rubiaceae", name: "Rubiaceae", icon: Leaf }, // Coffee
  { id: "apocynaceae", name: "Apocynaceae", icon: Flower }, // Frangipani
],

ericales: [
  { id: "theaceae", name: "Theaceae", icon: Leaf }, // Tea
],

oxalidales: [
  { id: "oxalidaceae", name: "Oxalidaceae", icon: Leaf }, // Starfruit
],

apiales: [
  { id: "apiaceae", name: "Apiaceae", icon: Leaf }, // Carrot
],

nymphaeales: [
  { id: "nymphaeaceae", name: "Nymphaeaceae", icon: Droplets }, // Lotus
],

  // =====================================================
  // 6. GENUS
  // =====================================================

  columbidae: [{ id: "columba", icon: Bird }],
  spheniscidae: [{ id: "aptenodytes", icon: Bird }],
  anatidae: [
    { id: "anas", icon: Bird },
    { id: "cygnus", icon: Bird },
  ],
  struthionidae: [{ id: "struthio", icon: Bird }],
  paradisaeidae: [{ id: "cicinnurus", icon: Bird }],
  corvidae: [{ id: "corvus", icon: Bird }],

  felidae: [
    { id: "panthera", name: "Panthera", icon: Cat },
    { id: "felis", name: "Felis", icon: Cat },
  ],

  ursidae: [
  { id: "ursus", name: "Ursus", icon: Cat },
],

  Elephantidae: [
    { id: "Elephas", name: "Elephas", icon: PawPrint },
  ],

  canidae: [
    { id: "canis", name: "Canis", icon: PawPrint },
  ],

  hominidae: [
    { id: "homo", name: "Homo", icon: Users },
    { id: "pongo", name: "Pongo", icon: Users },
  ],

  bovidae: [
    { id: "bos", name: "Bos", icon: Activity },
    { id: "capra", name: "Capra", icon: Activity },
  ],

  balaenopteridae: [
  { id: "balaenoptera", name: "Balaenoptera", icon: Fish },
],

  delphinidae: [
  { id: "tursiops", name: "Tursiops", icon: Fish },
],

  phasianidae: [
    { id: "gallus", name: "Gallus", icon: Bird },
  ],

  varanidae: [
    { id: "varanus", name: "Varanus", icon: Hexagon },
  ],

  cyprinidae: [
    { id: "cyprinus", name: "Cyprinus", icon: Fish },
  ],

  nyctaginaceae: [
    { id: "bougainvillea", name: "Bougainvillea", icon: Flower },
  ],

  gnetaceae: [
    { id: "gnetum", name: "Gnetum", icon: TreeDeciduous },
  ],
  caricaceae: [
  { id: "carica", name: "Carica", icon: Leaf },
],

oleaceae: [
  { id: "jasminum", name: "Jasminum", icon: Flower },
],

lamiaceae: [
  { id: "tectona", name: "Tectona", icon: TreeDeciduous },
],

euphorbiaceae: [
  { id: "manihot", name: "Manihot", icon: Leaf },
  { id: "hevea", name: "Hevea", icon: TreeDeciduous },
],

rafflesiaceae: [
  { id: "rafflesia", name: "Rafflesia", icon: Flower },
],

rubiaceae: [
  { id: "coffea", name: "Coffea", icon: Leaf },
],

apocynaceae: [
  { id: "plumeria", name: "Plumeria", icon: Flower },
],

theaceae: [
  { id: "camellia", name: "Camellia", icon: Leaf },
],

oxalidaceae: [
  { id: "averrhoa", name: "Averrhoa", icon: Leaf },
],

apiaceae: [
  { id: "daucus", name: "Daucus", icon: Leaf },
],

nymphaeaceae: [
  { id: "nymphaea", name: "Nymphaea", icon: Droplets },
],

  // =====================================================
  // 7. SPECIES
  // =====================================================
  panthera: [
    { id: "panthera_tigris", name: "Panthera tigris", icon: Cat },
    { id: "panthera_leo", name: "Panthera leo", icon: Cat },
  ],

  felis: [
    { id: "felis_catus", name: "Felis catus", icon: Cat },
  ],

  canis: [
    { id: "canis_lupus", name: "Canis lupus", icon: PawPrint },
  ],

  Elephas: [
    { id: "Elephas_maximus", name: "Elephas maximus", icon: PawPrint },
  ],

  homo: [
    { id: "homo_sapiens", name: "Homo sapiens", icon: Users },
  ],

  pongo: [
    { id: "pongo_pygmaeus", name: "Pongo pygmaeus", icon: Users },
  ],

  bos: [
    { id: "bos_taurus", name: "Bos taurus", icon: Activity },
  ],

  capra: [
    { id: "capra_hircus", name: "Capra hircus", icon: Activity },
  ],

  gallus: [
    { id: "gallus_gallus", name: "Gallus gallus", icon: Bird },
  ],

  varanus: [
    { id: "varanus_komodoensis", name: "Varanus komodoensis", icon: Hexagon },
  ],

  cyprinus: [
    { id: "cyprinus_carpio", name: "Cyprinus carpio", icon: Fish },
  ],

  bougainvillea: [
    { id: "bougainvillea_glabra", name: "Bougainvillea glabra", icon: Flower },
  ],

  gnetum: [
    { id: "gnetum_gnemon", name: "Gnetum gnemon", icon: TreeDeciduous },
  ],

  crocodilia: [
   { id: "crocodylidae", name: "Crocodylidae", icon: Hexagon },
],

crocodylidae: [
  { id: "crocodylus", name: "Crocodylus", icon: Hexagon },
],
testudines: [
   { id: "cheloniidae", name: "Cheloniidae", icon: Hexagon },
],

cheloniidae: [
  { id: "chelonia", name: "Chelonia" },
],

chamaeleonidae: [{ id: "chamaeleo", icon: Hexagon }],
iguanidae: [{ id: "iguana", icon: Hexagon }],
gekkonidae: [{ id: "gekko", icon: Hexagon }],

anura: [
  { id: "ranidae", icon: Droplets },
  { id: "bufonidae", icon: Droplets },
],

urodela: [
  { id: "ambystomatidae", icon: Droplets },
  { id: "salamandridae", icon: Droplets },
],

ranidae: [{ id: "fejervarya", icon: Droplets }],
bufonidae: [{ id: "duttaphrynus", icon: Droplets }],
ambystomatidae: [{ id: "ambystoma", icon: Droplets }],
salamandridae: [{ id: "salamandra", icon: Droplets }],
perciformes: [
  { id: "pomacentridae", icon: Fish },
  { id: "osphronemidae", icon: Fish },
],

syngnathiformes: [
  { id: "syngnathidae", icon: Fish },
],

siluriformes: [
  { id: "clariidae", icon: Fish },
],

pomacentridae: [{ id: "amphiprion", icon: Fish }],
osphronemidae: [{ id: "betta", icon: Fish }],
syngnathidae: [{ id: "hippocampus", icon: Fish }],
clariidae: [{ id: "clarias", icon: Fish }],
lepidoptera: [{ id: "nymphalidae", icon: Bug }],

hymenoptera: [
  { id: "apidae", icon: Bug },
  { id: "formicidae", icon: Bug },
],

diptera: [{ id: "culicidae", icon: Bug }],

araneae: [{ id: "theridiidae", icon: Fingerprint }],

scorpiones: [{ id: "scorpionidae", icon: Fingerprint }],

nymphalidae: [{ id: "danaus", icon: Bug }],
apidae: [{ id: "apis", icon: Bug }],
formicidae: [{ id: "lasius", icon: Bug }],
culicidae: [{ id: "aedes", icon: Bug }],
theridiidae: [{ id: "latrodectus", icon: Fingerprint }],
scorpionidae: [{ id: "heterometrus", icon: Fingerprint }],
};
