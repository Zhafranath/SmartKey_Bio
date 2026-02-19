// src/data/spesiesLangka.js

export const SPESIES_LANGKA = [
  // =========================
  // 1) SUMATRAN TIGER
  // =========================
  {
    id: "fauna-sumatran-tiger",
    emoji: "🐯",
    name: "Sumatran Tiger",
    localName: "Harimau Sumatra",
    scientificName: "Panthera tigris sumatrae",
    type: "Fauna",
    category: "Mammal",
    iucn: {
      code: "CR",
      label: "Critically Endangered",
      listName: "IUCN Red List",
      icon: "🔴",
      riskLevel: "Extremely High",
    },
    hero: {
      title: "SUMATRAN TIGER",
      statusText: "Critically Endangered",
      tagline: "The last surviving tiger subspecies in Indonesia.",
      summary:
        "The Sumatran tiger is the only remaining tiger subspecies in Indonesia after the extinction of the Javan tiger and Bali tiger in the 20th century.",
      keyFacts: [
        { label: "Estimated Wild Population", value: "~400–600 individuals (latest conservation estimates)" },
        { label: "Distribution", value: "Island of Sumatra only" },
        { label: "Extinction Risk Level", value: "Extremely High" },
      ],
    },
    snapshot: [
      { label: "Category", value: "Mammal" },
      { label: "Scientific Name", value: "Panthera tigris sumatrae" },
      { label: "Habitat", value: "Tropical lowland & montane rainforest" },
      { label: "Geographic Range", value: "Sumatra, Indonesia" },
      { label: "Estimated Population", value: "~400–600" },
      { label: "Ecological Role", value: "Apex predator" },
    ],
    story: {
      title: "The Last Tiger of Indonesia",
      paragraphs: [
        "The Sumatran tiger is the smallest surviving tiger subspecies, adapted to dense tropical forests. Its darker coat and closely spaced stripes provide camouflage in thick vegetation.",
        "Unlike mainland tigers, Sumatran tigers evolved in isolation after rising sea levels separated Sumatra from the Asian mainland thousands of years ago. This makes them genetically distinct and irreplaceable.",
      ],
      didYouKnow: {
        title: "Did You Know?",
        points: [
          "Two Indonesian tiger subspecies — the Bali tiger (Panthera tigris balica) and the Javan tiger (Panthera tigris sondaica) — are already extinct.",
          "The Sumatran tiger is the last remaining tiger lineage in Indonesia.",
        ],
      },
    },
    threats: [
      {
        icon: "🌲",
        title: "Habitat Loss & Deforestation",
        description:
          "Sumatra has experienced one of the highest deforestation rates in the world due to palm oil plantations, logging, mining, and infrastructure expansion. Tiger habitat continues to shrink and fragment.",
      },
      {
        icon: "🐾",
        title: "Poaching & Illegal Wildlife Trade",
        description:
          "Despite legal protection, tigers are still poached for body parts used in illegal wildlife markets.",
      },
      {
        icon: "⚔",
        title: "Human–Tiger Conflict",
        description:
          "As forests shrink, tigers increasingly encounter human settlements, leading to retaliatory killings.",
      },
    ],
    ecologicalRole: {
      title: "Ecological Role",
      intro: "The Sumatran tiger is an apex predator, meaning it sits at the top of the food chain.",
      cascade: {
        steps: [
          "Preys on deer, wild boar, and other medium-to-large mammals",
          "Controls herbivore populations",
          "Prevents overgrazing of vegetation",
          "Maintains forest structure and biodiversity balance",
        ],
        note:
          "This ecological process is known as a trophic cascade effect — where removing a top predator disrupts the entire ecosystem.",
      },
    },
    habitat: {
      title: "Habitat",
      intro: "The Sumatran tiger inhabits:",
      types: ["Lowland tropical rainforest", "Peat swamp forest", "Montane forest", "Dense secondary forest"],
      requirement:
        "It requires large, connected forest landscapes to maintain viable breeding populations.",
      ecosystemType: "Tropical Rainforest Biome",
    },
    extinctionImpact: {
      title: "If the Sumatran Tiger Goes Extinct…",
      points: [
        "Herbivore populations (such as wild boar) would increase uncontrollably",
        "Overgrazing could damage forest regeneration",
        "Loss of top-down ecological regulation",
        "Permanent extinction of Indonesia’s final tiger subspecies",
      ],
      closing:
        "The disappearance of the Sumatran tiger would represent not only a biodiversity loss but also a collapse of ecological balance in Sumatra’s forests.",
    },
    statusScale: {
      title: "Conservation Status Scale",
      text: "Least Concern ─ Vulnerable ─ Endangered ─ 🔴 CRITICAL ─ Extinct",
    },
    card: {
      accent: "emerald",
      coverHint: "Subtle jungle texture + tiger-stripe pattern (UI only).",
    },
  },

  // =========================
  // 2) JAVAN RHINOCEROS
  // =========================
  {
    id: "fauna-javan-rhino",
    emoji: "🦏",
    name: "Javan Rhinoceros",
    localName: "Badak Jawa",
    scientificName: "Rhinoceros sondaicus",
    type: "Fauna",
    category: "Mammal",
    iucn: {
      code: "CR",
      label: "Critically Endangered",
      listName: "IUCN Red List",
      icon: "🔴",
      riskLevel: "Extremely High",
    },
    hero: {
      title: "JAVAN RHINOCEROS",
      statusText: "Critically Endangered",
      tagline: "The rarest large mammal on Earth.",
      summary:
        "The Javan rhinoceros is one of the rarest mammals in the world and survives in only one protected area.",
      keyFacts: [
        { label: "Estimated Wild Population", value: "±76 individuals (2023 monitoring data)" },
        { label: "Distribution", value: "Western tip of Java" },
        { label: "Extinction Risk Level", value: "Extremely High" },
      ],
    },
    snapshot: [
      { label: "Category", value: "Mammal" },
      { label: "Scientific Name", value: "Rhinoceros sondaicus" },
      { label: "Habitat", value: "Lowland tropical rainforest" },
      { label: "Geographic Range", value: "Western Java, Indonesia" },
      { label: "Estimated Population", value: "±76" },
      { label: "Ecological Role", value: "Megaherbivore" },
    ],
    story: {
      title: "The Last Javan Rhino Population",
      paragraphs: [
        "Today, the entire global population lives inside Ujung Kulon National Park (Taman Nasional Ujung Kulon).",
        "Historically, the Javan rhino ranged across Southeast Asia. Intensive hunting during colonial times and habitat destruction eliminated all other populations.",
        "Only males possess a small horn (usually under 25 cm), much smaller than African rhinos.",
      ],
      didYouKnow: {
        title: "Did You Know?",
        points: [
          "This species is highly vulnerable because all individuals live in one single location.",
          "Even a single catastrophic event could threaten the entire global population.",
        ],
      },
    },
    threats: [
      {
        icon: "🌋",
        title: "Single Population Risk",
        description:
          "All individuals exist in one location — a disease outbreak or tsunami could wipe out the species.",
      },
      {
        icon: "🌿",
        title: "Invasive Plant Species",
        description:
          "The palm Arenga obtusifolia dominates parts of the park, reducing the availability of food plants for rhinos.",
      },
      {
        icon: "🧬",
        title: "Low Genetic Diversity",
        description:
          "A small population size increases the risk of inbreeding and reduces long-term resilience.",
      },
    ],
    ecologicalRole: {
      title: "Ecological Role",
      intro: "As a megaherbivore, the Javan rhino helps shape forest structure and plant diversity.",
      cascade: {
        steps: [
          "Consumes shrubs and small trees",
          "Creates forest gaps",
          "Encourages plant regeneration",
          "Maintains forest diversity",
        ],
        note:
          "Large herbivores can act as ecosystem engineers by creating opportunities for diverse plant communities to regenerate.",
      },
    },
    habitat: {
      title: "Habitat",
      intro: "The Javan rhino inhabits:",
      types: ["Lowland rainforest", "Riverine forest", "Coastal forest"],
      requirement: "Requires dense vegetation and access to water for wallowing.",
      ecosystemType: "Tropical Lowland Rainforest (Coastal–Riverine Mosaic)",
    },
    extinctionImpact: {
      title: "If the Javan Rhino Goes Extinct…",
      points: [
        "Loss of Asia’s rarest rhino species",
        "Reduced forest regeneration dynamics",
        "Irreversible genetic loss",
      ],
      closing:
        "Extinction would erase a unique evolutionary lineage and remove an important megaherbivore from Java’s remaining lowland ecosystems.",
    },
    statusScale: {
      title: "Conservation Status Scale",
      text: "Least Concern ─ Vulnerable ─ Endangered ─ 🔴 CRITICAL ─ Extinct",
    },
    card: {
      accent: "emerald",
      coverHint: "Dense lowland forest + subtle mud/wallow texture (UI only).",
    },
  },

  // =========================
  // 3) JAVAN LEOPARD
  // =========================
  {
    id: "fauna-javan-leopard",
    emoji: "🐅",
    name: "Javan Leopard",
    localName: "Macan Tutul Jawa",
    scientificName: "Panthera pardus melas",
    type: "Fauna",
    category: "Mammal",
    iucn: {
      code: "CR",
      label: "Critically Endangered",
      listName: "IUCN Red List",
      icon: "🔴",
      riskLevel: "Extremely High",
    },
    hero: {
      title: "JAVAN LEOPARD",
      statusText: "Critically Endangered",
      tagline: "The last big cat of Java.",
      summary:
        "The Javan leopard is the only surviving large terrestrial carnivore and the last remaining big cat on the island of Java.",
      keyFacts: [
        { label: "Estimated Mature Individuals", value: "±250 (IUCN assessment estimate)" },
        { label: "Distribution", value: "Island of Java only" },
        { label: "Population Trend", value: "Decreasing" },
        { label: "Extinction Risk Level", value: "Extremely High" },
      ],
    },
    snapshot: [
      { label: "Category", value: "Mammal" },
      { label: "Scientific Name", value: "Panthera pardus melas" },
      { label: "Habitat", value: "Tropical forest, montane forest, secondary forest" },
      { label: "Geographic Range", value: "Java, Indonesia" },
      { label: "Estimated Mature Individuals", value: "±250" },
      { label: "Ecological Role", value: "Apex predator" },
    ],
    story: {
      title: "The Last Big Cat of Java",
      paragraphs: [
        "The Javan leopard is a distinct subspecies that evolved in isolation on Java. After the extinction of the Javan tiger in the 1970s–1980s, the Javan leopard became the island’s sole remaining apex predator.",
        "Java is one of the most densely populated islands in the world, and natural forests have been heavily fragmented. Most viable leopard populations persist in protected mountainous regions.",
        "Unlike many mainland leopards, the Javan subspecies often shows darker coat coloration, including melanistic (black panther) individuals.",
      ],
      didYouKnow: {
        title: "Key Strongholds",
        points: [
          "Gunung Gede Pangrango National Park",
          "Ujung Kulon National Park",
          "Meru Betiri National Park",
        ],
      },
    },
    threats: [
      {
        icon: "🌲",
        title: "Habitat Loss & Fragmentation",
        description:
          "Most original lowland forests were converted for agriculture, plantations, and urban development. Remaining forests are isolated, limiting gene flow.",
      },
      {
        icon: "🐐",
        title: "Human–Leopard Conflict",
        description:
          "As natural prey declines, leopards may prey on livestock, leading to retaliatory killings.",
      },
      {
        icon: "🪤",
        title: "Poaching & Illegal Hunting",
        description:
          "Although protected under Indonesian law, leopards may be targeted for skin trade or killed in snares set for other animals.",
      },
      {
        icon: "📉",
        title: "Small Population Size",
        description:
          "With around 250 mature individuals, the subspecies faces genetic bottlenecks and long-term viability challenges.",
      },
    ],
    ecologicalRole: {
      title: "Ecological Role",
      intro: "The Javan leopard is an apex predator at the highest trophic level in Java’s terrestrial ecosystems.",
      cascade: {
        steps: [
          "Preys on deer (e.g., muntjac), wild boar, and small mammals",
          "Regulates herbivore populations",
          "Prevents excessive browsing on young trees",
          "Maintains forest regeneration and biodiversity balance",
        ],
        note:
          "This regulation is part of a trophic cascade: the presence of a top predator stabilizes ecosystem structure and reduces vegetation degradation risks.",
      },
    },
    habitat: {
      title: "Habitat",
      intro: "The Javan leopard inhabits:",
      types: [
        "Lowland tropical rainforest",
        "Montane forest",
        "Secondary forest",
        "Production forest landscapes near protected areas",
      ],
      requirement:
        "Requires connected forest corridors to maintain genetic exchange between subpopulations.",
      ecosystemType: "Tropical Forest Biome (Island Ecosystem)",
    },
    extinctionImpact: {
      title: "If the Javan Leopard Goes Extinct…",
      points: [
        "Java would lose its last native big cat",
        "Herbivore populations could increase uncontrollably",
        "Forest regeneration dynamics would shift",
        "Permanent extinction of a unique island subspecies",
      ],
      closing:
        "Its extinction would represent the loss of the final large terrestrial predator on one of the most ecologically pressured islands in Southeast Asia.",
    },
    statusScale: {
      title: "Conservation Status Scale",
      text: "Least Concern ─ Vulnerable ─ Endangered ─ Critically Endangered ─ Extinct",
    },
    card: {
      accent: "emerald",
      coverHint: "Mountain forest + subtle leopard rosette pattern (UI only).",
    },
  },

  // =========================
  // 4) RED AROWANA
  // =========================
  {
    id: "fauna-red-arowana",
    emoji: "🐟",
    name: "Red Arowana",
    localName: "Ikan Arwana Merah",
    scientificName: "Scleropages formosus",
    type: "Fauna",
    category: "Fish (Actinopterygii)",
    iucn: {
      code: "EN",
      label: "Endangered",
      listName: "IUCN Red List",
      icon: "🔴",
      riskLevel: "High",
    },
    hero: {
      title: "RED AROWANA",
      statusText: "Endangered",
      tagline: "The jewel of Kalimantan’s blackwater rivers.",
      summary:
        "The Red Arowana is a naturally occurring color variety of the Asian Arowana, a prehistoric freshwater fish native to Southeast Asia.",
      keyFacts: [
        { label: "Estimated Mature Individuals", value: "Unknown (population declining)" },
        { label: "Distribution", value: "West Kalimantan (Kapuas River basin), Indonesia" },
        { label: "Population Trend", value: "Decreasing" },
        { label: "Extinction Risk Level", value: "High" },
      ],
    },
    snapshot: [
      { label: "Category", value: "Fish" },
      { label: "Scientific Name", value: "Scleropages formosus" },
      { label: "Common Name", value: "Red Arowana" },
      { label: "Habitat", value: "Blackwater rivers, floodplains, peat swamp forests" },
      { label: "Geographic Range", value: "West Kalimantan (Indonesia); also Malaysia (other color varieties)" },
      { label: "Maximum Length", value: "Up to 90 cm" },
      { label: "Ecological Role", value: "Carnivorous freshwater predator" },
    ],
    story: {
      title: "The Jewel of Kalimantan’s Rivers",
      paragraphs: [
        "The Red Arowana is one of several color varieties of Scleropages formosus, collectively known as the Asian Arowana.",
        "Wild Red Arowana populations are primarily found in the Kapuas River system in West Kalimantan. They inhabit slow-moving blackwater rivers, peat swamps, and seasonally flooded forests.",
        "This species is considered a “living fossil” from an ancient lineage dating back over 100 million years.",
        "Asian Arowanas are paternal mouthbrooders — males incubate eggs and fry in their mouths until the young can survive independently.",
        "High international demand in the ornamental fish trade contributed to major declines before strict protections were enforced.",
      ],
      didYouKnow: {
        title: "Conservation Note",
        points: [
          "This species is often associated with strict trade controls due to historical overexploitation.",
          "Captive-bred trade can be legal under tight regulations in some regions.",
        ],
      },
    },
    threats: [
      {
        icon: "🌲",
        title: "Habitat Loss",
        description:
          "Deforestation, peatland conversion, and mining activities in Kalimantan degrade river systems and breeding habitats.",
      },
      {
        icon: "🎣",
        title: "Historical Overexploitation",
        description:
          "Heavy collection for the aquarium trade reduced wild populations significantly before enforcement of strict regulations.",
      },
      {
        icon: "🔥",
        title: "Peatland Fires",
        description:
          "Fires in peat swamp ecosystems damage spawning areas and reduce water quality.",
      },
      {
        icon: "📉",
        title: "Restricted Natural Distribution",
        description:
          "Wild Red Arowana populations are geographically limited, increasing vulnerability to environmental disturbance.",
      },
    ],
    ecologicalRole: {
      title: "Ecological Role",
      intro: "The Red Arowana is a carnivorous freshwater predator that helps regulate aquatic communities.",
      cascade: {
        steps: [
          "Feeds on small fish, aquatic insects, and crustaceans (occasionally amphibians)",
          "Regulates fish and invertebrate populations",
          "Helps maintain balance in peat swamp and blackwater river ecosystems",
        ],
        note:
          "As a predator, its presence can stabilize prey population dynamics and support ecosystem resilience.",
      },
    },
    habitat: {
      title: "Habitat",
      intro: "The Red Arowana inhabits:",
      types: [
        "Slow-moving blackwater rivers",
        "Flooded forest systems",
        "Peat swamp wetlands",
        "Warm tropical freshwater environments",
      ],
      requirement:
        "Prefers acidic, tannin-rich waters typical of Bornean peat ecosystems.",
      ecosystemType: "Tropical Freshwater & Peat Swamp Ecosystem",
    },
    extinctionImpact: {
      title: "If the Red Arowana Goes Extinct…",
      points: [
        "Loss of a genetically distinct freshwater lineage",
        "Disruption of predator balance in peat swamp ecosystems",
        "Economic loss in regulated ornamental aquaculture sectors",
        "Permanent extinction of one of Southeast Asia’s most iconic freshwater fish",
      ],
      closing:
        "Its extinction would remove a unique evolutionary lineage and reduce biodiversity value of Kalimantan’s blackwater ecosystems.",
    },
    statusScale: {
      title: "Conservation Status Scale",
      text: "Least Concern ─ Vulnerable ─ 🔴 Endangered ─ Critically Endangered ─ Extinct",
    },
    card: {
      accent: "blue",
      coverHint: "Blackwater river gradient + peat swamp silhouettes (UI only).",
    },
  },

  // =========================
  // 5) TAPANULI ORANGUTAN
  // =========================
  {
    id: "fauna-tapanuli-orangutan",
    emoji: "🦧",
    name: "Tapanuli Orangutan",
    localName: "Orangutan Tapanuli",
    scientificName: "Pongo tapanuliensis",
    type: "Fauna",
    category: "Mammal",
    iucn: {
      code: "CR",
      label: "Critically Endangered",
      listName: "IUCN Red List",
      icon: "🔴",
      riskLevel: "Extremely High",
    },
    hero: {
      title: "TAPANULI ORANGUTAN",
      statusText: "Critically Endangered",
      tagline: "The rarest great ape on Earth.",
      summary:
        "The Tapanuli orangutan is the most endangered great ape species in the world, restricted to a single forest ecosystem in North Sumatra, Indonesia.",
      keyFacts: [
        { label: "Estimated Mature Individuals", value: "Likely fewer than 800" },
        { label: "Distribution", value: "Batang Toru region, North Sumatra only" },
        { label: "Population Trend", value: "Decreasing" },
        { label: "Extinction Risk Level", value: "Extremely High" },
      ],
    },
    snapshot: [
      { label: "Category", value: "Mammal" },
      { label: "Scientific Name", value: "Pongo tapanuliensis" },
      { label: "Habitat", value: "Hill forest & submontane tropical rainforest" },
      { label: "Geographic Range", value: "Batang Toru, North Sumatra, Indonesia" },
      { label: "Estimated Mature Individuals", value: "±800" },
      { label: "Ecological Role", value: "Large-bodied arboreal frugivore & seed disperser" },
    ],
    story: {
      title: "The World’s Rarest Great Ape",
      paragraphs: [
        "The Tapanuli orangutan was formally described as a separate species in 2017 after genetic, morphological, and behavioral analyses showed it is distinct from the Sumatran and Bornean orangutans.",
        "It inhabits only the Batang Toru forest ecosystem in North Sumatra. Its entire range covers roughly 1,000 km² and is split into three isolated subpopulations, significantly increasing extinction risk.",
        "Even a loss of 1–2% of the population per year could lead to long-term extinction.",
      ],
      didYouKnow: {
        title: "Why So Vulnerable?",
        points: [
          "Extremely small population size",
          "Severely fragmented habitat",
          "Ongoing population decline",
        ],
      },
    },
    threats: [
      {
        icon: "🌲",
        title: "Habitat Loss & Fragmentation",
        description:
          "Road construction, agriculture, and mining reduce and divide forest habitat, isolating subpopulations.",
      },
      {
        icon: "⚡",
        title: "Infrastructure Overlap",
        description:
          "Large-scale infrastructure development can overlap with key habitat, increasing fragmentation risk.",
      },
      {
        icon: "🧬",
        title: "Small Population Size",
        description:
          "A very small population faces genetic bottlenecks, reduced resilience, and higher vulnerability to disease.",
      },
      {
        icon: "👶",
        title: "Slow Reproduction",
        description:
          "Female orangutans reproduce only once every 7–9 years, among the slowest reproductive rates in mammals.",
      },
    ],
    ecologicalRole: {
      title: "Ecological Role",
      intro: "The Tapanuli orangutan is a major seed disperser — often called a ‘forest gardener’.",
      cascade: {
        steps: [
          "Consumes fruits across the canopy",
          "Disperses large seeds over long distances",
          "Supports forest regeneration",
          "Maintains biodiversity and carbon storage",
        ],
        note:
          "Many tropical tree species depend on large-bodied frugivores to maintain long-distance seed dispersal.",
      },
    },
    habitat: {
      title: "Habitat",
      intro: "The Tapanuli orangutan inhabits:",
      types: [
        "Primary tropical rainforest",
        "Hill forest (300–1,300 m elevation)",
        "Submontane forest",
      ],
      requirement:
        "Unlike many orangutan populations in lowlands, this species primarily occupies higher-elevation forests.",
      ecosystemType: "Tropical Rainforest Biome (Mountain Forest Ecosystem)",
    },
    extinctionImpact: {
      title: "If the Tapanuli Orangutan Goes Extinct…",
      points: [
        "The world loses its rarest great ape species",
        "A unique evolutionary lineage disappears permanently",
        "Seed dispersal patterns in Batang Toru forests decline",
        "Forest structure and biodiversity are affected",
        "Global conservation credibility suffers",
      ],
      closing:
        "Its extinction would mean the disappearance of a species that exists nowhere else on Earth.",
    },
    statusScale: {
      title: "Conservation Status Scale",
      text: "Least Concern ─ Vulnerable ─ Endangered ─ 🔴 Critically Endangered ─ Extinct",
    },
    card: {
      accent: "emerald",
      coverHint: "Mountain rainforest mist + canopy silhouettes (UI only).",
    },
  },
    // =========================
  // 6) BALI MYNA
  // =========================
  {
    id: "fauna-bali-myna",
    emoji: "🐦",
    name: "Bali Myna",
    localName: "Jalak Bali",
    scientificName: "Leucopsar rothschildi",
    type: "Fauna",
    category: "Bird",
    iucn: {
      code: "CR",
      label: "Critically Endangered",
      listName: "IUCN Red List",
      icon: "🔴",
      riskLevel: "Extremely High",
    },
    hero: {
      title: "BALI MYNA",
      statusText: "Critically Endangered",
      tagline: "The white starling of Bali.",
      summary:
        "The Bali myna is one of the rarest birds in the world and is endemic to the island of Bali, Indonesia.",
      keyFacts: [
        { label: "Estimated Mature Individuals", value: "Fewer than 50 mature individuals (IUCN Red List)" },
        { label: "Distribution", value: "Northwestern Bali only" },
        { label: "Population Trend", value: "Increasing (reintroduction), but still highly fragile" },
        { label: "Extinction Risk Level", value: "Extremely High" },
      ],
    },
    snapshot: [
      { label: "Category", value: "Bird" },
      { label: "Scientific Name", value: "Leucopsar rothschildi" },
      { label: "Habitat", value: "Lowland monsoon forest, savanna woodland" },
      { label: "Geographic Range", value: "Bali, Indonesia" },
      { label: "Estimated Mature Individuals", value: "<50 individuals" },
      { label: "Ecological Role", value: "Insectivore & seed disperser" },
    ],
    story: {
      title: "Bali’s Iconic White Bird",
      paragraphs: [
        "The Bali myna is endemic to the island of Bali. It was first described in 1912 and quickly became highly sought after in the international cage-bird trade due to its striking white plumage, blue eye patch, and elegant crest.",
        "Its last natural stronghold is West Bali National Park (Taman Nasional Bali Barat). By the early 2000s, the wild population collapsed to fewer than 10 individuals due to illegal trapping.",
        "Thanks to strict protection, captive breeding, and reintroduction programs, numbers have improved slightly — but the species remains critically endangered.",
      ],
      didYouKnow: {
        title: "Key Stronghold",
        points: ["West Bali National Park (Taman Nasional Bali Barat) is the last natural stronghold of the species."],
      },
    },
    threats: [
      {
        icon: "🪤",
        title: "Illegal Wildlife Trade",
        description:
          "The biggest threat. Bali mynas are highly valuable in the black market bird trade.",
      },
      {
        icon: "🌲",
        title: "Habitat Loss",
        description:
          "Conversion of lowland forest into agriculture and settlement reduces available habitat.",
      },
      {
        icon: "🧬",
        title: "Extremely Small Wild Population",
        description:
          "With fewer than 50 mature individuals, the species faces genetic bottlenecks, higher disease vulnerability, and high extinction probability from catastrophic events.",
      },
      {
        icon: "🔥",
        title: "Nest Predation",
        description:
          "Eggs and chicks are vulnerable to predators, reducing breeding success in the wild.",
      },
    ],
    ecologicalRole: {
      title: "Ecological Role",
      intro:
        "Although small, the Bali myna contributes to ecosystem balance in Bali’s dry forest systems.",
      cascade: {
        steps: [
          "Eats insects",
          "Helps control insect populations",
          "Consumes fruits",
          "Disperses seeds and supports regeneration of dry monsoon forest ecosystems",
        ],
        note:
          "Small insectivorous-frugivorous birds can support ecosystem stability by linking insect control and seed dispersal processes.",
      },
    },
    habitat: {
      title: "Habitat",
      intro: "The Bali myna inhabits:",
      types: ["Dry lowland monsoon forest", "Savanna woodland", "Open forest with scattered trees"],
      requirement:
        "Its natural range is extremely restricted and depends on protected habitat and nest-site availability.",
      ecosystemType: "Tropical Dry Forest & Savanna Ecosystem",
    },
    extinctionImpact: {
      title: "If the Bali Myna Goes Extinct…",
      points: [
        "Bali would lose one of its most iconic endemic birds",
        "Loss of a national conservation symbol",
        "Reduced biodiversity in Bali’s dry forest ecosystem",
        "Permanent extinction of a species found nowhere else on Earth",
      ],
      closing:
        "Its extinction would represent one of Indonesia’s most visible conservation failures, as it is already a flagship species for wildlife protection.",
    },
    statusScale: {
      title: "Conservation Status Scale",
      text: "Least Concern ─ Vulnerable ─ Endangered ─ 🔴 Critically Endangered ─ Extinct",
    },
    card: {
      accent: "amber",
      coverHint: "Warm savanna tones + subtle white-feather pattern (UI only).",
    },
  },

  // =========================
  // 7) HAWKSBILL SEA TURTLE
  // =========================
  {
    id: "fauna-hawksbill-turtle",
    emoji: "🐢",
    name: "Hawksbill Sea Turtle",
    localName: "Penyu Sisik",
    scientificName: "Eretmochelys imbricata",
    type: "Fauna",
    category: "Reptile",
    iucn: {
      code: "CR",
      label: "Critically Endangered",
      listName: "IUCN Red List",
      icon: "🔴",
      riskLevel: "Extremely High",
    },
    hero: {
      title: "HAWKSBILL SEA TURTLE",
      statusText: "Critically Endangered",
      tagline: "The jewel of the coral reefs.",
      summary:
        "The hawksbill turtle is a critically endangered marine turtle found in tropical oceans worldwide, including Indonesia—one of its most important nesting regions.",
      keyFacts: [
        {
          label: "Estimated Mature Individuals",
          value: "~20,000–23,000 nesting females (proxy used by IUCN)",
        },
        { label: "Distribution", value: "Tropical Atlantic, Indian, and Pacific Oceans" },
        { label: "Population Trend", value: "Decreasing (long-term global decline)" },
        { label: "Extinction Risk Level", value: "Extremely High" },
      ],
    },
    snapshot: [
      { label: "Category", value: "Reptile" },
      { label: "Scientific Name", value: "Eretmochelys imbricata" },
      { label: "Habitat", value: "Coral reefs, lagoons, coastal waters" },
      { label: "Geographic Range", value: "Tropical oceans worldwide (including Indonesia)" },
      { label: "Estimated Mature Individuals", value: "~20,000–23,000 nesting females" },
      { label: "Ecological Role", value: "Coral reef specialist & sponge predator" },
    ],
    story: {
      title: "Guardian of Coral Reefs",
      paragraphs: [
        "The hawksbill turtle is widely distributed across tropical oceans, but Indonesia is one of the most significant nesting areas in the Indo-Pacific region.",
        "Important nesting and foraging areas in Indonesia include Raja Ampat, the Derawan Islands, and Kepulauan Seribu.",
        "Unlike other sea turtles, hawksbills specialize in feeding on sponges within coral reefs. Their narrow, pointed beak allows them to extract food from reef crevices.",
        "Globally, the species has declined by more than 80% over the past three generations (roughly 100 years), meeting the IUCN threshold for Critically Endangered.",
      ],
      didYouKnow: {
        title: "Indonesia Matters",
        points: [
          "Indonesia lies within the Coral Triangle—one of the most biodiverse marine regions on Earth.",
        ],
      },
    },
    threats: [
      {
        icon: "🪶",
        title: "Illegal Tortoiseshell Trade",
        description:
          "Hawksbill shells are used to make tortoiseshell products (‘bekko’). Historically, this has been the largest driver of decline.",
      },
      {
        icon: "🥚",
        title: "Egg Harvesting",
        description:
          "Eggs are still illegally collected in some regions, reducing recruitment of hatchlings.",
      },
      {
        icon: "🎣",
        title: "Bycatch in Fisheries",
        description:
          "Accidental capture in gillnets, longlines, and trawl fisheries remains a major threat.",
      },
      {
        icon: "🌊",
        title: "Habitat Degradation",
        description:
          "Coral reef destruction, coastal development, and pollution reduce nesting and feeding habitat.",
      },
      {
        icon: "🌡",
        title: "Climate Change",
        description:
          "Rising sand temperatures affect hatchling sex ratios (temperature-dependent sex determination).",
      },
    ],
    ecologicalRole: {
      title: "Ecological Role",
      intro: "The hawksbill turtle plays a unique role in coral reef ecosystems as a sponge specialist.",
      cascade: {
        steps: [
          "Feeds on sponges",
          "Prevents sponges from overgrowing corals",
          "Allows coral species to compete successfully",
          "Maintains reef biodiversity and structural complexity",
        ],
        note:
          "Without hawksbills, sponge populations could dominate reefs and reduce coral diversity over time.",
      },
    },
    habitat: {
      title: "Habitat",
      intro: "The hawksbill turtle inhabits:",
      types: ["Coral reefs", "Rocky coastal areas", "Lagoon systems", "Tropical beaches (nesting)"],
      requirement:
        "Requires healthy reef systems for foraging and secure beaches for nesting.",
      ecosystemType: "Coral Reef & Tropical Marine Ecosystem",
    },
    extinctionImpact: {
      title: "If the Hawksbill Turtle Goes Extinct…",
      points: [
        "Reef balance would shift and sponge overgrowth could increase",
        "Loss of a key reef-maintaining species",
        "Reduced marine biodiversity and reef resilience",
        "Permanent loss of an ancient marine reptile lineage",
      ],
      closing:
        "Its extinction would significantly impact tropical reef ecosystems globally, especially in regions like the Coral Triangle.",
    },
    statusScale: {
      title: "Conservation Status Scale",
      text: "Least Concern ─ Vulnerable ─ Endangered ─ 🔴 Critically Endangered ─ Extinct",
    },
    card: {
      accent: "blue",
      coverHint: "Coral reef glow + shell pattern (UI only).",
    },
  },

  // =========================
  // 8) LOWLAND ANOA
  // =========================
  {
    id: "fauna-lowland-anoa",
    emoji: "🐃",
    name: "Lowland Anoa",
    localName: "Anoa Daratan Rendah",
    scientificName: "Bubalus depressicornis",
    type: "Fauna",
    category: "Mammal",
    iucn: {
      code: "EN",
      label: "Endangered",
      listName: "IUCN Red List",
      icon: "🔴",
      riskLevel: "High",
    },
    hero: {
      title: "LOWLAND ANOA",
      statusText: "Endangered",
      tagline: "The dwarf buffalo of Sulawesi.",
      summary:
        "The lowland anoa is a small wild buffalo species endemic to Sulawesi, Indonesia—one of the smallest wild cattle species in the world.",
      keyFacts: [
        { label: "Estimated Mature Individuals", value: "2,500–9,999 (IUCN estimate range)" },
        { label: "Distribution", value: "Sulawesi and nearby islands" },
        { label: "Population Trend", value: "Decreasing" },
        { label: "Extinction Risk Level", value: "High" },
      ],
    },
    snapshot: [
      { label: "Category", value: "Mammal" },
      { label: "Scientific Name", value: "Bubalus depressicornis" },
      { label: "Habitat", value: "Lowland tropical forest, swamp forest" },
      { label: "Geographic Range", value: "Sulawesi and nearby islands" },
      { label: "Estimated Mature Individuals", value: "2,500–9,999" },
      { label: "Ecological Role", value: "Large herbivore & seed disperser" },
    ],
    story: {
      title: "The Smallest Wild Buffalo",
      paragraphs: [
        "The lowland anoa is one of two anoa species in Sulawesi; the other is the mountain anoa (Bubalus quarlesi).",
        "Lowland anoa inhabit forested areas at lower elevations, including primary rainforest and swamp forest. Due to Sulawesi’s long geographic isolation, anoa evolved separately from mainland Asian buffalo lineages.",
        "Although still found in several protected areas, populations are fragmented and declining across much of their range.",
      ],
      didYouKnow: {
        title: "Protected Areas",
        points: ["Lore Lindu National Park", "Bogani Nani Wartabone National Park"],
      },
    },
    threats: [
      {
        icon: "🔫",
        title: "Hunting",
        description:
          "Illegal hunting for meat is a primary threat in parts of its range.",
      },
      {
        icon: "🌲",
        title: "Habitat Loss",
        description:
          "Logging, agricultural expansion, and mining reduce and degrade forest habitat.",
      },
      {
        icon: "🛤",
        title: "Fragmentation",
        description:
          "Road construction and land conversion isolate populations and limit gene flow.",
      },
      {
        icon: "🧬",
        title: "Small, Isolated Populations",
        description:
          "Fragmented groups increase vulnerability to genetic decline and local extinction.",
      },
    ],
    ecologicalRole: {
      title: "Ecological Role",
      intro: "As a medium-to-large herbivore, the lowland anoa influences forest structure and regeneration.",
      cascade: {
        steps: [
          "Consumes leaves, fruits, and grasses",
          "Disperses seeds through dung",
          "Maintains plant diversity",
          "Supports ecosystem regeneration and nutrient cycling",
        ],
        note:
          "Large herbivores can connect plant communities through seed dispersal and affect long-term forest composition.",
      },
    },
    habitat: {
      title: "Habitat",
      intro: "The lowland anoa inhabits:",
      types: ["Primary lowland rainforest", "Swamp forest", "Secondary forest"],
      requirement:
        "Requires forest cover and connected habitat to maintain breeding populations and genetic exchange.",
      ecosystemType: "Tropical Rainforest Biome (Wallacea Region)",
    },
    extinctionImpact: {
      title: "If the Lowland Anoa Goes Extinct…",
      points: [
        "Sulawesi would lose a unique endemic large mammal",
        "Forest regeneration patterns could shift",
        "Loss of genetic diversity among Asian wild cattle lineages",
        "Permanent extinction of a species found nowhere else on Earth",
      ],
      closing:
        "Because it is endemic to Sulawesi, global extinction would occur if the species disappears locally.",
    },
    statusScale: {
      title: "Conservation Status Scale",
      text: "Least Concern ─ Vulnerable ─ 🔴 Endangered ─ Critically Endangered ─ Extinct",
    },
    card: {
      accent: "emerald",
      coverHint: "Wallacea rainforest + subtle hoofprint pattern (UI only).",
    },
  },

  // =========================
  // 9) KOMODO DRAGON
  // =========================
  {
    id: "fauna-komodo-dragon",
    emoji: "🦎",
    name: "Komodo Dragon",
    localName: "Komodo",
    scientificName: "Varanus komodoensis",
    type: "Fauna",
    category: "Reptile",
    iucn: {
      code: "EN",
      label: "Endangered",
      listName: "IUCN Red List",
      icon: "🔴",
      riskLevel: "High",
    },
    hero: {
      title: "KOMODO DRAGON",
      statusText: "Endangered",
      tagline: "The world’s largest living lizard.",
      summary:
        "The Komodo dragon is the largest lizard species on Earth and is endemic to a small group of islands in eastern Indonesia.",
      keyFacts: [
        { label: "Estimated Mature Individuals", value: "±1,383 (IUCN Red List estimate)" },
        { label: "Distribution", value: "Limited to five main islands in eastern Indonesia" },
        { label: "Population Trend", value: "Stable overall (declining in some subpopulations)" },
        { label: "Extinction Risk Level", value: "High" },
      ],
    },
    snapshot: [
      { label: "Category", value: "Reptile" },
      { label: "Scientific Name", value: "Varanus komodoensis" },
      { label: "Habitat", value: "Savanna, tropical dry forest, monsoon forest" },
      { label: "Geographic Range", value: "Lesser Sunda Islands, Indonesia" },
      { label: "Estimated Mature Individuals", value: "±1,383" },
      { label: "Ecological Role", value: "Apex predator" },
    ],
    story: {
      title: "The Ancient Island Predator",
      paragraphs: [
        "The Komodo dragon occurs naturally only on Komodo, Rinca, Flores, Gili Motang, and Nusa Kode. Most of the population is protected within Komodo National Park.",
        "Komodo dragons can reach about 3 meters and weigh over 70 kg. They are ambush predators feeding on deer, wild boar, and carrion; their saliva contains toxic proteins (venom) that help subdue prey.",
        "Due to restricted range and vulnerability to climate change, the species was uplisted to Endangered in 2021.",
      ],
      didYouKnow: {
        title: "Endemic Range",
        points: ["Komodo", "Rinca", "Flores", "Gili Motang", "Nusa Kode"],
      },
    },
    threats: [
      {
        icon: "🌊",
        title: "Climate Change & Sea-Level Rise",
        description:
          "Low-lying island habitats are vulnerable to rising seas and changing temperature patterns.",
      },
      {
        icon: "🌲",
        title: "Habitat Degradation",
        description:
          "Human development and land-use change—especially on Flores—can reduce suitable habitat.",
      },
      {
        icon: "🦌",
        title: "Decline of Prey Species",
        description:
          "Reduced deer populations can lower food availability for Komodo dragons.",
      },
      {
        icon: "🔥",
        title: "Natural Disasters",
        description:
          "Small island populations are vulnerable to fires and extreme weather events.",
      },
    ],
    ecologicalRole: {
      title: "Ecological Role",
      intro: "The Komodo dragon is an apex predator that helps stabilize island ecosystems.",
      cascade: {
        steps: [
          "Preys on deer, wild boar, and other vertebrates",
          "Regulates herbivore populations",
          "Prevents overgrazing",
          "Maintains savanna and dry forest ecosystem balance",
        ],
        note:
          "Top predators can reduce ecosystem instability by limiting herbivore pressure and supporting vegetation recovery.",
      },
    },
    habitat: {
      title: "Habitat",
      intro: "Komodo dragons inhabit:",
      types: ["Tropical dry forest", "Savanna grassland", "Coastal areas"],
      requirement:
        "Requires warm, dry climates and reliable prey availability across connected habitat patches.",
      ecosystemType: "Tropical Dry Forest & Savanna (Island Ecosystem – Wallacea Region)",
    },
    extinctionImpact: {
      title: "If the Komodo Dragon Goes Extinct…",
      points: [
        "Loss of the world’s largest living lizard",
        "Collapse of the top predator role in these island ecosystems",
        "Herbivore populations may increase uncontrollably",
        "Loss of one of Indonesia’s most iconic endemic species",
      ],
      closing:
        "Because it exists nowhere else on Earth, extinction would mean a total global loss.",
    },
    statusScale: {
      title: "Conservation Status Scale",
      text: "Least Concern ─ Vulnerable ─ 🔴 Endangered ─ Critically Endangered ─ Extinct",
    },
    card: {
      accent: "amber",
      coverHint: "Savanna heat haze + subtle scale texture (UI only).",
    },
  },

  // =========================
  // 10) MAHAKAM IRRAWADDY DOLPHIN (subpopulation)
  // =========================
  {
    id: "fauna-mahakam-dolphin",
    emoji: "🐬",
    name: "Mahakam Irrawaddy Dolphin",
    localName: "Pesut Mahakam",
    scientificName: "Orcaella brevirostris (Mahakam subpopulation)",
    type: "Fauna",
    category: "Mammal",
    iucn: {
      code: "CR",
      label: "Critically Endangered",
      listName: "IUCN Red List",
      icon: "🔴",
      riskLevel: "Extremely High",
    },
    hero: {
      title: "MAHAKAM DOLPHIN",
      statusText: "Critically Endangered",
      tagline: "The last river dolphin of Indonesia.",
      summary:
        "The Mahakam Irrawaddy dolphin is a freshwater subpopulation of the Irrawaddy dolphin found only in the Mahakam River system of East Kalimantan.",
      keyFacts: [
        { label: "Estimated Mature Individuals", value: "±60–70 individuals (recent survey estimates)" },
        { label: "Distribution", value: "Mahakam River, East Kalimantan" },
        { label: "Population Trend", value: "Declining" },
        { label: "Extinction Risk Level", value: "Extremely High" },
      ],
    },
    snapshot: [
      { label: "Category", value: "Mammal" },
      { label: "Scientific Name", value: "Orcaella brevirostris" },
      { label: "Habitat", value: "Freshwater river system & floodplain lakes" },
      { label: "Geographic Range", value: "Mahakam River system" },
      { label: "Estimated Mature Individuals", value: "±60–70 individuals" },
      { label: "Ecological Role", value: "Top aquatic predator & bioindicator" },
    ],
    story: {
      title: "Indonesia’s Last River Dolphin",
      paragraphs: [
        "The Pesut Mahakam is part of the Irrawaddy dolphin species, but unlike most populations that inhabit coastal waters, this subpopulation lives entirely in freshwater within the Mahakam River system.",
        "It is Indonesia’s only remaining river dolphin population. Because it is extremely small and geographically isolated, even the loss of a few individuals per year can strongly affect long-term survival.",
      ],
      didYouKnow: {
        title: "Why It Matters",
        points: [
          "River dolphins are considered bioindicators—when they decline, it often reflects worsening river ecosystem health.",
        ],
      },
    },
    threats: [
      {
        icon: "🎣",
        title: "Bycatch in Fishing Nets",
        description:
          "The leading cause of death. Dolphins become entangled in gillnets.",
      },
      {
        icon: "🚤",
        title: "Boat Traffic",
        description:
          "Collisions and underwater noise disturb and injure dolphins, disrupting feeding and movement.",
      },
      {
        icon: "🌊",
        title: "Habitat Degradation",
        description:
          "Pollution, sedimentation, and river modification reduce habitat quality and prey availability.",
      },
      {
        icon: "🧬",
        title: "Extremely Small Population",
        description:
          "With fewer than 70 individuals, the population faces genetic bottlenecks, low reproductive resilience, and high extinction probability from random events.",
      },
    ],
    ecologicalRole: {
      title: "Ecological Role",
      intro: "The Pesut Mahakam functions as a top predator in the river ecosystem and signals ecosystem condition.",
      cascade: {
        steps: [
          "Feeds on fish and crustaceans",
          "Regulates fish populations",
          "Maintains balance in aquatic food webs",
          "Indicates river ecosystem health as a bioindicator",
        ],
        note:
          "Protecting top aquatic predators often requires improving water quality and reducing harmful fishing practices—benefiting the whole river system.",
      },
    },
    habitat: {
      title: "Habitat",
      intro: "The Pesut Mahakam inhabits:",
      types: ["Large freshwater rivers", "Floodplain lakes (locally called ‘danau’)", "Slow-moving river sections"],
      requirement:
        "Its distribution is limited to roughly 180 km of the Mahakam River system, making it highly vulnerable to disturbance.",
      ecosystemType: "Tropical Freshwater River Ecosystem",
    },
    extinctionImpact: {
      title: "If the Mahakam Dolphin Goes Extinct…",
      points: [
        "Indonesia would lose its last river dolphin",
        "Loss of a flagship freshwater conservation species",
        "Reduced ecological balance in the Mahakam River",
        "Permanent disappearance of a unique freshwater subpopulation",
      ],
      closing:
        "Its extinction would mark the loss of one of Southeast Asia’s most threatened freshwater mammals.",
    },
    statusScale: {
      title: "Conservation Status Scale",
      text: "Least Concern ─ Vulnerable ─ Endangered ─ 🔴 Critically Endangered ─ Extinct",
    },
    card: {
      accent: "blue",
      coverHint: "River current texture + soft freshwater mist (UI only).",
    },
  },
  {
  id: "rafflesia-arnoldii",
  emoji: "🌺",
  name: "Rafflesia arnoldii",
  localName: "Bunga Rafflesia Arnoldii",
  scientificName: "Rafflesia arnoldii",
  type: "Flora",
  category: "Flowering Plant",
  iucn: {
    code: "EN",
    label: "Endangered",
    icon: "🔴",
    riskLevel: "High",
  },
  hero: {
    title: "BUNGA RAFFLESIA ARNOLDII",
    statusText: "Endangered",
    tagline: "The largest flower in the world.",
    summary:
      "Rafflesia arnoldii produces the largest individual flower on Earth and is one of Indonesia’s most iconic plant species.",
    keyFacts: [
      { label: "Estimated Mature Individuals", value: "Unknown (fragmented)" },
      { label: "Distribution", value: "Sumatra, Indonesia" },
      { label: "Population Trend", value: "Decreasing" },
    ],
  },
  snapshot: [
    { label: "Category", value: "Plant" },
    { label: "Common Name", value: "Corpse Flower / Padma Raksasa" },
    { label: "Habitat", value: "Tropical Rainforest" },
    { label: "Flower Diameter", value: "Up to 1 meter" },
    { label: "Ecological Role", value: "Parasitic flowering plant" },
  ],
  story: {
    title: "The Giant of the Rainforest",
    paragraphs: [
      "Rafflesia arnoldii produces the largest single flower in the world, reaching up to 1 meter in diameter.",
      "It is a holoparasitic plant that has no leaves, stems, or roots and lives entirely inside its host vine (Tetrastigma).",
      "The flower emits a strong odor similar to rotting flesh to attract carrion flies for pollination.",
    ],
  },
  threats: [
    { icon: "🌲", title: "Deforestation", description: "Lowland rainforests converted for agriculture and plantations." },
    { icon: "🚶", title: "Habitat Disturbance", description: "Tourism and trampling damage host vines." },
    { icon: "🔥", title: "Forest Fires", description: "Peatland and forest fires destroy habitat." },
  ],
  ecologicalRole: {
    title: "Ecological Role",
    intro: "Despite being parasitic, Rafflesia contributes to rainforest biodiversity.",
  },
  habitat: {
    title: "Habitat",
    intro: "Lowland tropical rainforest in Sumatra.",
    ecosystemType: "Tropical Rainforest Biome",
  },
  extinctionImpact: {
    title: "If Rafflesia Goes Extinct…",
    points: [
      "Loss of the world’s largest flower",
      "Loss of unique parasitic lineage",
      "Reduced rainforest biodiversity",
    ],
  },
  statusScale: {
    text: "Least Concern ─ Vulnerable ─ 🔴 Endangered ─ Critically Endangered ─ Extinct",
  },
},
{
  id: "amorphophallus-titanum",
  emoji: "🌸",
  name: "Amorphophallus titanum",
  localName: "Bunga Bangkai",
  scientificName: "Amorphophallus titanum",
  type: "Flora",
  category: "Flowering Plant",
  iucn: {
    code: "EN",
    label: "Endangered",
    icon: "🔴",
    riskLevel: "High",
  },
  hero: {
    title: "BUNGA BANGKAI",
    statusText: "Endangered",
    tagline: "The titan of the rainforest.",
    summary:
      "Amorphophallus titanum produces one of the largest inflorescences in the world.",
    keyFacts: [
      { label: "Estimated Mature Individuals", value: "<1,000 (estimated)" },
      { label: "Distribution", value: "Endemic to Sumatra" },
      { label: "Population Trend", value: "Decreasing" },
    ],
  },
  snapshot: [
    { label: "Category", value: "Plant" },
    { label: "Height", value: "Up to 3 meters" },
    { label: "Habitat", value: "Lowland Rainforest" },
    { label: "Ecological Role", value: "Pollinator-attracting plant" },
  ],
  threats: [
    { icon: "🌲", title: "Deforestation", description: "Habitat conversion in Sumatra." },
    { icon: "🔥", title: "Forest Fires", description: "Peatland fires destroy habitat." },
  ],
  habitat: {
    title: "Habitat",
    ecosystemType: "Tropical Rainforest Biome",
  },
},
{
  id: "aquilaria-malaccensis",
  emoji: "🌳",
  name: "Aquilaria malaccensis",
  localName: "Gaharu",
  scientificName: "Aquilaria malaccensis",
  type: "Flora",
  category: "Tree",
  iucn: {
    code: "CR",
    label: "Critically Endangered",
    icon: "🔴",
    riskLevel: "Extremely High",
  },
  hero: {
    title: "GAHARU",
    statusText: "Critically Endangered",
    tagline: "The tree that produces liquid gold.",
    summary:
      "Aquilaria malaccensis produces agarwood, one of the most valuable fragrant resins.",
    keyFacts: [
      { label: "Distribution", value: "Sumatra & Kalimantan" },
      { label: "Population Trend", value: "Decreasing" },
    ],
  },
  snapshot: [
    { label: "Category", value: "Tree" },
    { label: "Habitat", value: "Lowland rainforest" },
    { label: "Ecological Role", value: "Canopy tree species" },
  ],
  threats: [
    { icon: "🪓", title: "Overharvesting", description: "Trees felled to check resin." },
    { icon: "📦", title: "Illegal Trade", description: "High international demand." },
  ],
  habitat: {
    title: "Habitat",
    ecosystemType: "Tropical Lowland Rainforest",
  },
},
{
  id: "shorea-johorensis",
  emoji: "🌳",
  name: "Shorea johorensis",
  localName: "Meranti",
  scientificName: "Shorea johorensis",
  type: "Flora",
  category: "Tree",
  iucn: {
    code: "EN",
    label: "Endangered",
    icon: "🔴",
    riskLevel: "High",
  },
  hero: {
    title: "MERANTI",
    statusText: "Endangered",
    tagline: "A giant of the dipterocarp rainforest.",
    summary:
      "Shorea johorensis is a large emergent hardwood tree of Southeast Asian rainforests.",
    keyFacts: [
      { label: "Distribution", value: "Sumatra & Kalimantan" },
      { label: "Population Trend", value: "Decreasing" },
    ],
  },
  snapshot: [
    { label: "Category", value: "Tree" },
    { label: "Height", value: "Up to 60 meters" },
    { label: "Habitat", value: "Dipterocarp rainforest" },
    { label: "Ecological Role", value: "Emergent canopy tree" },
  ],
  threats: [
    { icon: "🪓", title: "Logging", description: "High timber demand." },
    { icon: "🌲", title: "Deforestation", description: "Forest conversion to plantations." },
  ],
  habitat: {
    title: "Habitat",
    ecosystemType: "Tropical Lowland Rainforest",
  },
},
{
  id: "santalum-album",
  emoji: "🌳",
  name: "Santalum album",
  localName: "Cendana",
  scientificName: "Santalum album",
  type: "Flora",
  category: "Tree",
  iucn: {
    code: "VU",
    label: "Vulnerable",
    icon: "🔴",
    riskLevel: "Moderate to High",
  },
  hero: {
    title: "CENDANA",
    statusText: "Vulnerable",
    tagline: "The fragrant treasure of the tropics.",
    summary:
      "Sandalwood is a highly valued aromatic tree native to eastern Indonesia.",
    keyFacts: [
      { label: "Distribution", value: "East Nusa Tenggara" },
      { label: "Population Trend", value: "Decreasing" },
    ],
  },
  snapshot: [
    { label: "Category", value: "Tree" },
    { label: "Height", value: "10–15 meters" },
    { label: "Habitat", value: "Dry tropical forest" },
    { label: "Ecological Role", value: "Hemiparasitic tree species" },
  ],
  threats: [
    { icon: "🪓", title: "Overharvesting", description: "Extensive logging for valuable heartwood." },
    { icon: "🌾", title: "Land Conversion", description: "Dry forest conversion." },
  ],
  habitat: {
    title: "Habitat",
    ecosystemType: "Tropical Dry Forest & Savanna",
  },
},
{
  id: "paphiopedilum-rothschildianum",
  emoji: "🌳",
  name: "Paphiopedilum rothschildianum",
  localName: "Anggrek Hitam",
  scientificName: "Paphiopedilum rothschildianum",
  type: "Flora",
  category: "Orchid",
  iucn: {
    code: "CR",
    label: "Critically Endangered",
    icon: "🔴",
    riskLevel: "Extremely High",
  },
  hero: {
    title: "ANGGREK HITAM",
    statusText: "Critically Endangered",
    tagline: "The king of orchids in Borneo’s rainforests.",
    summary:
      "A rare and highly prized slipper orchid with striking long-spurred flowers, endemic to Borneo’s montane forests.",
    keyFacts: [
      { label: "Estimated Mature Individuals", value: "Fewer than 500 in the wild" },
      { label: "Distribution", value: "Mount Kinabalu (Sabah, Malaysia)" },
      { label: "Population Trend", value: "Decreasing" },
      { label: "Extinction Risk Level", value: "Extremely High" },
    ],
  },
  snapshot: [
    { label: "Category", value: "Plant (Orchid)" },
    { label: "Scientific Name", value: "Paphiopedilum rothschildianum" },
    { label: "Common Name", value: "Anggrek Hitam / Rothschild’s Slipper Orchid" },
    { label: "Habitat", value: "Montane tropical rainforest" },
    { label: "Geographic Range", value: "Borneo (Sabah, Malaysia)" },
    { label: "Height", value: "Flower spike up to 40 cm" },
    { label: "Ecological Role", value: "Pollinator-attracting orchid; montane plant community" },
  ],
  story: {
    title: "The Jewel of Borneo’s Mountains",
    paragraphs: [
      "Considered one of the rarest orchids in the world, it grows on steep limestone slopes in shaded, humid montane forests.",
      "Its spectacular long horizontal sepals made it highly sought after by collectors worldwide.",
      "Its rarity and beauty symbolize Borneo’s unique biodiversity—while also making it a target for illegal collection.",
    ],
  },
  threats: [
    { icon: "🪓", title: "Illegal Collection", description: "High demand from collectors drives poaching from the wild." },
    { icon: "🌲", title: "Habitat Loss", description: "Logging and land conversion threaten montane rainforest zones." },
    { icon: "🔥", title: "Climate Change", description: "Temperature shifts disrupt delicate montane microhabitats." },
    { icon: "🌱", title: "Small Population Size", description: "Very limited individuals increase extinction vulnerability." },
  ],
  ecologicalRole: {
    title: "Ecological Role",
    intro:
      "This orchid supports montane biodiversity by sustaining pollinator interactions and contributing to the forest understory plant community.",
    cascade: {
      steps: [
        "Attracts specific pollinators (flies/insects)",
        "Supports pollination networks in montane understory",
        "Maintains genetic diversity among orchid communities",
        "Signals the health of humid montane microhabitats",
      ],
      note:
        "Orchids often depend on highly specific ecological relationships; disrupting habitat can collapse reproduction success.",
    },
  },
  habitat: {
    title: "Habitat",
    intro: "Shaded limestone slopes in humid montane forests.",
    types: [
      "Limestone slopes in montane forest",
      "Humid shaded understory",
      "Elevations ~800–1,200 m",
      "Well-drained soils with stable humidity",
    ],
    requirement: "Stable montane humidity, intact forest cover, and protection from collection.",
    ecosystemType: "Montane Tropical Rainforest",
  },
  extinctionImpact: {
    title: "If Anggrek Hitam Declines Further…",
    points: [
      "Loss of one of the world’s rarest orchids",
      "Decline in montane pollinator interactions",
      "Loss of genetic diversity among Paphiopedilum species",
      "Indicator of ecosystem health deterioration",
    ],
  },
  statusScale: {
    text: "Least Concern ─ Vulnerable ─ Endangered ─ 🔴 Critically Endangered ─ Extinct",
  },
},
{
  id: "castanopsis-argentea",
  emoji: "🌳",
  name: "Castanopsis argentea",
  localName: "Saninten",
  scientificName: "Castanopsis argentea",
  type: "Flora",
  category: "Tree",
  iucn: {
    code: "VU",
    label: "Vulnerable",
    icon: "🟠",
    riskLevel: "Moderate to High",
  },
  hero: {
    title: "SANINTEN",
    statusText: "Vulnerable",
    tagline: "A resilient chestnut tree of Indonesian forests.",
    summary:
      "A tropical hardwood tree producing edible nuts, supporting forest wildlife and canopy structure across Indonesian lowland and montane forests.",
    keyFacts: [
      { label: "Estimated Mature Individuals", value: "Decreasing (exact number unknown)" },
      { label: "Distribution", value: "Sumatra, Java, and Borneo (Indonesia)" },
      { label: "Population Trend", value: "Decreasing" },
      { label: "Extinction Risk Level", value: "Moderate to High" },
    ],
  },
  snapshot: [
    { label: "Category", value: "Plant (Tree)" },
    { label: "Scientific Name", value: "Castanopsis argentea" },
    { label: "Common Name", value: "Saninten" },
    { label: "Habitat", value: "Lowland & montane tropical rainforest" },
    { label: "Geographic Range", value: "Sumatra, Java, Borneo" },
    { label: "Height", value: "Up to 35 meters" },
    { label: "Ecological Role", value: "Canopy/sub-canopy tree; food source for wildlife" },
  ],
  story: {
    title: "Chestnut of the Tropics",
    paragraphs: [
      "Saninten forms part of the tropical forest canopy and produces chestnut-like nuts eaten by birds, mammals, and humans.",
      "It supports biodiversity by providing habitat and food while contributing to forest structure and nutrient cycling.",
      "Although not as heavily exploited as major timber species, habitat conversion and logging still reduce populations.",
    ],
  },
  threats: [
    { icon: "🪓", title: "Logging", description: "Selective logging reduces population density over time." },
    { icon: "🌲", title: "Deforestation", description: "Agriculture, plantations, and settlement expansion fragment habitat." },
    { icon: "🔥", title: "Habitat Degradation", description: "Soil erosion and human disturbance affect regeneration." },
    { icon: "🌱", title: "Low Reproduction Rate", description: "Limited dispersal and seedling survival slow recovery." },
  ],
  ecologicalRole: {
    title: "Ecological Role",
    intro:
      "Saninten supports forest resilience by stabilizing canopy structure and feeding wildlife through nutrient-rich nuts.",
    cascade: {
      steps: [
        "Produces nuts consumed by birds and mammals",
        "Supports wildlife populations and seed dispersers",
        "Contributes to canopy structure and stratification",
        "Helps maintain soil stability and nutrient cycling",
      ],
      note:
        "Declining canopy trees can reduce food availability and weaken forest regeneration over time.",
    },
  },
  habitat: {
    title: "Habitat",
    intro: "Occurs in both lowland and montane tropical forests.",
    types: [
      "Lowland tropical rainforest",
      "Montane rainforest",
      "Well-drained fertile soils",
      "Elevations ~300–1,200 m",
    ],
    requirement: "Connected forest cover and protected regeneration zones.",
    ecosystemType: "Tropical Lowland & Montane Rainforest",
  },
  extinctionImpact: {
    title: "If Saninten Declines Further…",
    points: [
      "Reduced food resources for wildlife",
      "Loss of canopy and forest structure",
      "Decreased forest resilience to environmental change",
      "Indicator of declining forest health",
    ],
  },
  statusScale: {
    text: "Least Concern ─ 🟡 Vulnerable ─ Endangered ─ Critically Endangered ─ Extinct",
  },
},
{
  id: "phalaenopsis-amabilis",
  emoji: "🌳",
  name: "Phalaenopsis amabilis",
  localName: "Anggrek Bulan",
  scientificName: "Phalaenopsis amabilis",
  type: "Flora",
  category: "Orchid",
  iucn: {
    code: "VU",
    label: "Vulnerable",
    icon: "🟠",
    riskLevel: "Moderate to High",
  },
  hero: {
    title: "ANGGREK BULAN",
    statusText: "Vulnerable",
    tagline: "The moon orchid that lights up Southeast Asian forests.",
    summary:
      "An epiphytic orchid famous for elegant white flowers; native across Southeast Asia and culturally significant in Indonesia.",
    keyFacts: [
      { label: "Estimated Mature Individuals", value: "Decreasing (exact number unknown)" },
      { label: "Distribution", value: "Indonesia + SE Asia (Philippines, Malaysia, PNG)" },
      { label: "Population Trend", value: "Decreasing" },
      { label: "Extinction Risk Level", value: "Moderate to High" },
    ],
  },
  snapshot: [
    { label: "Category", value: "Plant (Orchid)" },
    { label: "Scientific Name", value: "Phalaenopsis amabilis" },
    { label: "Common Name", value: "Anggrek Bulan / Moon Orchid" },
    { label: "Habitat", value: "Lowland rainforest; epiphytic on trees" },
    { label: "Geographic Range", value: "Indonesia, Malaysia, Philippines, PNG" },
    { label: "Height", value: "Flower spike up to 60 cm" },
    { label: "Ecological Role", value: "Nectar source for pollinators; forest biodiversity" },
  ],
  story: {
    title: "Southeast Asia’s White Beauty",
    paragraphs: [
      "Anggrek Bulan grows on tree trunks in humid, shaded forests and blooms multiple times per year.",
      "It attracts pollinators such as moths and bees and is widely cultivated as an ornamental plant.",
      "Over-collection from the wild and forest loss have put natural populations under pressure.",
    ],
  },
  threats: [
    { icon: "🪓", title: "Overcollection", description: "Collectors remove mature flowering plants from the wild." },
    { icon: "🌲", title: "Habitat Loss", description: "Deforestation reduces available host trees." },
    { icon: "🌍", title: "Environmental Degradation", description: "Fragmentation alters humidity/light needed for growth." },
    { icon: "🌱", title: "Low Population Density", description: "Scattered individuals reduce pollination success." },
  ],
  ecologicalRole: {
    title: "Ecological Role",
    intro:
      "As an epiphyte, it enriches forest biodiversity and supports pollinator food webs in lowland ecosystems.",
    cascade: {
      steps: [
        "Provides nectar for moths and bees",
        "Supports pollinator populations",
        "Maintains epiphytic plant diversity",
        "Signals intact humid forest microclimates",
      ],
      note:
        "Epiphytes are sensitive to canopy loss; once forests fragment, humidity shifts can collapse their niches.",
    },
  },
  habitat: {
    title: "Habitat",
    intro: "Humid lowland forests, growing on tree trunks as an epiphyte.",
    types: [
      "Lowland tropical rainforest",
      "Shaded humid canopy/understory edges",
      "Epiphytic niche on large trees",
      "Elevations sea level to ~700 m",
    ],
    requirement: "Healthy host trees and stable humidity within intact forest structure.",
    ecosystemType: "Lowland Tropical Rainforest (Epiphytic niche)",
  },
  extinctionImpact: {
    title: "If Anggrek Bulan Declines Further…",
    points: [
      "Loss of an iconic culturally significant orchid",
      "Decline in epiphytic biodiversity",
      "Reduced food sources for specialized pollinators",
      "Indicator of ongoing lowland forest stress",
    ],
  },
  statusScale: {
    text: "Least Concern ─ 🟡 Vulnerable ─ Endangered ─ Critically Endangered ─ Extinct",
  },
},
{
  id: "nepenthes-clipeata",
  emoji: "🌳",
  name: "Nepenthes clipeata",
  localName: "Kantong Semar",
  scientificName: "Nepenthes clipeata",
  type: "Flora",
  category: "Carnivorous Plant",
  iucn: {
    code: "CR",
    label: "Critically Endangered",
    icon: "🔴",
    riskLevel: "Extremely High",
  },
  hero: {
    title: "KANTONG SEMAR — Nepenthes clipeata",
    statusText: "Critically Endangered",
    tagline: "One of the rarest pitcher plants on Earth.",
    summary:
      "A spectacular carnivorous pitcher plant with an extremely tiny range, endemic to Mount Kelam in West Kalimantan.",
    keyFacts: [
      { label: "Estimated Mature Individuals", value: "Very low (likely only a few dozen)" },
      { label: "Distribution", value: "Mount Kelam, West Kalimantan (Indonesia)" },
      { label: "Population Trend", value: "Decreasing" },
      { label: "Extinction Risk Level", value: "Extremely High" },
    ],
  },
  snapshot: [
    { label: "Category", value: "Plant (Carnivorous)" },
    { label: "Scientific Name", value: "Nepenthes clipeata" },
    { label: "Common Name", value: "Kantong Semar Endemik Borneo" },
    { label: "Habitat", value: "Montane forest on granite slopes" },
    { label: "Geographic Range", value: "West Kalimantan (single mountain)" },
    { label: "Height", value: "Vine several meters; pitchers ~20–25 cm" },
    { label: "Ecological Role", value: "Insect predator & nutrient recycler" },
  ],
  story: {
    title: "A Rare Jewel of Borneo’s Rainforest",
    paragraphs: [
      "Known from a single mountain, this species survives in a highly restricted habitat on Mount Kelam.",
      "Its pitchers capture and digest insects, helping it survive nutrient-poor mountain soils.",
      "Its rarity makes it extremely desirable for collectors—further increasing extinction risk.",
    ],
  },
  threats: [
    { icon: "🪓", title: "Illegal Collection", description: "Collectors target it for rarity, reducing wild numbers." },
    { icon: "🌲", title: "Habitat Loss", description: "Deforestation, fires, and disturbance degrade its tiny habitat." },
    { icon: "🔥", title: "Environmental Change", description: "Climate shifts/drought can alter fragile montane conditions." },
    { icon: "🌱", title: "Tiny Population", description: "Any event (fire/disease/poaching) can push it to extinction." },
  ],
  ecologicalRole: {
    title: "Ecological Role",
    intro:
      "Pitcher plants help regulate insect populations and recycle nutrients in nutrient-poor soils.",
    cascade: {
      steps: [
        "Captures insects in pitchers",
        "Recycles nutrients (nitrogen/phosphorus) into plant growth",
        "Influences local insect dynamics",
        "Provides microhabitats for small invertebrates inside pitchers",
      ],
      note:
        "In nutrient-poor environments, carnivorous plants can be important nutrient recyclers and niche providers.",
    },
  },
  habitat: {
    title: "Habitat",
    intro: "Montane granite slopes and ridges with humid conditions.",
    types: [
      "Montane granite slopes",
      "Humid shaded ridges",
      "Very restricted high-elevation microhabitat",
    ],
    requirement: "Strict habitat protection and prevention of wild collection.",
    ecosystemType: "Montane Tropical Rainforest",
  },
  extinctionImpact: {
    title: "If N. clipeata Declines Further…",
    points: [
      "Loss of one of the rarest carnivorous plants on Earth",
      "Indicator of severe montane ecosystem degradation",
      "Loss of unique evolutionary lineage and biodiversity",
    ],
  },
  statusScale: {
    text: "Least Concern ─ Vulnerable ─ Endangered ─ 🔴 Critically Endangered ─ Extinct",
  },
},
{
  id: "taxus-sumatrana",
  emoji: "🌳",
  name: "Taxus sumatrana",
  localName: "Taxus Sumatran / Cemara Sumatra",
  scientificName: "Taxus sumatrana",
  type: "Flora",
  category: "Gymnosperm / Evergreen Tree",
  iucn: {
    code: "EN",
    label: "Endangered",
    icon: "🔴",
    riskLevel: "High",
  },
  hero: {
    title: "TAXUS SUMATRAN",
    statusText: "Endangered",
    tagline: "The Sumatran yew tree with powerful medicinal value.",
    summary:
      "A slow-growing montane conifer valued for taxanes such as paclitaxel (taxol), used in cancer treatments—making wild populations vulnerable.",
    keyFacts: [
      { label: "Estimated Mature Individuals", value: "Decreasing (not well-documented)" },
      { label: "Distribution", value: "Sumatra & Sulawesi (Indonesia)" },
      { label: "Population Trend", value: "Decreasing" },
      { label: "Extinction Risk Level", value: "High" },
    ],
  },
  snapshot: [
    { label: "Category", value: "Plant (Evergreen Conifer)" },
    { label: "Scientific Name", value: "Taxus sumatrana" },
    { label: "Common Name", value: "Cemara Sumatra / Sumatran yew" },
    { label: "Habitat", value: "Montane tropical forest" },
    { label: "Geographic Range", value: "Indonesia (Sumatra + Sulawesi)" },
    { label: "Height", value: "Up to ~14 m" },
    { label: "Ecological Role", value: "Long-lived canopy/subcanopy; unique compounds" },
  ],
  story: {
    title: "A Tree with Healing Potential and a Fragile Future",
    paragraphs: [
      "Taxus sumatrana grows in high-elevation tropical forests and contributes to forest structure and nutrient cycles.",
      "It is known for producing taxanes such as paclitaxel (taxol), important compounds used in cancer treatments.",
      "High demand and slow regeneration can pressure wild populations if harvesting is not carefully controlled.",
    ],
  },
  threats: [
    { icon: "🪓", title: "Overharvesting", description: "Unsustainable collection of bark/plant material for medicinal compounds." },
    { icon: "🌲", title: "Habitat Loss", description: "Montane forest disturbance and logging reduce suitable habitat." },
    { icon: "🔥", title: "Low Regeneration", description: "Slow growth makes recovery difficult." },
    { icon: "🌱", title: "Small Local Populations", description: "Fragmented montane patches limit resilience." },
  ],
  ecologicalRole: {
    title: "Ecological Role",
    intro:
      "As a long-lived evergreen in montane forests, it helps stabilize forest communities and provides ecological continuity over time.",
    cascade: {
      steps: [
        "Maintains evergreen forest structure in montane zones",
        "Supports wildlife via fruits/seeds and habitat structure",
        "Stabilizes slow-growth forest community composition",
        "Preserves unique genetic resources for future research",
      ],
      note:
        "Slow-growing trees are especially vulnerable: once lost, recovery can take decades to centuries.",
    },
  },
  habitat: {
    title: "Habitat",
    intro: "High-elevation montane forests with cooler, humid conditions.",
    types: [
      "Montane forests (~1,200–3,000 m)",
      "Humid cool conditions",
      "Well-drained soils on slopes and rocky areas",
    ],
    requirement: "Protection from harvesting and safeguarding remaining montane forest patches.",
    ecosystemType: "Montane Tropical Rainforest",
  },
  extinctionImpact: {
    title: "If Taxus Sumatran Declines Further…",
    points: [
      "Loss of a unique medicinal tree with cancer-fighting compounds",
      "Reduced genetic resources for future pharmaceutical development",
      "Decline of montane forest biodiversity indicators",
    ],
  },
  statusScale: {
    text: "Least Concern ─ Vulnerable ─ 🔴 Endangered ─ Critically Endangered ─ Extinct",
  },
},
// =======================
// 10 FAUNA — FULL TEMPLATE
// =======================

{
  id: "fauna-helmeted-hornbill",
  emoji: "🦜",
  name: "Helmeted Hornbill",
  localName: "Rangkong Gading",
  scientificName: "Rhinoplax vigil",
  type: "Fauna",
  category: "Bird",
  iucn: {
    code: "CR",
    label: "Critically Endangered",
    listName: "IUCN Red List",
    icon: "🔴",
    riskLevel: "Extremely High",
  },
  hero: {
    title: "HELMETED HORNBILL",
    statusText: "Critically Endangered",
    tagline: "A rainforest icon hunted for its solid casque.",
    summary:
      "The helmeted hornbill plays a key role in seed dispersal in Southeast Asian rainforests, but intense poaching and habitat loss have pushed it toward extinction.",
    keyFacts: [
      { label: "Estimated Mature Individuals", value: "Unknown (sharp decline)" },
      { label: "Distribution", value: "Sumatra & Borneo (Indonesia) + SE Asia" },
      { label: "Population Trend", value: "Decreasing" },
      { label: "Extinction Risk Level", value: "Extremely High" },
    ],
  },
  snapshot: [
    { label: "Category", value: "Bird" },
    { label: "Scientific Name", value: "Rhinoplax vigil" },
    { label: "Habitat", value: "Lowland tropical rainforest" },
    { label: "Geographic Range", value: "Sundaland forests (Indonesia & SE Asia)" },
    { label: "Estimated Population", value: "Unknown (declining rapidly)" },
    { label: "Ecological Role", value: "Seed disperser (large-fruited trees)" },
  ],
  story: {
    title: "The Voice and Gardener of the Forest",
    paragraphs: [
      "Helmeted hornbills are famous for loud calls and long-distance movement between fruiting trees, making them powerful seed dispersers.",
      "The casque (helmet-like structure) is tragically targeted for illegal trade, causing heavy population loss even in remote forests.",
    ],
    didYouKnow: {
      title: "Did You Know?",
      points: [
        "Hornbills help regenerate forests by dispersing large seeds that many other birds cannot carry.",
        "Loss of hornbills can reduce the recruitment of big canopy trees over time.",
      ],
    },
  },
  threats: [
    {
      icon: "🪤",
      title: "Poaching & Illegal Trade",
      description:
        "The casque is illegally traded due to its solid ivory-like material, driving unsustainable hunting.",
    },
    {
      icon: "🌲",
      title: "Deforestation",
      description:
        "Lowland rainforest conversion removes nesting trees and fruit resources critical to survival.",
    },
    {
      icon: "🛣️",
      title: "Fragmentation",
      description:
        "Roads and land conversion break forest connectivity, making breeding and dispersal harder.",
    },
  ],
  ecologicalRole: {
    title: "Ecological Role",
    intro: "A keystone frugivore that keeps rainforest regeneration running.",
    cascade: {
      steps: [
        "Consumes large rainforest fruits",
        "Carries seeds long distances",
        "Deposits seeds in new forest gaps",
        "Supports regeneration and biodiversity of canopy trees",
      ],
      note:
        "This is part of a trophic regeneration cascade — losing a disperser can reshape the forest’s tree composition.",
    },
  },
  habitat: {
    title: "Habitat",
    intro: "Helmeted hornbills depend on:",
    types: ["Primary lowland rainforest", "Tall dipterocarp forest", "Old-growth nesting trees"],
    requirement:
      "Large intact forest blocks with strict anti-poaching enforcement and protected nest trees.",
    ecosystemType: "Tropical Lowland Rainforest",
  },
  extinctionImpact: {
    title: "If the Helmeted Hornbill Goes Extinct…",
    points: [
      "Reduced dispersal of large-seeded rainforest trees",
      "Weaker forest regeneration and carbon storage capacity",
      "Loss of a flagship species for Southeast Asian forests",
    ],
    closing:
      "Its disappearance would not only remove an iconic bird, but also reduce the rainforest’s ability to renew itself.",
  },
  statusScale: {
    title: "Conservation Status Scale",
    text: "Least Concern ─ Vulnerable ─ Endangered ─ 🔴 Critically Endangered ─ Extinct",
  },
  card: {
    accent: "emerald",
    coverHint: "Subtle rainforest canopy texture + hornbill casque silhouette (UI only).",
  },
},

{
  id: "fauna-sumatran-elephant",
  emoji: "🐘",
  name: "Sumatran Elephant",
  localName: "Gajah Sumatra",
  scientificName: "Elephas maximus sumatranus",
  type: "Fauna",
  category: "Mammal",
  iucn: {
    code: "CR",
    label: "Critically Endangered",
    listName: "IUCN Red List",
    icon: "🔴",
    riskLevel: "Extremely High",
  },
  hero: {
    title: "SUMATRAN ELEPHANT",
    statusText: "Critically Endangered",
    tagline: "A forest engineer struggling to survive in shrinking landscapes.",
    summary:
      "The Sumatran elephant is vital for shaping forest structure and dispersing seeds, but rapid land conversion has increased conflict and fragmentation across Sumatra.",
    keyFacts: [
      { label: "Estimated Wild Population", value: "Unknown (declining across many ranges)" },
      { label: "Distribution", value: "Sumatra, Indonesia" },
      { label: "Population Trend", value: "Decreasing" },
      { label: "Extinction Risk Level", value: "Extremely High" },
    ],
  },
  snapshot: [
    { label: "Category", value: "Mammal" },
    { label: "Scientific Name", value: "Elephas maximus sumatranus" },
    { label: "Habitat", value: "Lowland rainforest, peat swamp, riverine forest" },
    { label: "Geographic Range", value: "Sumatra, Indonesia" },
    { label: "Estimated Population", value: "Unknown (fragmented subpopulations)" },
    { label: "Ecological Role", value: "Megaherbivore & long-distance seed disperser" },
  ],
  story: {
    title: "The Forest Builder",
    paragraphs: [
      "Elephants create pathways, open forest gaps, and disperse seeds through dung, supporting regeneration and habitat diversity.",
      "As forests are converted into plantations and roads, elephants are pushed into smaller areas, increasing human–elephant conflict.",
    ],
    didYouKnow: {
      title: "Did You Know?",
      points: [
        "Elephants can disperse large seeds that many other animals cannot move effectively.",
        "Protecting elephant corridors also protects many other forest species.",
      ],
    },
  },
  threats: [
    {
      icon: "🌴",
      title: "Land Conversion",
      description:
        "Forest conversion to plantations and agriculture shrinks and fragments elephant range.",
    },
    {
      icon: "⚔",
      title: "Human–Elephant Conflict",
      description:
        "Crop raiding and encounters can lead to retaliation or forced removal.",
    },
    {
      icon: "🛣️",
      title: "Habitat Fragmentation",
      description:
        "Roads and development cut migration routes and reduce gene flow between groups.",
    },
  ],
  ecologicalRole: {
    title: "Ecological Role",
    intro: "A megaherbivore that shapes vegetation patterns and disperses seeds.",
    cascade: {
      steps: [
        "Consumes vegetation and fruits",
        "Creates forest gaps and trails",
        "Stimulates new growth and plant diversity",
        "Disperses seeds and nutrients across landscapes",
      ],
      note:
        "Without megaherbivores, forests can become less dynamic and less resilient to change.",
    },
  },
  habitat: {
    title: "Habitat",
    intro: "The Sumatran elephant inhabits:",
    types: ["Lowland rainforest", "Peat swamp forest", "Riverine forest", "Forest edges near water"],
    requirement:
      "Large connected landscapes with corridors and conflict mitigation programs.",
    ecosystemType: "Tropical Rainforest Biome",
  },
  extinctionImpact: {
    title: "If the Sumatran Elephant Goes Extinct…",
    points: [
      "Loss of a major seed disperser and forest engineer",
      "Reduced forest regeneration and plant diversity",
      "Disruption of ecosystem processes that depend on megafauna",
    ],
    closing:
      "The disappearance of elephants would alter forest structure and reduce ecosystem resilience across Sumatra.",
  },
  statusScale: {
    title: "Conservation Status Scale",
    text: "Least Concern ─ Vulnerable ─ Endangered ─ 🔴 Critically Endangered ─ Extinct",
  },
  card: {
    accent: "blue",
    coverHint: "Soft peat-swamp gradient + elephant footprint pattern (UI only).",
  },
},

{
  id: "fauna-sunda-pangolin",
  emoji: "🦔",
  name: "Sunda Pangolin",
  localName: "Trenggiling",
  scientificName: "Manis javanica",
  type: "Fauna",
  category: "Mammal",
  iucn: {
    code: "CR",
    label: "Critically Endangered",
    listName: "IUCN Red List",
    icon: "🔴",
    riskLevel: "Extremely High",
  },
  hero: {
    title: "SUNDA PANGOLIN",
    statusText: "Critically Endangered",
    tagline: "The world’s most trafficked mammal.",
    summary:
      "Pangolins control insect populations and are part of forest health, but illegal trade has caused severe declines across their range.",
    keyFacts: [
      { label: "Estimated Mature Individuals", value: "Unknown (strong decline)" },
      { label: "Distribution", value: "Sumatra, Java, Borneo + SE Asia" },
      { label: "Population Trend", value: "Decreasing" },
      { label: "Extinction Risk Level", value: "Extremely High" },
    ],
  },
  snapshot: [
    { label: "Category", value: "Mammal" },
    { label: "Scientific Name", value: "Manis javanica" },
    { label: "Habitat", value: "Tropical forests, secondary forests" },
    { label: "Geographic Range", value: "Southeast Asia (incl. Indonesia)" },
    { label: "Estimated Population", value: "Unknown (declining)" },
    { label: "Ecological Role", value: "Insectivore (ant & termite control)" },
  ],
  story: {
    title: "A Silent Guardian of the Forest Floor",
    paragraphs: [
      "Pangolins feed mainly on ants and termites, helping regulate insects that shape soil and forest processes.",
      "High illegal demand for scales and meat has driven dramatic population decline.",
    ],
    didYouKnow: {
      title: "Did You Know?",
      points: [
        "Pangolins are solitary and reproduce slowly, making recovery difficult after heavy hunting.",
        "Their burrows can become microhabitats for other small animals.",
      ],
    },
  },
  threats: [
    {
      icon: "📦",
      title: "Illegal Wildlife Trade",
      description:
        "Demand for scales and meat drives poaching and transnational trafficking.",
    },
    {
      icon: "🌲",
      title: "Habitat Loss",
      description:
        "Forest conversion reduces shelter and prey availability.",
    },
    {
      icon: "🪤",
      title: "Snare Traps",
      description:
        "Ground snares set for other animals can unintentionally capture pangolins.",
    },
  ],
  ecologicalRole: {
    title: "Ecological Role",
    intro: "A specialized insectivore supporting ecosystem balance.",
    cascade: {
      steps: [
        "Consumes ants and termites",
        "Reduces insect overpopulation",
        "Maintains soil stability and forest floor processes",
        "Supports healthier forest regeneration conditions",
      ],
      note:
        "Losing insect predators can shift soil dynamics and increase pest outbreaks.",
    },
  },
  habitat: {
    title: "Habitat",
    intro: "The Sunda pangolin uses:",
    types: ["Lowland tropical forest", "Secondary forest", "Forest edges with ground cover"],
    requirement:
      "Protection from hunting plus intact forests with healthy insect communities.",
    ecosystemType: "Tropical Forest Biome",
  },
  extinctionImpact: {
    title: "If the Sunda Pangolin Goes Extinct…",
    points: [
      "Potential increase in termite/ant pressures in some landscapes",
      "Loss of a unique evolutionary lineage",
      "Reduced ecosystem resilience in disturbed forests",
    ],
    closing:
      "Its extinction would symbolize the collapse of wildlife protection against high-profit trafficking networks.",
  },
  statusScale: {
    title: "Conservation Status Scale",
    text: "Least Concern ─ Vulnerable ─ Endangered ─ 🔴 Critically Endangered ─ Extinct",
  },
  card: {
    accent: "amber",
    coverHint: "Scale pattern texture + soft forest-floor lighting (UI only).",
  },
},

{
  id: "fauna-green-peafowl",
  emoji: "🦚",
  name: "Green Peafowl",
  localName: "Merak Hijau",
  scientificName: "Pavo muticus",
  type: "Fauna",
  category: "Bird",
  iucn: {
    code: "EN",
    label: "Endangered",
    listName: "IUCN Red List",
    icon: "🔴",
    riskLevel: "High",
  },
  hero: {
    title: "GREEN PEAFOWL",
    statusText: "Endangered",
    tagline: "A spectacular bird losing its last safe habitats.",
    summary:
      "Green peafowl depends on forest–savanna mosaics. Habitat conversion and hunting have reduced populations across many areas.",
    keyFacts: [
      { label: "Estimated Mature Individuals", value: "Unknown (fragmented)" },
      { label: "Distribution", value: "Java (patchy) + SE Asia (patchy)" },
      { label: "Population Trend", value: "Decreasing" },
      { label: "Extinction Risk Level", value: "High" },
    ],
  },
  snapshot: [
    { label: "Category", value: "Bird" },
    { label: "Scientific Name", value: "Pavo muticus" },
    { label: "Habitat", value: "Dry forest edges, open woodland, savanna mosaic" },
    { label: "Geographic Range", value: "Java and parts of SE Asia (fragmented)" },
    { label: "Estimated Population", value: "Unknown (declining)" },
    { label: "Ecological Role", value: "Omnivore; seed dispersal (limited)" },
  ],
  story: {
    title: "The Jewel of Dry Forests",
    paragraphs: [
      "Green peafowl require a mix of open spaces and forest cover, relying on safe roosts and nesting grounds.",
      "As landscapes convert to agriculture and settlements, remaining populations become isolated.",
    ],
    didYouKnow: {
      title: "Did You Know?",
      points: [
        "Fragmentation can reduce breeding success as birds struggle to find safe nesting sites.",
        "Peafowl are often used as flagship species to protect remaining dry forests.",
      ],
    },
  },
  threats: [
    { icon: "🌾", title: "Land Conversion", description: "Open woodland converted to agriculture and settlements." },
    { icon: "🔫", title: "Hunting", description: "Targeted for feathers, meat, and illegal capture." },
    { icon: "🧩", title: "Fragmentation", description: "Small isolated groups face higher extinction risk." },
  ],
  ecologicalRole: {
    title: "Ecological Role",
    intro: "Part of dry forest food webs and a flagship for habitat conservation.",
    cascade: {
      steps: [
        "Consumes insects and plant matter",
        "Contributes to local seed movement",
        "Supports ecosystem awareness and protection as a flagship",
        "Encourages protection of dry forest mosaics",
      ],
      note: "Flagship species often help protect entire habitats when conservation succeeds.",
    },
  },
  habitat: {
    title: "Habitat",
    intro: "Green peafowl inhabit:",
    types: ["Dry forest edges", "Open woodland", "Savanna mosaic", "Riverine corridors"],
    requirement: "Protected open habitats with safe roosting trees and low hunting pressure.",
    ecosystemType: "Tropical Dry Forest & Savanna Ecosystem",
  },
  extinctionImpact: {
    title: "If the Green Peafowl Goes Extinct…",
    points: [
      "Loss of a flagship bird for dry forest protection",
      "Reduced biodiversity value of remaining woodland mosaics",
      "Cultural and ecological heritage loss",
    ],
    closing: "Its extinction would reflect the collapse of remaining dry forest refuges in heavily modified regions.",
  },
  statusScale: {
    title: "Conservation Status Scale",
    text: "Least Concern ─ Vulnerable ─ 🔴 Endangered ─ Critically Endangered ─ Extinct",
  },
  card: {
    accent: "emerald",
    coverHint: "Feather-eye motif + warm savanna gradient (UI only).",
  },
},

// 6–10 (Fauna) — tetap full template, tapi lebih ringkas isinya agar tidak kepanjangan.
// Kamu bisa expand paragraf kapan saja.
{
  id: "fauna-sun-bear",
  emoji: "🐻",
  name: "Sun Bear",
  localName: "Beruang Madu",
  scientificName: "Helarctos malayanus",
  type: "Fauna",
  category: "Mammal",
  iucn: { code: "VU", label: "Vulnerable", listName: "IUCN Red List", icon: "🟠", riskLevel: "Moderate to High" },
  hero: {
    title: "SUN BEAR",
    statusText: "Vulnerable",
    tagline: "A small bear with a big role in tropical forests.",
    summary: "Threatened by forest loss and hunting; important as an omnivore and insect predator.",
    keyFacts: [
      { label: "Distribution", value: "Sumatra & Borneo + SE Asia" },
      { label: "Population Trend", value: "Decreasing" },
      { label: "Extinction Risk Level", value: "Moderate to High" },
    ],
  },
  snapshot: [
    { label: "Category", value: "Mammal" },
    { label: "Scientific Name", value: "Helarctos malayanus" },
    { label: "Habitat", value: "Lowland tropical forests" },
    { label: "Geographic Range", value: "Southeast Asia (incl. Indonesia)" },
    { label: "Estimated Population", value: "Unknown (declining)" },
    { label: "Ecological Role", value: "Omnivore; insect control; seed interactions" },
  ],
  story: {
    title: "Forest Forager",
    paragraphs: [
      "Sun bears feed on insects, fruits, and honey, linking multiple layers of the forest food web.",
      "Habitat conversion and hunting pressure continue to reduce safe forest areas.",
    ],
    didYouKnow: { title: "Did You Know?", points: ["Sun bears use powerful claws to open termite nests and logs."] },
  },
  threats: [
    { icon: "🌲", title: "Deforestation", description: "Loss of feeding and denning sites." },
    { icon: "🔫", title: "Hunting", description: "Targeted for bile, meat, and illegal pets." },
    { icon: "🛣️", title: "Fragmentation", description: "Small patches reduce survival and reproduction." },
  ],
  ecologicalRole: {
    title: "Ecological Role",
    intro: "An omnivore that supports insect regulation and seed processes.",
    cascade: {
      steps: ["Consumes insects and fruits", "Controls some insect pressures", "Supports seed movement via feeding", "Helps stabilize forest food webs"],
      note: "Omnivores often buffer ecosystems by connecting multiple food sources and interactions.",
    },
  },
  habitat: {
    title: "Habitat",
    intro: "Sun bears inhabit:",
    types: ["Lowland rainforest", "Secondary forest", "Forest edges near fruiting trees"],
    requirement: "Connected forests + strict hunting control.",
    ecosystemType: "Tropical Rainforest Biome",
  },
  extinctionImpact: {
    title: "If Sun Bears Decline Further…",
    points: ["Weaker insect regulation", "Reduced forest food-web stability"],
    closing: "Declines can signal broader forest degradation affecting many species.",
  },
  statusScale: { title: "Conservation Status Scale", text: "Least Concern ─ 🟡 Vulnerable ─ Endangered ─ Critically Endangered ─ Extinct" },
  card: { accent: "amber", coverHint: "Honeycomb micro-pattern + forest shade gradient (UI only)." },
},

{
  id: "fauna-babirusa",
  emoji: "🐗",
  name: "Babirusa",
  localName: "Babirusa",
  scientificName: "Babyrousa spp.",
  type: "Fauna",
  category: "Mammal",
  iucn: { code: "VU", label: "Vulnerable", listName: "IUCN Red List", icon: "🟠", riskLevel: "Moderate" },
  hero: {
    title: "BABIRUSA",
    statusText: "Vulnerable",
    tagline: "A unique pig of Wallacea’s forests.",
    summary: "Threatened by hunting and habitat loss; endemic to Sulawesi region.",
    keyFacts: [
      { label: "Distribution", value: "Sulawesi & nearby islands" },
      { label: "Population Trend", value: "Decreasing" },
      { label: "Extinction Risk Level", value: "Moderate" },
    ],
  },
  snapshot: [
    { label: "Category", value: "Mammal" },
    { label: "Scientific Name", value: "Babyrousa spp." },
    { label: "Habitat", value: "Tropical forest and riverine areas" },
    { label: "Geographic Range", value: "Sulawesi region" },
    { label: "Estimated Population", value: "Unknown (declining locally)" },
    { label: "Ecological Role", value: "Omnivore; soil disturbance & nutrient cycling" },
  ],
  story: {
    title: "Wallacea Endemic",
    paragraphs: [
      "Babirusa forage and disturb soil, aiding nutrient cycling and creating microhabitats for forest floor organisms.",
      "Local hunting and forest conversion remain key pressures.",
    ],
    didYouKnow: { title: "Did You Know?", points: ["Babirusa are part of Wallacea’s unique evolutionary history."] },
  },
  threats: [
    { icon: "🔫", title: "Hunting", description: "Targeted for meat in some areas." },
    { icon: "🌲", title: "Habitat Loss", description: "Forest conversion reduces refuge areas." },
    { icon: "🧩", title: "Fragmentation", description: "Isolated groups face long-term risks." },
  ],
  ecologicalRole: {
    title: "Ecological Role",
    intro: "A forest omnivore that contributes to nutrient cycling.",
    cascade: {
      steps: ["Forages on forest floor", "Disturbs soil and leaf litter", "Enhances decomposition and nutrients", "Supports forest floor biodiversity"],
      note: "Soil disturbance can improve seed germination and decomposition in some habitats.",
    },
  },
  habitat: {
    title: "Habitat",
    intro: "Babirusa inhabit:",
    types: ["Primary forest", "Secondary forest", "Riverine forest"],
    requirement: "Hunting control + protected forest blocks.",
    ecosystemType: "Wallacea Tropical Forest",
  },
  extinctionImpact: {
    title: "If Babirusa Goes Extinct…",
    points: ["Loss of a unique endemic lineage", "Reduced nutrient cycling dynamics in forest floors"],
    closing: "Because babirusa are endemic, extinction locally can mean global loss.",
  },
  statusScale: { title: "Conservation Status Scale", text: "Least Concern ─ 🟡 Vulnerable ─ Endangered ─ Critically Endangered ─ Extinct" },
  card: { accent: "emerald", coverHint: "Wallacea map silhouette + subtle tusk curve motif (UI only)." },
},

{
  id: "fauna-scalloped-hammerhead",
  emoji: "🦈",
  name: "Scalloped Hammerhead Shark",
  localName: "Hiu Martil",
  scientificName: "Sphyrna lewini",
  type: "Fauna",
  category: "Fish",
  iucn: { code: "CR", label: "Critically Endangered", listName: "IUCN Red List", icon: "🔴", riskLevel: "Extremely High" },
  hero: {
    title: "SCALLOPED HAMMERHEAD",
    statusText: "Critically Endangered",
    tagline: "A migratory predator devastated by fishing pressure.",
    summary: "Hammerheads help maintain marine food web balance but are threatened by bycatch and fin trade.",
    keyFacts: [
      { label: "Distribution", value: "Tropical oceans (including Indonesia)" },
      { label: "Population Trend", value: "Decreasing" },
      { label: "Extinction Risk Level", value: "Extremely High" },
    ],
  },
  snapshot: [
    { label: "Category", value: "Fish" },
    { label: "Scientific Name", value: "Sphyrna lewini" },
    { label: "Habitat", value: "Coastal waters, reefs, open ocean" },
    { label: "Geographic Range", value: "Tropical Indo-Pacific and beyond" },
    { label: "Estimated Population", value: "Declining (regional variability)" },
    { label: "Ecological Role", value: "Top predator" },
  ],
  story: {
    title: "A Predator That Signals Ocean Health",
    paragraphs: [
      "Sharks often reproduce slowly, so heavy fishing can cause long recovery times.",
      "Protecting nursery habitats and reducing bycatch are key for survival.",
    ],
    didYouKnow: {
      title: "Did You Know?",
      points: ["Apex predators help stabilize food webs by limiting prey overpopulation."],
    },
  },
  threats: [
    { icon: "🎣", title: "Bycatch", description: "Caught in gillnets and longlines unintentionally." },
    { icon: "💰", title: "Fin Trade", description: "Demand for fins increases targeted catches." },
    { icon: "🌊", title: "Nursery Habitat Loss", description: "Coastal pressure affects young survival." },
  ],
  ecologicalRole: {
    title: "Ecological Role",
    intro: "An apex predator that maintains balance across marine trophic levels.",
    cascade: {
      steps: ["Predates on mid-level fish", "Limits prey overpopulation", "Helps protect reef/community balance", "Supports more stable marine ecosystems"],
      note: "Removing apex predators can trigger cascading shifts in ocean ecosystems.",
    },
  },
  habitat: {
    title: "Habitat",
    intro: "Hammerheads use:",
    types: ["Coastal waters", "Reef-associated zones", "Open ocean migration routes"],
    requirement: "Bycatch reduction + protection of nursery areas.",
    ecosystemType: "Tropical Marine Ecosystem",
  },
  extinctionImpact: {
    title: "If Hammerheads Disappear…",
    points: ["Food web imbalance may increase", "Loss of apex predator regulation", "Weaker indicators of ocean health"],
    closing: "Their loss would signal severe degradation in marine biodiversity management.",
  },
  statusScale: { title: "Conservation Status Scale", text: "Least Concern ─ Vulnerable ─ Endangered ─ 🔴 Critically Endangered ─ Extinct" },
  card: { accent: "blue", coverHint: "Wave ripple texture + hammerhead silhouette (UI only)." },
},

{
  id: "fauna-giant-clam",
  emoji: "🐚",
  name: "Giant Clam",
  localName: "Kima Raksasa",
  scientificName: "Tridacna gigas",
  type: "Fauna",
  category: "Invertebrate",
  iucn: { code: "VU", label: "Vulnerable", listName: "IUCN Red List", icon: "🟠", riskLevel: "Moderate" },
  hero: {
    title: "GIANT CLAM",
    statusText: "Vulnerable",
    tagline: "A living reef filter and microhabitat.",
    summary: "Giant clams support reefs by filtering water and providing structure, but harvesting and reef loss threaten populations.",
    keyFacts: [
      { label: "Distribution", value: "Indo-Pacific reefs (incl. Indonesia)" },
      { label: "Population Trend", value: "Decreasing (many areas)" },
      { label: "Extinction Risk Level", value: "Moderate" },
    ],
  },
  snapshot: [
    { label: "Category", value: "Invertebrate" },
    { label: "Scientific Name", value: "Tridacna gigas" },
    { label: "Habitat", value: "Coral reefs, lagoons" },
    { label: "Geographic Range", value: "Indo-Pacific (patchy)" },
    { label: "Estimated Population", value: "Declining in many harvested areas" },
    { label: "Ecological Role", value: "Filter feeder; reef habitat support" },
  ],
  story: {
    title: "Reef Giant, Quiet Protector",
    paragraphs: [
      "Giant clams filter water and host symbiotic algae, contributing to reef productivity.",
      "Overharvesting and coral degradation reduce their ability to recover naturally.",
    ],
    didYouKnow: {
      title: "Did You Know?",
      points: ["Clams can improve local water clarity through filtering."],
    },
  },
  threats: [
    { icon: "🪓", title: "Harvesting", description: "Collected for food and shells." },
    { icon: "🪸", title: "Reef Degradation", description: "Bleaching and destruction reduce habitat." },
    { icon: "🌡", title: "Climate Stress", description: "Warming seas affect reef stability." },
  ],
  ecologicalRole: {
    title: "Ecological Role",
    intro: "A filter feeder that supports reef water quality and structure.",
    cascade: {
      steps: ["Filters water", "Improves clarity and reef conditions", "Supports microhabitats", "Strengthens reef community stability"],
      note: "Healthy reefs depend on many small processes — filtration is one of them.",
    },
  },
  habitat: {
    title: "Habitat",
    intro: "Giant clams inhabit:",
    types: ["Coral reefs", "Shallow lagoons", "Warm tropical coastal waters"],
    requirement: "Reef protection + anti-harvesting enforcement + restoration where needed.",
    ecosystemType: "Coral Reef & Tropical Marine Ecosystem",
  },
  extinctionImpact: {
    title: "If Giant Clams Vanish…",
    points: ["Reduced reef filtration and microhabitat diversity", "Loss of reef structural complexity in some zones"],
    closing: "Their decline reflects broader coral reef collapse pressures.",
  },
  statusScale: { title: "Conservation Status Scale", text: "Least Concern ─ 🟡 Vulnerable ─ Endangered ─ Critically Endangered ─ Extinct" },
  card: { accent: "blue", coverHint: "Coral texture + shell iridescence gradient (UI only)." },
},
{
    "id": "macrocephalon-maleo",
    "emoji": "🐦",
    "name": "Macrocephalon maleo",
    "localName": "Burung Maleo",
    "scientificName": "Macrocephalon maleo",
    "type": "Fauna",
    "category": "Bird / Megapode",
    "iucn": {
      "code": "CR",
      "label": "Critically Endangered",
      "icon": "⬛",
      "riskLevel": "Extreme",
    },
    "hero": {
      "title": "MALEO SENKAWUR",
      "statusText": "Critically Endangered",
      "tagline": "The unique ground-dwelling bird that relies on geothermal heat.",
      "summary": "An endemic Celebes bird known for burying its massive eggs in volcanic sand or sun-heated beaches to incubate.",
      "keyFacts": [
        { "label": "Estimated Population", "value": "8,000 - 14,000 individuals" },
        { "label": "Distribution", "value": "Sulawesi (Indonesia)" },
        { "label": "Population Trend", "value": "Decreasing" },
        { "label": "Extinction Risk Level", "value": "Extreme" },
      ],
    },
    "snapshot": [
      { "label": "Category", "value": "Bird (Megapode)" },
      { "label": "Scientific Name", "value": "Macrocephalon maleo" },
      { "label": "Common Name", "value": "Maleo / Maleo Senkawur" },
      { "label": "Habitat", "value": "Tropical lowland rainforest & sandy beaches" },
      { "label": "Geographic Range", "value": "Indonesia (Sulawesi & Buton)" },
      { "label": "Egg Size", "value": "5x larger than a chicken egg" },
      { "label": "Ecological Role", "value": "Seed disperser & soil aerator" },
    ],
    "story": {
      "title": "A Bird That Doesn't Sit on Its Eggs",
      "paragraphs": [
        "The Maleo is famous for its unique nesting strategy: it uses solar or geothermal energy to hatch its eggs, burying them deep in the ground.",
        "Once hatched, the chicks are fully independent, capable of flying immediately after digging themselves out of the sand.",
        "Habitat fragmentation and illegal egg poaching have pushed this remarkable species to the brink of extinction.",
      ],
    },
    "threats": [
      { "icon": "🍳", "title": "Egg Poaching", "description": "Illegal collection for consumption by local communities." },
      { "icon": "🚜", "title": "Habitat Conversion", "description": "Coastal development and agriculture destroying nesting grounds." },
      { "icon": "🐕", "title": "Predation", "description": "Invasive species like monitor lizards and feral dogs hunting eggs/chicks." },
      { "icon": "🛣️", "title": "Fragmentation", "description": "Roads cutting through corridors between forests and beaches." },
    ],
    "ecologicalRole": {
      "title": "Ecological Role",
      "intro": "As a ground-dweller, the Maleo plays a key role in the Sulawesi ecosystem.",
      "cascade": {
        "steps": [
          "Disperses large seeds across the forest floor",
          "Aerates soil during its vigorous nesting excavations",
          "Acts as an umbrella species for Sulawesi coastal forests",
          "Indicator of geothermal and pristine beach health",
        ],
        "note": "Their disappearance signifies a breakdown in the link between forest and coastal ecosystems.",
      },
    },
    "habitat": {
      "title": "Habitat",
      "intro": "Requires a specific combination of forest cover and heated nesting sites.",
      "types": [
        "Lowland tropical rainforests",
        "Geothermally heated inland soils",
        "Open sandy beaches with high solar exposure",
      ],
      "requirement": "Uninterrupted corridors between feeding forests and nesting sites.",
      "ecosystemType": "Tropical Lowland & Coastal Forest",
    },
    "extinctionImpact": {
      "title": "If the Maleo Becomes Extinct…",
      "points": [
        "Loss of a unique evolutionary lineage found nowhere else",
        "Disruption of seed dispersal for specific Sulawesi tree species",
        "Collapse of cultural heritage for local Sulawesi communities",
      ],
    },
    "statusScale": {
      "text": "Least Concern ─ Vulnerable ─ Endangered ─ ⬛ Critically Endangered ─ Extinct",
    },
  },
  {
    "id": "nasalis-larvatus",
    "emoji": "🐒",
    "name": "Nasalis larvatus",
    "localName": "Bekantan",
    "scientificName": "Nasalis larvatus",
    "type": "Fauna",
    "category": "Mammal / Primate",
    "iucn": {
      "code": "EN",
      "label": "Endangered",
      "icon": "🔴",
      "riskLevel": "High",
    },
    "hero": {
      "title": "PROBOSCIS MONKEY",
      "statusText": "Endangered",
      "tagline": "The long-nosed master of the mangrove swamps.",
      "summary": "An endemic primate of Borneo known for its unusually large nose and remarkable swimming abilities.",
      "keyFacts": [
        { "label": "Estimated Population", "value": "~20,000 individuals" },
        { "label": "Distribution", "value": "Borneo (Indonesia, Malaysia, Brunei)" },
        { "label": "Population Trend", "value": "Decreasing" },
        { "label": "Extinction Risk Level", "value": "High" },
      ],
    },
    "snapshot": [
      { "label": "Category", "value": "Mammal (Primate)" },
      { "label": "Scientific Name", "value": "Nasalis larvatus" },
      { "label": "Common Name", "value": "Bekantan / Proboscis Monkey" },
      { "label": "Habitat", "value": "Mangroves & Riverine forests" },
      { "label": "Geographic Range", "value": "Borneo Island" },
      { "label": "Diet", "value": "Young leaves, seeds, and unripe fruits" },
      { "label": "Ecological Role", "value": "Folivore and mangrove health indicator" },
    ],
    "story": {
      "title": "The Swimming Primate",
      "paragraphs": [
        "Bekantans are highly specialized for life in the wetlands, possessing webbed feet that make them excellent swimmers.",
        "The male's large nose is thought to be a result of sexual selection, used to amplify vocalizations to attract mates.",
        "They are increasingly threatened as their riverside and mangrove habitats are converted into palm oil plantations.",
      ],
    },
    "threats": [
      { "icon": "🪵", "title": "Mangrove Destruction", "description": "Clearing of coastal forests for charcoal and aquaculture." },
      { "icon": "🌴", "title": "Palm Oil Expansion", "description": "Loss of riverine buffer zones to industrial agriculture." },
      { "icon": "🚤", "title": "Human Disturbance", "description": "Increased river traffic disrupting social groups." },
      { "icon": "🏹", "title": "Hunting", "description": "Poached for meat or traditional 'bezoar' stones." },
    ],
    "ecologicalRole": {
      "title": "Ecological Role",
      "intro": "They play a vital role in maintaining the health of Borneo's river ecosystems.",
      "cascade": {
        "steps": [
          "Regulates leaf canopy growth in mangrove forests",
          "Nutrient cycling through waste along riverbanks",
          "Serves as an indicator species for riverine health",
          "Potential seed disperser for certain wetland plants",
        ],
        "note": "They are a 'specialist' species; their loss indicates the degradation of entire wetland systems.",
      },
    },
    "habitat": {
      "title": "Habitat",
      "intro": "Strictly limited to areas near water in low-lying forests.",
      "types": [
        "Mangrove forests",
        "Peat swamp forests",
        "Riverine (gallery) forests",
      ],
      "requirement": "Direct access to fresh or brackish water for travel and safety.",
      "ecosystemType": "Wetland / Mangrove Ecosystem",
    },
    "extinctionImpact": {
      "title": "If the Bekantan Declines Further…",
      "points": [
        "Loss of an iconic symbol of Borneo's biodiversity",
        "Uncontrolled growth of certain mangrove vegetation",
        "Significant decrease in eco-tourism revenue for local communities",
      ],
    },
    "statusScale": {
      "text": "Least Concern ─ Vulnerable ─ 🔴 Endangered ─ Critically Endangered ─ Extinct",
    },
  },
  {
    "id": "zaglossus-bruijnii",
    "emoji": "🦔",
    "name": "Zaglossus bruijnii",
    "localName": "Landak Semut Irian",
    "scientificName": "Zaglossus bruijnii",
    "type": "Fauna",
    "category": "Mammal / Monotreme",
    "iucn": {
      "code": "CR",
      "label": "Critically Endangered",
      "icon": "⬛",
      "riskLevel": "Extreme",
    },
    "hero": {
      "title": "WESTERN LONG-BEAKED ECHIDNA",
      "statusText": "Critically Endangered",
      "tagline": "The ancient egg-laying mammal of the Papuan highlands.",
      "summary": "One of the few surviving monotremes, this 'living fossil' lays eggs but produces milk for its young.",
      "keyFacts": [
        { "label": "Estimated Population", "value": "Unknown (Very Rare)" },
        { "label": "Distribution", "value": "West Papua (Indonesia)" },
        { "label": "Population Trend", "value": "Decreasing" },
        { "label": "Extinction Risk Level", "value": "Extreme" },
      ],
    },
    "snapshot": [
      { "label": "Category", "value": "Mammal (Monotreme)" },
      { "label": "Scientific Name", "value": "Zaglossus bruijnii" },
      { "label": "Common Name", "value": "Landak Semut Irian / Western Long-beaked Echidna" },
      { "label": "Habitat", "value": "Alpine meadows & montane forests" },
      { "label": "Geographic Range", "value": "New Guinea (Bird's Head Peninsula)" },
      { "label": "Diet", "value": "Earthworms (specialized feeder)" },
      { "label": "Ecological Role", "value": "Invertebrate predator and soil turner" },
    ],
    "story": {
      "title": "A Legacy from the Age of Dinosaurs",
      "paragraphs": [
        "Echidnas belong to the Monotremata order—mammals that lay eggs. This makes them one of the most evolutionarily distinct creatures on Earth.",
        "Unlike its short-beaked relatives, the Western Long-beaked Echidna feeds almost exclusively on earthworms in high-altitude forests.",
        "They are extremely sensitive to human presence and are rarely seen in the wild, making conservation efforts difficult.",
      ],
    },
    "threats": [
      { "icon": "🏹", "title": "Traditional Hunting", "description": "Hunted for food by local communities using trained dogs." },
      { "icon": "🚜", "title": "Habitat Loss", "description": "Logging and mining activities in the Papuan highlands." },
      { "icon": "🌡️", "title": "Climate Change", "description": "Rising temperatures affecting the high-altitude alpine ecosystem." },
      { "icon": "📉", "title": "Low Birth Rate", "description": "Slow reproductive cycle makes population recovery very difficult." },
    ],
    "ecologicalRole": {
      "title": "Ecological Role",
      "intro": "They are top predators of the soil invertebrate world in New Guinea.",
      "cascade": {
        "steps": [
          "Regulates earthworm populations in montane soils",
          "Turns over leaf litter and soil while foraging",
          "Facilitates nutrient cycling in high-altitude forests",
          "Represent an ancient branch of the mammalian tree of life",
        ],
        "note": "Their loss would mean the extinction of a unique evolutionary strategy.",
      },
    },
    "habitat": {
      "title": "Habitat",
      "intro": "Cold, humid highlands and alpine grasslands.",
      "types": [
        "Montane forests (>2,500 m)",
        "Alpine meadows",
        "Humid tropical highlands",
      ],
      "requirement": "Undisturbed soil for worm-foraging and cool temperatures.",
      "ecosystemType": "Montane Forest & Alpine Grassland",
    },
    "extinctionImpact": {
      "title": "If the Long-beaked Echidna Vanishes…",
      "points": [
        "Loss of one of only five remaining monotreme species globally",
        "Disruption of high-altitude soil ecology",
        "Loss of scientific opportunity to study early mammalian evolution",
      ],
    },
    "statusScale": {
      "text": "Least Concern ─ Vulnerable ─ Endangered ─ ⬛ Critically Endangered ─ Extinct",
    },
  },
  {
    "id": "cacatua-sulphurea",
    "emoji": "🦜",
    "name": "Cacatua sulphurea",
    "localName": "Kakatua Kecil Jambul Kuning",
    "scientificName": "Cacatua sulphurea",
    "type": "Fauna",
    "category": "Bird / Parrot",
    "iucn": {
      "code": "CR",
      "label": "Critically Endangered",
      "icon": "⬛",
      "riskLevel": "Extreme",
    },
    "hero": {
      "title": "YELLOW-CRESTED COCKATOO",
      "statusText": "Critically Endangered",
      "tagline": "The intelligent dancer of the Wallacea region.",
      "summary": "A medium-sized cockatoo with white plumage and a striking yellow crest, nearly wiped out by the cage-bird trade.",
      "keyFacts": [
        { "label": "Estimated Population", "value": "<2,500 individuals" },
        { "label": "Distribution", "value": "Sunda Islands & Sulawesi (Indonesia)" },
        { "label": "Population Trend", "value": "Decreasing" },
        { "label": "Extinction Risk Level", "value": "Extreme" },
      ],
    },
    "snapshot": [
      { "label": "Category", "value": "Bird (Parrot)" },
      { "label": "Scientific Name", "value": "Cacatua sulphurea" },
      { "label": "Common Name", "value": "Kakatua Jambul Kuning / Yellow-crested Cockatoo" },
      { "label": "Habitat", "value": "Deciduous forest & forest edges" },
      { "label": "Geographic Range", "value": "Indonesia (Timor Leste to Sulawesi)" },
      { "label": "Diet", "value": "Seeds, fruits, and nuts" },
      { "label": "Ecological Role", "value": "Seed predator and disperser" },
    ],
    "story": {
      "title": "The Price of Beauty",
      "paragraphs": [
        "The Yellow-crested Cockatoo is highly social and exceptionally intelligent, making it a target for the illegal wildlife trade.",
        "In the late 20th century, hundreds of thousands were exported, leading to a catastrophic collapse of wild populations.",
        "Today, they survive in small, fragmented pockets, with some of the most critical populations on the island of Sumba.",
      ],
    },
    "threats": [
      { "icon": "🕸️", "title": "Illegal Trade", "description": "Persistent trapping for the domestic and international pet market." },
      { "icon": "🪓", "title": "Nesting Site Loss", "description": "Felling of large, old trees needed for nesting hollows." },
      { "icon": "🌾", "title": "Agricultural Conflict", "description": "Sometimes viewed as pests on maize crops, leading to retaliation." },
      { "icon": "🌪️", "title": "Extreme Weather", "description": "Vulnerable to typhoons that destroy habitat in small island ranges." },
    ],
    "ecologicalRole": {
      "title": "Ecological Role",
      "intro": "These cockatoos shape the vegetation of the Wallacea transition zone.",
      "cascade": {
        "steps": [
          "Disperses seeds of native forest trees",
          "Creates nesting hollows used by other species",
          "Controls certain insect populations during breeding season",
          "Functions as a flagship species for Sunda Island conservation",
        ],
        "note": "They are vital for the regeneration of dry deciduous forests.",
      },
    },
    "habitat": {
      "title": "Habitat",
      "intro": "Found in both humid and dry tropical forests.",
      "types": [
        "Lowland semi-deciduous forests",
        "Forest edges and scrubland",
        "Coconut plantations (occasionally)",
      ],
      "requirement": "Large, mature trees with natural cavities for nesting.",
      "ecosystemType": "Tropical Dry & Moist Forest",
    },
    "extinctionImpact": {
      "title": "If the Yellow-crested Cockatoo Goes Extinct…",
      "points": [
        "Loss of a key seed disperser in fragile island ecosystems",
        "Economic loss for community-led birdwatching tourism",
        "Collapse of another unique Wallacean endemic species",
      ],
    },
    "statusScale": {
      "text": "Least Concern ─ Vulnerable ─ Endangered ─ ⬛ Critically Endangered ─ Extinct",
    },
  },
  {
    "id": "leucopsar-rothschildi",
    "emoji": "🐦",
    "name": "Leucopsar rothschildi",
    "localName": "Jalak Bali",
    "scientificName": "Leucopsar rothschildi",
    "type": "Fauna",
    "category": "Bird / Starling",
    "iucn": {
      "code": "CR",
      "label": "Critically Endangered",
      "icon": "⬛",
      "riskLevel": "Extreme",
    },
    "hero": {
      "title": "BALI MYNA",
      "statusText": "Critically Endangered",
      "tagline": "The snow-white emblem of the Island of Gods.",
      "summary": "One of the world's rarest birds, distinguished by its pure white feathers and striking blue eye patches.",
      "keyFacts": [
        { "label": "Estimated Wild Population", "value": "<100 (excluding reintroduced)" },
        { "label": "Distribution", "value": "Bali (Indonesia)" },
        { "label": "Population Trend", "value": "Stable (Due to conservation)" },
        { "label": "Extinction Risk Level", "value": "Extreme" },
      ],
    },
    "snapshot": [
      { "label": "Category", "value": "Bird (Starling)" },
      { "label": "Scientific Name", "value": "Leucopsar rothschildi" },
      { "label": "Common Name", "value": "Jalak Bali / Bali Starling" },
      { "label": "Habitat", "value": "Dry savannah & acacia forests" },
      { "label": "Geographic Range", "value": "Northwest Bali (Bali Barat National Park)" },
      { "label": "Diet", "value": "Insects, fruits, and small reptiles" },
      { "label": "Ecological Role", "value": "Insect control and seed dispersal" },
    ],
    "story": {
      "title": "Back from the Brink",
      "paragraphs": [
        "By 2001, only about six individuals were thought to remain in the wild due to extreme poaching for the pet trade.",
        "A massive international and local effort involving captive breeding and community protection has saved the species from total extinction.",
        "While captive numbers are high, the wild population remains precariously small and restricted to a single national park.",
      ],
    },
    "threats": [
      { "icon": "🕸️", "title": "Poaching", "description": "High demand in the black market due to its beauty and rarity." },
      { "icon": "📉", "title": "Genetic Bottleneck", "description": "Low genetic diversity due to the tiny starting wild population." },
      { "icon": "🐕", "title": "Predation", "description": "Natural predators like snakes and invasive species." },
      { "icon": "🚜", "title": "Habitat Limitation", "description": "Only a small area of suitable habitat remains protected." },
    ],
    "ecologicalRole": {
      "title": "Ecological Role",
      "intro": "The Bali Myna is a vital part of the dry forest ecosystem of West Bali.",
      "cascade": {
        "steps": [
          "Regulates insect populations in savannah zones",
          "Disperses seeds of native fruit-bearing trees",
          "Acts as a cultural and conservation icon for Bali",
          "Inhabits and maintains balance in the monsoon forest",
        ],
        "note": "Their survival is a testament to active human conservation intervention.",
      },
    },
    "habitat": {
      "title": "Habitat",
      "intro": "Open woodlands and dry savannahs of the northwest coast.",
      "types": [
        "Tropical deciduous forests",
        "Acacia savannahs",
        "Lowland forest edges",
      ],
      "requirement": "Mature trees for nesting and nearby water sources.",
      "ecosystemType": "Dry Monsoon Forest",
    },
    "extinctionImpact": {
      "title": "If the Jalak Bali Vanishes…",
      "points": [
        "Loss of Bali's only endemic bird species",
        "Failure of one of Indonesia's most prominent conservation success stories",
        "Imbalance in the insect-to-plant ratios in Bali Barat",
      ],
    },
    "statusScale": {
      "text": "Least Concern ─ Vulnerable ─ Endangered ─ ⬛ Critically Endangered ─ Extinct",
    },
  },
{
    "id": "vanda-tricolor",
    "emoji": "🌸",
    "name": "Vanda tricolor",
    "localName": "Anggrek Vanda Tricolor / Vanda Merapi",
    "scientificName": "Vanda tricolor var. suavis",
    "type": "Flora",
    "category": "Orchid / Epiphyte",
    "iucn": {
      "code": "VU",
      "label": "Vulnerable",
      "icon": "🟡",
      "riskLevel": "Moderate",
    },
    "hero": {
      "title": "TRICOLOR VANDA",
      "statusText": "Vulnerable",
      "tagline": "The fragrant survivor of volcanic slopes.",
      "summary": "A stunning epiphytic orchid famous for its large, fragrant flowers and its resilience in volcanic environments like Mount Merapi.",
      "keyFacts": [
        { "label": "Estimated Population", "value": "Decreasing in the wild" },
        { "label": "Distribution", "value": "Java & Bali (Indonesia)" },
        { "label": "Population Trend", "value": "Decreasing" },
        { "label": "Extinction Risk Level", "value": "Moderate" },
      ],
    },
    "snapshot": [
      { "label": "Category", "value": "Plant (Epiphytic Orchid)" },
      { "label": "Scientific Name", "value": "Vanda tricolor" },
      { "label": "Common Name", "value": "Vanda Merapi / Tricolor Vanda" },
      { "label": "Habitat", "value": "Montane forests & volcanic slopes" },
      { "label": "Geographic Range", "value": "Java, Bali, and parts of Laos" },
      { "label": "Bloom Time", "value": "Multiple times a year" },
      { "label": "Ecological Role", "value": "Epiphytic biodiversity support" },
    ],
    "story": {
      "title": "Beauty Born from Fire",
      "paragraphs": [
        "Vanda tricolor is a symbol of resilience, often found growing on trees in the volcanic soil zones of Central Java.",
        "Its flowers are highly prized for their intricate patterns of purple, yellow, and white, and their intense, sweet fragrance.",
        "Over-collection for the commercial orchid trade and habitat destruction from volcanic eruptions/logging have made it vulnerable.",
      ],
    },
    "threats": [
      { "icon": "👐", "title": "Over-collection", "description": "Illegal harvesting from the wild for ornamental plant collectors." },
      { "icon": "🌋", "title": "Natural Disasters", "description": "Volcanic eruptions destroying local micro-habitats." },
      { "icon": "🪓", "title": "Deforestation", "description": "Loss of host trees due to land clearing." },
      { "icon": "🌡️", "title": "Climate Sensitivity", "description": "Changes in humidity affecting seed germination." },
    ],
    "ecologicalRole": {
      "title": "Ecological Role",
      "intro": "As an epiphyte, it contributes to the complex canopy ecosystem.",
      "cascade": {
        "steps": [
          "Provides habitat for canopy insects",
          "Contributes to moisture retention in the canopy",
          "Supports specialized pollinators (bees and moths)",
          "Enriches forest vertical biodiversity",
        ],
        "note": "Orchids are often 'bio-indicators'; their health reflects the health of the entire forest moisture cycle.",
      },
    },
    "habitat": {
      "title": "Habitat",
      "intro": "High humidity montane environments.",
      "types": [
        "Montane forests (700–1,600 m)",
        "Volcanic slopes with high organic matter",
        "Large host trees (epiphytic)",
      ],
      "requirement": "High humidity, bright indirect light, and specific fungal symbionts for seeds.",
      "ecosystemType": "Montane Rain Forest",
    },
    "extinctionImpact": {
      "title": "If Vanda Tricolor Declines…",
      "points": [
        "Loss of a key genetic resource for orchid hybridization",
        "Disruption of specialized insect-pollinator relationships",
        "Loss of a cultural icon of Javanese botanical heritage",
      ],
    },
    "statusScale": {
      "text": "Least Concern ─ 🟡 Vulnerable ─ Endangered ─ Critically Endangered ─ Extinct",
    },
  },
  {
    "id": "eurycoma-longifolia",
    "emoji": "🌿",
    "name": "Eurycoma longifolia",
    "localName": "Pasak Bumi / Tongkat Ali",
    "scientificName": "Eurycoma longifolia",
    "type": "Flora",
    "category": "Flowering Plant / Shrub",
    "iucn": {
      "code": "LC",
      "label": "Least Concern (Regionally Threatened)",
      "icon": "🟢",
      "riskLevel": "Low to Moderate",
    },
    "hero": {
      "title": "PASAK BUMI",
      "statusText": "Increasingly Rare",
      "tagline": "The 'Earth's Stake' with legendary medicinal power.",
      "summary": "A slender shrub-tree famous throughout Southeast Asia for its medicinal roots, leading to massive wild harvesting.",
      "keyFacts": [
        { "label": "Estimated Population", "value": "Common but thinning in wild" },
        { "label": "Distribution", "value": "Sumatra, Kalimantan (Indonesia), Malaysia" },
        { "label": "Population Trend", "value": "Decreasing in accessible areas" },
        { "label": "Extinction Risk Level", "value": "Moderate (Harvesting pressure)" },
      ],
    },
    "snapshot": [
      { "label": "Category", "value": "Plant (Medicinal Shrub)" },
      { "label": "Scientific Name", "value": "Eurycoma longifolia" },
      { "label": "Common Name", "value": "Pasak Bumi / Tongkat Ali" },
      { "label": "Habitat", "value": "Lowland forest understory" },
      { "label": "Geographic Range", "value": "Southeast Asia" },
      { "label": "Height", "value": "Up to 10 m (slender)" },
      { "label": "Ecological Role", "value": "Understory component" },
    ],
    "story": {
      "title": "The Root of the Matter",
      "paragraphs": [
        "Pasak Bumi is revered in traditional medicine for its ability to boost energy and health, specifically from its long, deep taproot.",
        "Because the medicinal part is the root, the entire plant must be destroyed to harvest it, making wild populations very fragile.",
        "It is slow-growing, and over-harvesting in Kalimantan and Sumatra is making it harder to find in the wild.",
      ],
    },
    "threats": [
      { "icon": "⛏️", "title": "Destructive Harvesting", "description": "Uprooting whole plants for medicinal root trade." },
      { "icon": "🚜", "title": "Land Conversion", "description": "Loss of lowland rainforests to plantations." },
      { "icon": "📉", "title": "Slow Growth", "description": "Takes many years to reach maturity and produce seeds." },
      { "icon": "📦", "title": "Commercial Demand", "description": "High international demand for herbal supplements." },
    ],
    "ecologicalRole": {
      "title": "Ecological Role",
      "intro": "A steady presence in the shady understory of tropical forests.",
      "cascade": {
        "steps": [
          "Provides food for small forest herbivores",
          "Stabilizes soil with its deep taproot",
          "Contributes to understory plant diversity",
          "Supports local insect pollinators",
        ],
        "note": "The removal of these plants alters the structure of the forest floor.",
      },
    },
    "habitat": {
      "title": "Habitat",
      "intro": "Well-drained soils in lowland rainforests.",
      "types": [
        "Lowland tropical forests",
        "Secondary forests (occasionally)",
        "Acidic, sandy soils",
      ],
      "requirement": "Deep soil for its long taproot and shade from the canopy.",
      "ecosystemType": "Lowland Tropical Rainforest",
    },
    "extinctionImpact": {
      "title": "If Pasak Bumi Declines Further…",
      "points": [
        "Loss of a fundamental natural medicine source",
        "Economic impact on traditional gatherers",
        "Reduced resilience of the forest understory",
      ],
    },
    "statusScale": {
      "text": "🟢 Least Concern ─ Vulnerable ─ Endangered ─ Critically Endangered ─ Extinct",
    },
  },
  {
    "id": "dryobalanops-aromatica",
    "emoji": "🌳",
    "name": "Dryobalanops aromatica",
    "localName": "Pohon Kapur",
    "scientificName": "Dryobalanops aromatica",
    "type": "Flora",
    "category": "Dipterocarp / Giant Tree",
    "iucn": {
      "code": "VU",
      "label": "Vulnerable",
      "icon": "🟡",
      "riskLevel": "Moderate to High",
    },
    "hero": {
      "title": "SUMATRAN CAMPHOR",
      "statusText": "Vulnerable",
      "tagline": "The source of ancient camphor and the master of 'Crown Shyness'.",
      "summary": "A majestic giant of the rainforest that produces natural camphor crystals and displays a stunning canopy phenomenon where trees do not touch.",
      "keyFacts": [
        { "label": "Height", "value": "Up to 65 - 75 m" },
        { "label": "Distribution", "value": "Sumatra, Riau Islands, Kalimantan" },
        { "label": "Population Trend", "value": "Decreasing" },
        { "label": "Extinction Risk Level", "value": "Moderate" },
      ],
    },
    "snapshot": [
      { "label": "Category", "value": "Plant (Dipterocarp Tree)" },
      { "label": "Scientific Name", "value": "Dryobalanops aromatica" },
      { "label": "Common Name", "value": "Pohon Kapur / Camphor Tree" },
      { "label": "Habitat", "value": "Lowland mixed dipterocarp forest" },
      { "label": "Geographic Range", "value": "Sumatra & Borneo" },
      { "label": "Uses", "value": "Timber, Camphor oil/crystals" },
      { "label": "Ecological Role", "value": "Apex canopy species" },
    ],
    "story": {
      "title": "The Scent of History",
      "paragraphs": [
        "For centuries, traders from Arabia and China came to Sumatra specifically for the camphor of this tree, used in medicine and embalming.",
        "The Kapur tree is famous for 'crown shyness,' where the topmost branches avoid touching each other, creating a beautiful jigsaw pattern in the sky.",
        "Today, it is threatened by the logging industry due to its high-quality timber and the clearing of forests for oil palm.",
      ],
    },
    "threats": [
      { "icon": "🪵", "title": "Logging", "description": "Highly valued for heavy construction and furniture." },
      { "icon": "🌴", "title": "Land Conversion", "description": "Vast areas of its habitat are being converted into monoculture plantations." },
      { "icon": "🧪", "title": "Exploitative Tapping", "description": "Historical damage from harvesting camphor crystals." },
      { "icon": "⏳", "title": "Slow Regeneration", "description": "Seeds have no dormancy and must germinate immediately or die." },
    ],
    "ecologicalRole": {
      "title": "Ecological Role",
      "intro": "A 'mother tree' that defines the structure of the Sumatran rainforest.",
      "cascade": {
        "steps": [
          "Provides a massive carbon sink due to its size",
          "Offers nesting sites for Hornbills and other large birds",
          "Supports epiphytes and canopy-dwelling organisms",
          "Regulates microclimates beneath its vast canopy",
        ],
        "note": "When a giant Kapur tree falls, it creates a gap that drives the cycle of forest renewal.",
      },
    },
    "habitat": {
      "title": "Habitat",
      "intro": "Dominates lowland forests on well-drained soils.",
      "types": [
        "Lowland dipterocarp forests",
        "Coastal hills (occasionally)",
        "Deep yellow-red podzolic soils",
      ],
      "requirement": "Stable, high-rainfall environments with no long dry season.",
      "ecosystemType": "Lowland Tropical Rainforest",
    },
    "extinctionImpact": {
      "title": "If the Kapur Tree Vanishes…",
      "points": [
        "Loss of massive carbon sequestration capacity",
        "Collapse of nesting sites for endangered birds like Hornbills",
        "Disappearance of the 'crown shyness' phenomenon in the wild",
      ],
    },
    "statusScale": {
      "text": "Least Concern ─ 🟡 Vulnerable ─ Endangered ─ Critically Endangered ─ Extinct",
    },
  },
  {
    "id": "pterocarpus-indicus",
    "emoji": "🌳",
    "name": "Pterocarpus indicus",
    "localName": "Pohon Narra / Angsana",
    "scientificName": "Pterocarpus indicus",
    "type": "Flora",
    "category": "Legume / Hardwood Tree",
    "iucn": {
      "code": "VU",
      "label": "Vulnerable",
      "icon": "🟡",
      "riskLevel": "Moderate",
    },
    "hero": {
      "title": "ANGSANA (NARRA)",
      "statusText": "Vulnerable",
      "tagline": "The golden-flowered hardwood of the Southeast Asian islands.",
      "summary": "A grand deciduous tree known for its fragrant yellow flowers and high-quality 'rosewood' timber, now rare in the wild due to exploitation.",
      "keyFacts": [
        { "label": "Estimated Mature Individuals", "value": "Decreasing in wild" },
        { "label": "Distribution", "value": "Indonesia, Philippines, PNG" },
        { "label": "Population Trend", "value": "Decreasing" },
        { "label": "Extinction Risk Level", "value": "Moderate" },
      ],
    },
    "snapshot": [
      { "label": "Category", "value": "Plant (Hardwood Tree)" },
      { "label": "Scientific Name", "value": "Pterocarpus indicus" },
      { "label": "Common Name", "value": "Angsana / Narra / Pashu Padauk" },
      { "label": "Habitat", "value": "Lowland rain forest & coastal areas" },
      { "label": "Geographic Range", "value": "Southeast Asia & Pacific Islands" },
      { "label": "Height", "value": "Up to 30–40 m" },
      { "label": "Ecological Role", "value": "Nitrogen fixation and soil health" },
    ],
    "story": {
      "title": "The Golden Rain",
      "paragraphs": [
        "Angsana is famous for its sudden, spectacular blooming—covering the ground in a carpet of fragrant golden petals overnight.",
        "Its wood is world-renowned for its durability and beautiful grain, often called 'New Guinea Rosewood'.",
        "Because of its value, wild stands have been heavily logged, and it is now mostly found as an ornamental city tree rather than in its natural forest home.",
      ],
    },
    "threats": [
      { "icon": "🪓", "title": "Over-logging", "description": "Illegal trade for luxury furniture and musical instruments." },
      { "icon": "🍄", "title": "Fusarium Wilt", "description": "A fungal disease that has devastated urban and wild populations." },
      { "icon": "🚜", "title": "Habitat Loss", "description": "Coastal and lowland forest clearing." },
      { "icon": "🌊", "title": "Coastal Development", "description": "Loss of riverine and beach-side populations." },
    ],
    "ecologicalRole": {
      "title": "Ecological Role",
      "intro": "A nitrogen-fixing giant that enriches the soil around it.",
      "cascade": {
        "steps": [
          "Fixes atmospheric nitrogen, improving soil fertility",
          "Provides habitat for diverse orchids and ferns",
          "Offers food for various bees and nectar-feeding insects",
          "Acts as a windbreak in coastal and riverside areas",
        ],
        "note": "As a legume, it is essential for the nutrient cycle of the surrounding forest.",
      },
    },
    "habitat": {
      "title": "Habitat",
      "intro": "Thrives in low-lying areas with plenty of water.",
      "types": [
        "Lowland tropical rainforests",
        "Riverbanks and coastal fringes",
        "Open forests and secondary growth",
      ],
      "requirement": "Deep, fertile soil and high rainfall.",
      "ecosystemType": "Lowland & Coastal Forest",
    },
    "extinctionImpact": {
      "title": "If the Angsana Tree Declines…",
      "points": [
        "Loss of a natural soil-fertilizing mechanism",
        "Decline in bee populations dependent on its flowers",
        "Collapse of a sustainable source of high-quality timber",
      ],
    },
    "statusScale": {
      "text": "Least Concern ─ 🟡 Vulnerable ─ Endangered ─ Critically Endangered ─ Extinct",
    },
  },
  {
    "id": "nepenthes-rajah",
    "emoji": "🪴",
    "name": "Nepenthes rajah",
    "localName": "Kantong Semar Raksasa",
    "scientificName": "Nepenthes rajah",
    "type": "Flora",
    "category": "Carnivorous Plant / Pitcher Plant",
    "iucn": {
      "code": "EN",
      "label": "Endangered",
      "icon": "🔴",
      "riskLevel": "High",
    },
    "hero": {
      "title": "RAJAH PITCHER PLANT",
      "statusText": "Endangered",
      "tagline": "The king of carnivorous plants, large enough to trap small mammals.",
      "summary": "An extraordinary pitcher plant from Borneo that has evolved a mutualistic relationship with mountain shrews.",
      "keyFacts": [
        { "label": "Pitcher Volume", "value": "Up to 3.5 Liters" },
        { "label": "Distribution", "value": "Mount Kinabalu & Mt. Tambuyukon" },
        { "label": "Population Trend", "value": "Stable but very restricted" },
        { "label": "Extinction Risk Level", "value": "High (Localized)" },
      ],
    },
    "snapshot": [
      { "label": "Category", "value": "Plant (Carnivorous)" },
      { "label": "Scientific Name", "value": "Nepenthes rajah" },
      { "label": "Common Name", "value": "Kantong Semar Raksasa / Rajah Pitcher" },
      { "label": "Habitat", "value": "High-altitude ultramafic soils" },
      { "label": "Geographic Range", "value": "Borneo (Sabah area)" },
      { "label": "Diet", "value": "Insects, occasionally small vertebrates, and shrew droppings" },
      { "label": "Ecological Role", "value": "Specialized nutrient recycler" },
    ],
    "story": {
      "title": "The Shrew's Toilet",
      "paragraphs": [
        "Nepenthes rajah produces massive pitchers that can hold over 3 liters of liquid. While it can catch insects, its main source of nitrogen is quite unusual.",
        "It has a relationship with mountain shrews: the plant provides nectar on its lid, and while the shrew feeds, it defecates into the pitcher, 'fertilizing' the plant.",
        "Because it only grows in very specific soil types at high altitudes, any change in climate or habitat could be fatal for the species.",
      ],
    },
    "threats": [
      { "icon": "🌡️", "title": "Climate Change", "description": "Rising temperatures pushing it out of its narrow altitude band." },
      { "icon": "🚶", "title": "Illegal Poaching", "description": "Highly sought after by carnivorous plant collectors." },
      { "icon": "🔥", "title": "Forest Fires", "description": "Increased fire risk during El Niño events." },
      { "icon": "📉", "title": "Habitat Restriction", "description": "Grows only on specific ultramafic (metal-rich) soils." },
    ],
    "ecologicalRole": {
      "title": "Ecological Role",
      "intro": "A central figure in the high-altitude nutrient cycle of Borneo.",
      "cascade": {
        "steps": [
          "Provides a food source (nectar) for small mammals",
          "Hosts a unique community of 'infauana' (insects living in the pitcher)",
          "Recycles nitrogen in nutrient-poor soils",
          "Acts as a flagship for montane biodiversity conservation",
        ],
        "note": "The relationship with shrews is one of the most complex plant-animal interactions known.",
      },
    },
    "habitat": {
      "title": "Habitat",
      "intro": "Open, mossy sites on ridges and peaks.",
      "types": [
        "Sub-alpine shrubland (1,500–2,650 m)",
        "Ultramafic soils (rich in magnesium/iron)",
        "High-humidity cloud forests",
      ],
      "requirement": "Seepage of ground water and very specific soil chemistry.",
      "ecosystemType": "Montane Mossy Forest",
    },
    "extinctionImpact": {
      "title": "If the Rajah Pitcher Plant Vanishes…",
      "points": [
        "Loss of a unique mutualistic relationship with mountain mammals",
        "Decline of specialized insect species that live only in its pitchers",
        "Loss of a biological wonder of the evolutionary world",
      ],
    },
    "statusScale": {
      "text": "Least Concern ─ Vulnerable ─ 🔴 Endangered ─ Critically Endangered ─ Extinct",
    },
  },

];
