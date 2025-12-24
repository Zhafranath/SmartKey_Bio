export const branchingLogic = {
  // =============================================
  // LEVEL 1: KINGDOM (START)
  // =============================================
  start: {
    question: "Is this organism a plant or an animal?",
    options: [
      { label: "Animal (Animalia)", desc: "Moves actively, heterotrophic (eats other organisms).", next: "q_animal_backbone" },
      { label: "Plant (Plantae)", desc: "Performs photosynthesis, contains chlorophyll.", next: "q_plant_seed" }
    ]
  },

  // =============================================
  // ANIMAL BRANCH (ANIMALIA)
  // =============================================
  q_animal_backbone: {
    question: "Does this animal have a backbone?",
    options: [
      { label: "Yes (Vertebrates)", desc: "Has a spinal column (Chordata).", next: "q_vertebrata_class" },
      { label: "No (Invertebrates)", desc: "Does not have a backbone (Arthropoda, Mollusca, etc.).", next: "q_invertebrata_legs" }
    ]
  },

  // --- INVERTEBRATE PATH ---
  q_invertebrata_legs: {
    question: "Does this animal have clearly visible legs?",
    options: [
      { label: "Yes, Jointed Legs", desc: "Phylum Arthropoda.", next: "q_arthropoda_legs" },
      { label: "No Legs", desc: "Mollusca, Annelida, etc.", next: "q_no_legs_type" }
    ]
  },
  q_no_legs_type: {
    question: "What is the shape of its body?",
    options: [
      { label: "Soft, with Tentacles", desc: "Class Cephalopoda (Octopus/Squid).", next: "result_octopus" },
      { label: "Long, Tube-like", desc: "Phylum Annelida (Worms).", next: "result_earthworm" }
    ]
  },
  q_arthropoda_legs: {
    question: "How many legs does it have?",
    options: [
      { label: "6 Legs", desc: "Class Insecta (Insects).", next: "q_insect_wings" },
      { label: "8 Legs", desc: "Class Arachnida (Spiders/Scorpions).", next: "q_arachnida_tail" }
    ]
  },
  q_insect_wings: {
    question: "Does this animal have wings for flying?",
    options: [
      { label: "Yes, Can Fly", desc: "Winged insects (Pterygota).", next: "q_insect_flying_type" },
      { label: "No / Crawling", desc: "Ground-dwelling insects (Ants).", next: "result_ant" }
    ]
  },
  q_insect_flying_type: {
    question: "What is the characteristic of its wings or behavior?",
    options: [
      { label: "Beautiful Colored Wings", desc: "Order Lepidoptera (Butterflies).", next: "result_butterfly" },
      { label: "Blood-sucking", desc: "Order Diptera (Mosquitoes).", next: "result_mosquito" },
      { label: "Honey Producer", desc: "Order Hymenoptera (Bees).", next: "result_bee" }
    ]
  },
  q_arachnida_tail: {
    question: "Does it have a tail with a venomous stinger?",
    options: [
      { label: "Yes, Has a Stinger", desc: "Order Scorpiones (Scorpions).", next: "result_scorpion" },
      { label: "No, Spins Webs", desc: "Order Araneae (Spiders).", next: "result_spider" }
    ]
  },

  // --- VERTEBRATE PATH ---
  q_vertebrata_class: {
    question: "What is its primary body covering?",
    options: [
      { label: "Hair or Fur", desc: "Class Mammalia.", next: "q_mammal_habitat" },
      { label: "Feathers", desc: "Class Aves (Birds).", next: "q_bird_fly" },
      { label: "Dry Scales / Hard Skin", desc: "Class Reptilia.", next: "q_reptile_legs" },
      { label: "Moist / Slimy Skin", desc: "Class Amphibia.", next: "q_amphibi_tail" },
      { label: "Wet Scales / Mucus", desc: "Class Pisces (Fish).", next: "q_fish_bones" }
    ]
  },

  // CLASS MAMMALIA
  q_mammal_habitat: {
    question: "What is its dominant habitat or mode of movement?",
    options: [
      { label: "Lives in Water (Marine)", desc: "Order Cetacea (Whales/Dolphins).", next: "q_mammal_marine" },
      { label: "Capable of Flight", desc: "Order Chiroptera (Bats).", next: "result_bat" }, 
      { label: "Lives on Land", desc: "Carnivores, Herbivores, Primates, etc.", next: "q_mammal_land_diet" }
    ]
  },
  q_mammal_marine: {
    question: "What is its body size?",
    options: [
      { label: "Giant (>20 meters)", desc: "Family Balaenopteridae (Blue Whale).", next: "result_blue_whale" }, 
      { label: "Medium, Bottle-nosed", desc: "Family Delphinidae (Dolphin).", next: "result_dolphin" } 
    ]
  },
  q_mammal_land_diet: {
    question: "What is its type of diet?",
    options: [
      { label: "Meat-eater", desc: "Order Carnivora.", next: "q_mammal_carnivore" },
      { label: "Plant-eater", desc: "Order Artiodactyla, Perissodactyla, etc.", next: "q_mammal_herbivore" },
      { label: "Omnivore / Highly Intelligent", desc: "Order Primates.", next: "q_mammal_primate" }
    ]
  },
  q_mammal_carnivore: {
    question: "Choose the most accurate physical characteristic:",
    options: [
      { label: "Big Cat", desc: "Family Felidae.", next: "q_big_cat" },
      { label: "Dog / Wolf", desc: "Family Canidae.", next: "result_dog" },
      { label: "Small Domestic Cat", desc: "Felis catus.", next: "result_cat" },
      { label: "Polar Bear", desc: "Family Ursidae.", next: "result_polar_bear" }
    ]
  },
  q_big_cat: {
    question: "Does it have a mane (thick hair around the neck)?",
    options: [
      { label: "Yes (Male)", desc: "Panthera leo (Lion).", next: "result_lion" },
      { label: "No (Striped)", desc: "Panthera tigris (Tiger).", next: "result_tiger" }
    ]
  },
  q_mammal_herbivore: {
    question: "What is its unique feature?",
    options: [
      { label: "Has a Long Trunk", desc: "Order Proboscidea (Elephant).", next: "result_elephant" },
      { label: "Pouched & Jumps", desc: "Order Diprotodontia (Kangaroo).", next: "result_kangaroo" },
      { label: "Odd-toed Hoof", desc: "Order Perissodactyla (Horse).", next: "result_horse" },
      { label: "Even-toed Hoof", desc: "Order Artiodactyla (Cow/Goat).", next: "q_mammal_farm" }
    ]
  },
  q_mammal_farm: {
    question: "What is its size?",
    options: [
      { label: "Large", desc: "Cow (Bos taurus).", next: "result_cow" },
      { label: "Medium & Bearded", desc: "Goat (Capra hircus).", next: "result_goat" }
    ]
  },
  q_mammal_primate: {
    question: "Does it have thick fur all over its body?",
    options: [
      { label: "Yes", desc: "Orangutan (Pongo).", next: "result_orangutan" },
      { label: "No / Very Little", desc: "Human (Homo sapiens).", next: "result_human" }
    ]
  },

  // CLASS AVES (BIRDS)
  q_bird_fly: {
    question: "Is this bird capable of flight?",
    options: [
      { label: "Can Fly", desc: "Carinatae group.", next: "q_bird_flying_type" },
      { label: "Flightless", desc: "Ratites group (Ostrich/Penguin).", next: "q_bird_flightless" }
    ]
  },
  q_bird_flightless: {
    question: "Where is its habitat?",
    options: [
      { label: "Savannah / Grasslands", desc: "Struthioniformes (Ostrich).", next: "result_ostrich" },
      { label: "Icy Regions (Polar)", desc: "Sphenisciformes (Penguin).", next: "result_penguin" }
    ]
  },
  q_bird_flying_type: {
    question: "What is its primary habit?",
    options: [
      { label: "Swimming (Waterfowl)", desc: "Order Anseriformes.", next: "q_bird_water" },
      { label: "Predator (Sharp Talons)", desc: "Raptors (Eagle/Owl).", next: "q_bird_predator" },
      { label: "Others", desc: "Chicken, Pigeon, etc.", next: "q_bird_general" }
    ]
  },
  q_bird_water: {
    question: "What is the color or neck feature?",
    options: [
      { label: "Long White Neck", desc: "Swan (Cygnus).", next: "result_swan" },
      { label: "Short Neck", desc: "Duck (Anas).", next: "result_duck" }
    ]
  },
  q_bird_predator: {
    question: "When does it actively hunt?",
    options: [
      { label: "Daytime", desc: "Accipitriformes (Eagle).", next: "result_eagle" },
      { label: "Nighttime", desc: "Strigiformes (Owl).", next: "result_owl" }
    ]
  },
  q_bird_general: {
    question: "Choose the most fitting trait:",
    options: [
      { label: "Domesticated / Crows", desc: "Galliformes (Chicken).", next: "result_chicken" },
      { label: "Messenger / Homing Bird", desc: "Columbiformes (Pigeon).", next: "result_pigeon" },
      { label: "Pitch Black Feathers", desc: "Passeriformes (Raven).", next: "result_raven" },
      { label: "Highly Ornamental", desc: "Paradisaeidae (Bird of Paradise).", next: "result_cendrawasih" }
    ]
  },

  // CLASS REPTILIA
  q_reptile_legs: {
    question: "Does it have legs?",
    options: [
      { label: "Has 4 Legs", desc: "Lizards, Crocodiles, Turtles.", next: "q_reptile_legged" },
      { label: "Legless", desc: "Suborder Serpentes (Snakes).", next: "result_cobra" }
    ]
  },
  q_reptile_legged: {
    question: "Does it have a hard shell on its back?",
    options: [
      { label: "Yes", desc: "Order Testudines (Turtles/Tortoises).", next: "result_turtle" },
      { label: "No", desc: "Orders Squamata & Crocodylia.", next: "q_reptile_lizard_type" }
    ]
  },
  q_reptile_lizard_type: {
    question: "Choose its physical traits:",
    options: [
      { label: "Very Large & Ferocious", desc: "Order Crocodylia (Crocodile).", next: "result_crocodile" },
      { label: "Large & Flicks Tongue", desc: "Varanus (Komodo Dragon).", next: "result_komodo" },
      { label: "Can Change Color", desc: "Chamaeleonidae (Chameleon).", next: "result_chameleon" },
      { label: "Has Spines on Back", desc: "Iguanidae (Iguana).", next: "result_iguana" },
      { label: "Sticks to Walls", desc: "Gekkonidae (Gecko).", next: "result_gecko" }
    ]
  },

  // CLASS AMPHIBIA
  q_amphibi_tail: {
    question: "Does it have a tail as an adult?",
    options: [
      { label: "Tail-less", desc: "Order Anura (Frogs/Toads).", next: "q_amphibi_anura" },
      { label: "Has a Tail", desc: "Order Urodela (Salamanders).", next: "q_amphibi_urodela" }
    ]
  },
  q_amphibi_anura: {
    question: "What is the texture of its skin?",
    options: [
      { label: "Smooth / Slimy", desc: "Family Ranidae (Frog).", next: "result_frog" },
      { label: "Rough / Warty", desc: "Family Bufonidae (Toad).", next: "result_toad" }
    ]
  },
  q_amphibi_urodela: {
    question: "What is its unique feature?",
    options: [
      { label: "External Gills / Pink", desc: "Axolotl.", next: "result_axolotl" },
      { label: "Black with Yellow Spots", desc: "Fire Salamander.", next: "result_salamander" }
    ]
  },

  // CLASS PISCES
  q_fish_bones: {
    question: "What type of skeleton does it have?",
    options: [
      { label: "Cartilaginous", desc: "Chondrichthyes (Sharks/Rays).", next: "result_shark" },
      { label: "Bony Skeleton", desc: "Actinopterygii (Typical Fish).", next: "q_fish_bony" }
    ]
  },
  q_fish_bony: {
    question: "What is its habitat or unique feature?",
    options: [
      { label: "Freshwater", desc: "Rivers/Lakes.", next: "q_fish_freshwater" },
      { label: "Marine / Ornamental", desc: "Ocean/Coral Reefs.", next: "q_fish_marine" }
    ]
  },
  q_fish_freshwater: {
    question: "Does it have barbels (whiskers)?",
    options: [
      { label: "Yes", desc: "Catfish (Clarias).", next: "result_catfish" },
      { label: "No", desc: "Carp (Cyprinus).", next: "result_carp" }
    ]
  },
  q_fish_marine: {
    question: "Choose the most fitting shape:",
    options: [
      { label: "Swims Upright", desc: "Seahorse.", next: "result_seahorse" },
      { label: "Orange & White Stripes", desc: "Clownfish (Nemo).", next: "result_clownfish" },
      { label: "Beautiful Fins / Fighter", desc: "Betta Fish.", next: "result_betta" }
    ]
  },

  // =============================================
  // PLANT BRANCH (PLANTAE)
  // =============================================
  q_plant_seed: {
    question: "Are the seeds enclosed in fruit/true flowers or are they naked?",
    options: [
      { label: "Enclosed Seeds (Angiosperms)", desc: "Has true flowers (Monocots/Dicots).", next: "q_plant_cotyledon" },
      { label: "Naked Seeds (Gymnosperms)", desc: "Seeds not enclosed in fruit (Paddy Oats/Melinjo).", next: "result_melinjo" }
    ]
  },

  // --- ANGIOSPERMS (MONOCOT vs DICOT) ---
  q_plant_cotyledon: {
    question: "Look at the leaves, what is the vein pattern?",
    options: [
      { label: "Parallel / Curved", desc: "Monocot (One seed leaf).", next: "q_monocot_type" },
      { label: "Net-like / Palmate", desc: "Dicot (Two seed leaves).", next: "q_dicot_habit" }
    ]
  },

  // --- MONOCOT PATH ---
  q_monocot_type: {
    question: "What is the growth form of the plant?",
    options: [
      { label: "Palm Tree / Nibung", desc: "Coconut, Oil Palm, Snakefruit.", next: "q_mono_palm" },
      { label: "Grass / Segmented Stem", desc: "Rice, Corn, Sugarcane, Bamboo.", next: "q_mono_grass" },
      { label: "Herb / Rhizome / Ornamental", desc: "Banana, Ginger, Orchid, etc.", next: "q_mono_herb" }
    ]
  },
  q_mono_palm: {
    question: "What are the characteristics of its fruit?",
    options: [
      { label: "Large Fibrous Fruit", desc: "Coconut (Cocos nucifera).", next: "result_coconut" },
      { label: "Red Bunches / Oil Producer", desc: "Oil Palm (Elaeis).", next: "result_oilpalm" },
      { label: "Scaly Fruit Skin", desc: "Snakefruit (Salacca).", next: "result_snakefruit" }
    ]
  },
  q_mono_grass: {
    question: "What is its use or size?",
    options: [
      { label: "Rice Producer", desc: "Rice (Oryza sativa).", next: "result_rice" },
      { label: "Yellow Seed Cobs", desc: "Corn (Zea mays).", next: "result_corn" },
      { label: "Sweet Stems (Sugar)", desc: "Sugarcane (Saccharum).", next: "result_sugarcane" },
      { label: "Giant Hollow Stems", desc: "Bamboo (Bambusa).", next: "result_bamboo" }
    ]
  },
  q_mono_herb: {
    question: "Choose the most fitting trait:",
    options: [
      { label: "Fruiting Bunch (Banana)", desc: "Musa paradisiaca.", next: "result_banana" },
      { label: "Yellow/Spicy Rhizome", desc: "Ginger or Turmeric.", next: "q_mono_rhizome" },
      { label: "Bulb (Onion)", desc: "Shallot/Garlic.", next: "q_mono_onion" },
      { label: "Spiny Leaves / Succulent", desc: "Aloe Vera or Pineapple.", next: "q_mono_spiky" },
      { label: "Beautiful Epiphytic Flower", desc: "Moon Orchid.", next: "result_orchid" }
    ]
  },
  q_mono_rhizome: {
    question: "What is the color of the rhizome?",
    options: [
      { label: "Yellow-Orange", desc: "Turmeric (Curcuma).", next: "result_turmeric" },
      { label: "Pale Yellow / Pungent", desc: "Ginger (Zingiber).", next: "result_ginger" }
    ]
  },
  q_mono_onion: {
    question: "What color is it?",
    options: [
      { label: "Purplish Red", desc: "Shallot.", next: "result_shallot" },
      { label: "White", desc: "Garlic.", next: "result_garlic" }
    ]
  },
  q_mono_spiky: {
    question: "Does it produce spiny fruit?",
    options: [
      { label: "Yes (Pineapple)", desc: "Ananas comosus.", next: "result_pineapple" },
      { label: "No (Aloe Vera)", desc: "Aloe vera.", next: "result_aloe" }
    ]
  },

  // --- DICOT PATH ---
  q_dicot_habit: {
    question: "What are the characteristics of the plant?",
    options: [
      { label: "Unique / Aquatic", desc: "Parasitic, Carnivorous, or Aquatic.", next: "q_dicot_unique" },
      { label: "Climbing / Creeping", desc: "Watermelon, Betel, Pepper.", next: "q_dicot_vine" },
      { label: "Flowers / Ornamental", desc: "Rose, Jasmine, Hibiscus, etc.", next: "q_dicot_flower" },
      { label: "Fruit Trees / Industrial", desc: "Mango, Durian, Rubber, Teak, etc.", next: "q_dicot_tree" },
      { label: "Vegetables / Tubers / Shrubs", desc: "Chili, Tomato, Cassava, etc.", next: "q_dicot_veg" }
    ]
  },

  // 1. Unique Dicots
  q_dicot_unique: {
    question: "What is its uniqueness?",
    options: [
      { label: "Giant Foul-smelling Flower", desc: "Rafflesia.", next: "result_rafflesia" },
      { label: "Trap-like Pitcher Leaves", desc: "Pitcher Plant.", next: "result_pitcher" },
      { label: "Leaves Fold When Touched", desc: "Mimosa (Sensitive plant).", next: "result_mimosa" },
      { label: "Floating on Water", desc: "Lotus.", next: "result_lotus" }
    ]
  },

  // 2. Climbing Dicots
  q_dicot_vine: {
    question: "What does it produce?",
    options: [
      { label: "Large Watery Fruit", desc: "Watermelon.", next: "result_watermelon" },
      { label: "Antiseptic Chewing Leaf", desc: "Betel leaf.", next: "result_betel" },
      { label: "Spicy Beads (Spice)", desc: "Pepper / Peppercorn.", next: "result_pepper" }
    ]
  },

  // 3. Flower Dicots
  q_dicot_flower: {
    question: "Choose its flower traits:",
    options: [
      { label: "Thorny Stem, Fragrant", desc: "Rose.", next: "result_rose" },
      { label: "Small White Fragrant", desc: "Jasmine.", next: "result_jasmine" },
      { label: "Long Protruding Stigma", desc: "Hibiscus.", next: "result_hibiscus" },
      { label: "Colorful Paper-like Bracts", desc: "Bougainvillea.", next: "result_bougainvillea" },
      { label: "Large Yellow, Follows Sun", desc: "Sunflower.", next: "result_sunflower" },
      { label: "Thick Fragrant (Plumeria)", desc: "Frangipani.", next: "result_frangipani" },
      { label: "Flat Cactus Stem", desc: "Prickly Pear Cactus.", next: "result_cactus" }
    ]
  },

  // 4. Dicot Trees (Fruit & Industrial)
  q_dicot_tree: {
    question: "What is the primary output of this tree?",
    options: [
      { label: "Soft/Sweet Flesh Fruit", desc: "Mango, Durian, Papaya, etc.", next: "q_dicot_fruit_soft" },
      { label: "Plantation / Timber", desc: "Rubber, Teak, Coffee, Clove, etc.", next: "q_dicot_plantation" }
    ]
  },
  q_dicot_fruit_soft: {
    question: "Choose its fruit traits:",
    options: [
      { label: "Sharp Spines, Strong Odor", desc: "Durian.", next: "result_durian" },
      { label: "Yellow Flesh, Smooth Skin", desc: "Mango.", next: "result_mango" },
      { label: "Red/Orange Flesh, Hollow", desc: "Papaya.", next: "result_papaya" },
      { label: "Sour/Sweet (Round)", desc: "Lime.", next: "result_lime" },
      { label: "Buttery Flesh (Fats)", desc: "Avocado.", next: "result_avocado" },
      { label: "Star-shaped", desc: "Starfruit.", next: "result_starfruit" }
    ]
  },
  q_dicot_plantation: {
    question: "What is its unique feature?",
    options: [
      { label: "Rubber Latex Producer", desc: "Rubber Tree.", next: "result_rubber" },
      { label: "Hard Wood (Furniture)", desc: "Teak.", next: "result_teak" },
      { label: "Red Cherry Fruit (Drink)", desc: "Coffee.", next: "result_coffee" },
      { label: "Seeds in White Pulp", desc: "Cacao (Chocolate).", next: "result_cacao" },
      { label: "Dried Flower Buds", desc: "Clove.", next: "result_clove" },
      { label: "Aerial Roots (Giant Tree)", desc: "Banyan.", next: "result_banyan" }
    ]
  },

  // 5. Dicot Vegetables/Tubers
  q_dicot_veg: {
    question: "What part is used?",
    options: [
      { label: "Spicy Fruit", desc: "Chili.", next: "result_chili" },
      { label: "Red Watery Fruit", desc: "Tomato.", next: "result_tomato" },
      { label: "Green Leaves", desc: "Spinach, Water Spinach, Tea.", next: "q_dicot_leafy" },
      { label: "Underground Tuber", desc: "Cassava, Potato, Carrot.", next: "q_dicot_tuber" }
    ]
  },
  q_dicot_leafy: {
    question: "Where does it grow or what is it for?",
    options: [
      { label: "Leaf Tips (Drink)", desc: "Tea.", next: "result_tea" },
      { label: "In Water / Marshes", desc: "Water Spinach.", next: "result_water_spinach" },
      { label: "In Soil (Clear Soup)", desc: "Spinach.", next: "result_spinach" }
    ]
  },
  q_dicot_tuber: {
    question: "What is the color or shape of the tuber?",
    options: [
      { label: "Long Orange", desc: "Carrot.", next: "result_carrot" },
      { label: "Round Brown (Starch)", desc: "Potato.", next: "result_potato" },
      { label: "Long White (Hard)", desc: "Cassava.", next: "result_cassava" }
    ]
  },

  // =============================================
  // FINAL RESULTS (MAPPING DATA 1-100)
  // =============================================
  
  // --- ANIMALS (1-50) ---
  result_tiger: { resultId: 1 },
  result_lion: { resultId: 2 },
  result_cat: { resultId: 3 },
  result_dog: { resultId: 4 },
  result_elephant: { resultId: 5 },
  result_orangutan: { resultId: 6 },
  result_human: { resultId: 7 },
  result_cow: { resultId: 8 },
  result_goat: { resultId: 9 },
  result_blue_whale: { resultId: 10 },
  result_dolphin: { resultId: 11 },
  result_horse: { resultId: 12 },
  result_polar_bear: { resultId: 13 },
  result_kangaroo: { resultId: 14 },
  result_bat: { resultId: 15 },
  result_chicken: { resultId: 16 },
  result_eagle: { resultId: 17 },
  result_pigeon: { resultId: 18 },
  result_penguin: { resultId: 19 },
  result_owl: { resultId: 20 },
  result_duck: { resultId: 21 },
  result_ostrich: { resultId: 22 },
  result_cendrawasih: { resultId: 23 },
  result_raven: { resultId: 24 },
  result_swan: { resultId: 25 },
  result_komodo: { resultId: 26 },
  result_crocodile: { resultId: 27 },
  result_cobra: { resultId: 28 },
  result_turtle: { resultId: 29 },
  result_chameleon: { resultId: 30 },
  result_iguana: { resultId: 31 },
  result_gecko: { resultId: 32 },
  result_frog: { resultId: 33 },
  result_toad: { resultId: 34 },
  result_axolotl: { resultId: 35 },
  result_salamander: { resultId: 36 },
  result_carp: { resultId: 37 },
  result_shark: { resultId: 38 },
  result_catfish: { resultId: 39 },
  result_clownfish: { resultId: 40 },
  result_seahorse: { resultId: 41 },
  result_betta: { resultId: 42 },
  result_butterfly: { resultId: 43 },
  result_bee: { resultId: 44 },
  result_mosquito: { resultId: 45 },
  result_ant: { resultId: 46 },
  result_spider: { resultId: 47 },
  result_scorpion: { resultId: 48 },
  result_octopus: { resultId: 49 },
  result_earthworm: { resultId: 50 },

  // --- PLANTS (51-100) ---
  result_rice: { resultId: 51 },
  result_corn: { resultId: 52 },
  result_coconut: { resultId: 53 },
  result_banana: { resultId: 54 },
  result_mango: { resultId: 55 },
  result_durian: { resultId: 56 },
  result_papaya: { resultId: 57 },
  result_rose: { resultId: 58 },
  result_jasmine: { resultId: 59 },
  result_orchid: { resultId: 60 },
  result_cassava: { resultId: 61 },
  result_hibiscus: { resultId: 62 },
  result_mimosa: { resultId: 63 },
  result_bamboo: { resultId: 64 },
  result_chili: { resultId: 65 },
  result_tomato: { resultId: 66 },
  result_lime: { resultId: 67 },
  result_sunflower: { resultId: 68 },
  result_turmeric: { resultId: 69 },
  result_ginger: { resultId: 70 },
  result_aloe: { resultId: 71 },
  result_cactus: { resultId: 72 },
  result_teak: { resultId: 73 },
  result_banyan: { resultId: 74 },
  result_snakefruit: { resultId: 75 },
  result_pineapple: { resultId: 76 },
  result_watermelon: { resultId: 77 },
  result_water_spinach: { resultId: 78 },
  result_spinach: { resultId: 79 },
  result_coffee: { resultId: 80 },
  result_tea: { resultId: 81 },
  result_cacao: { resultId: 82 },
  result_oilpalm: { resultId: 83 },
  result_rubber: { resultId: 84 },
  result_rafflesia: { resultId: 85 },
  result_pitcher: { resultId: 86 },
  result_lotus: { resultId: 87 },
  result_shallot: { resultId: 88 },
  result_garlic: { resultId: 89 },
  result_pepper: { resultId: 90 },
  result_carrot: { resultId: 91 },
  result_potato: { resultId: 92 },
  result_betel: { resultId: 93 },
  result_clove: { resultId: 94 },
  result_sugarcane: { resultId: 95 },
  result_frangipani: { resultId: 96 },
  result_starfruit: { resultId: 97 },
  result_bougainvillea: { resultId: 98 },
  result_avocado: { resultId: 99 },
  result_melinjo: { resultId: 100 },
};