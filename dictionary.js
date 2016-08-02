
app.factory('NounList', function($filter) {

      return nouns.nounList;
});

var nouns = {
  description: "A list of English nouns.",
  nounList:
    [ "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
      "Cabot",
      "Catholic",
      "Chihuahua",
      "Easter",
      "Frenchman",
      "Lowry",
      "Pharaoh",
      "Pueblo",
      "Pullman",
      "Rodeo",
      "Sister",
      "Snead",
      "Syrah",
      "abbey",
      "abduction",
      "absence",
      "absorption",
      "abstinence",
      "absurdity",
      "abundance",
      "abuser",
      "acceptance",
      "accessibe",
      "accommodation",
      "accomplice",
      "accountable",
      "account",
      "accreditation",
      "accuracy",
      "acquiescence",
      "acreage",
      "actress",
      "actual",
      "adage",
      "adaptation",
      "adherence",
      "adjustment",
      "adoption",
      "adultery",
      "advancement",
      "advert",
      "advertisement",
      "advertising",
      "advice",
      "aesthetics",
      "affinity",
      "aggression",
      "agriculture",
      "aircraft",
      "airtime",
      "allegation",
      "allegiance",
      "allegory",
      "allergy",
      "allies",
      "alligator",
      "allocation",
      "allotment",
      "altercation",
      "ambulance",
      "ammonia",
      "anatomy",
      "anemia",
      "ankle",
      "announcement",
      "annoyance",
      "annuity",
      "anomaly",
      "anthropology",
      "anxiety",
      "apartheid",
      "apologise",
      "apostle",
      "apparatus",
      "appeasement",
      "appellation",
      "appendix",
      "applause",
      "appointment",
      "appraisal",
      "archery",
      "archipelago",
      "architecture",
      "ardor",
      "armour",
      "arrears",
      "arrow",
      "artisan",
      "artistry",
      "ascent",
      "assembly",
      "assignment",
      "association",
      "asthma",
      "atheism",
      "attacker",
      "attraction",
      "attractiveness",
      "auspices",
      "authority",
      "avarice",
      "aversion",
      "aviation",
      "babble",
      "backlash",
      "baker",
      "ballet",
      "balls",
      "banjo",
      "baron",
      "barrier",
      "barrister",
      "bases",
      "basin",
      "basis",
      "battery",
      "battle",
      "bedtime",
      "beginner",
      "begun",
      "bend",
      "bicycle",
      "bill",
      "bingo",
      "biography",
      "biology",
      "birthplace",
      "blackberry",
      "blather",
      "blossom",
      "boardroom",
      "boast",
      "bodyguard",
      "boldness",
      "bomber",
      "bondage",
      "bond",
      "bones",
      "bonus",
      "bookmark",
      "boomer",
      "booty",
      "bounds",
      "bowl",
      "brainstorm",
      "breadth",
      "breaker",
      "brewer",
      "brightness",
      "broccoli",
      "broth",
      "brotherhood",
      "browse",
      "brunch",
      "brunt",
      "build",
      "bullion",
      "bureaucracy",
      "burglary",
      "buyout",
      "cabal",
      "cabbage",
      "calamity",
      "campaign",
      "canonization",
      "captaincy",
      "carcass",
      "carrier",
      "cartridge",
      "cassette",
      "catfish",
      "caught",
      "celebrity",
      "cemetery",
      "certainty",
      "certification",
      "charade",
      "chasm",
      "check-in",
      "cheerleader",
      "cheesecake",
      "chemotherapy",
      "chili",
      "china",
      "chivalry",
      "cholera",
      "cilantro",
      "circus",
      "civilisation",
      "civility",
      "clearance",
      "clear",
      "clerk",
      "climber",
      "closeness",
      "cloth",
      "clutches",
      "coaster",
      "coconut",
      "code",
      "collaborator",
      "colleague",
      "college",
      "collision",
      "colors",
      "combustion",
      "comedian",
      "comer",
      "commander",
      "commemoration",
      "commenter",
      "commissioner",
      "commune",
      "competition",
      "completeness",
      "complexity",
      "compute",
      "comrade",
      "concur",
      "condominium",
      "conduit",
      "confidant",
      "configuration",
      "confiscation",
      "conflagration",
      "conflict",
      "consist",
      "consistency",
      "consolidation",
      "conspiracy",
      "constable",
      "consul",
      "consultancy",
      "contentment",
      "contents",
      "contractor",
      "conversation",
      "cornerstone",
      "corpus",
      "correlation",
      "councilman",
      "counselor",
      "countdown",
      "countryman",
      "coverage",
      "cover",
      "coyote",
      "cracker",
      "creator",
      "criminality",
      "crocodile",
      "crop",
      "cross-examination",
      "crossover",
      "crossroads",
      "culprit",
      "cumin",
      "curator",
      "curfew",
      "cursor",
      "custard",
      "cutter",
      "cyclist",
      "cyclone",
      "cylinder",
      "cynicism",
      "daddy",
      "damsel",
      "darkness",
      "dawn",
      "daybreak",
      "deal",
      "dedication",
      "deduction",
      "defection",
      "deference",
      "deficiency",
      "definition",
      "deflation",
      "degeneration",
      "delegation",
      "delicacy",
      "delirium",
      "deliverance",
      "demeanor",
      "demon",
      "demonstration",
      "denomination",
      "dentist",
      "departure",
      "depletion",
      "depression",
      "designation",
      "despotism",
      "detention",
      "developer",
      "devolution",
      "dexterity",
      "diagnosis",
      "dialect",
      "differentiation",
      "digger",
      "digress",
      "dioxide",
      "diploma",
      "disability",
      "disarmament",
      "discord",
      "discovery",
      "dishonesty",
      "dismissal",
      "disobedience",
      "dispatcher",
      "disservice",
      "distribution",
      "distributor",
      "diver",
      "diversity",
      "dock",
      "dollar",
      "dominance",
      "domination",
      "dominion",
      "donkey",
      "doorstep",
      "doorway",
      "dossier",
      "downside",
      "draft",
      "drank",
      "drill",
      "driver",
      "drum",
      "drunkenness",
      "duchess",
      "duck",
      "dugout",
      "dumps",
      "dwell",
      "dynamics",
      "eagerness",
      "earnestness",
      "earnings",
      "eater",
      "editor",
      "effectiveness",
      "electricity",
      "elements",
      "eloquence",
      "emancipation",
      "embodiment",
      "embroidery",
      "emperor",
      "employment",
      "encampment",
      "enclosure",
      "encouragement",
      "endangerment",
      "enlightenment",
      "enthusiasm",
      "environment",
      "environs",
      "envoy",
      "epilepsy",
      "equation",
      "equator",
      "error",
      "espionage",
      "estimation",
      "euthanasia",
      "evacuation",
      "exaggeration",
      "examination",
      "exclamation",
      "expediency",
      "exploitation",
      "extinction",
      "eyewitness",
      "falls",
      "fascism",
      "fastball",
      "feces",
      "feedback",
      "ferocity",
      "fertilization",
      "fetish",
      "finale",
      "fire",
      "fix",
      "flash",
      "flask",
      "flora",
      "fluke",
      "folklore",
      "follower",
      "foothold",
      "foot",
      "forefinger",
      "forefront",
      "forgiveness",
      "formality",
      "formation",
      "formula",
      "foyer",
      "fragmentation",
      "framework",
      "fraud",
      "freestyle",
      "frequency",
      "friendliness",
      "fries",
      "frigate",
      "fulfillment",
      "function",
      "functionality",
      "fundraiser",
      "fusion",
      "futility",
      "gallantry",
      "gallery",
      "genesis",
      "genitals",
      "girlfriend",
      "glamour",
      "glitter",
      "glucose",
      "google",
      "grandeur",
      "grapple",
      "greens",
      "gridlock",
      "grocer",
      "groundwork",
      "group",
      "gunman",
      "gusto",
      "habitation",
      "hacker",
      "hallway",
      "hamburger",
      "hammock",
      "handle",
      "hands",
      "handshake",
      "happiness",
      "hardship",
      "headcount",
      "header",
      "headquarters",
      "heads",
      "headset",
      "hearth",
      "hearts",
      "heath",
      "hegemony",
      "height",
      "hello",
      "helper",
      "help",
      "helplessness",
      "hierarchy",
      "hoard",
      "hockey",
      "homeland",
      "homer",
      "honesty",
      "horror",
      "horseman",
      "hostility",
      "house",
      "humility",
      "hurricane",
      "iceberg",
      "idiot",
      "ignition",
      "illness",
      "illustration",
      "illustrator",
      "immunity",
      "immunization",
      "imperialism",
      "imprisonment",
      "inaccuracy",
      "inaction",
      "inactivity",
      "inauguration",
      "indecency",
      "indicator",
      "inevitability",
      "infamy",
      "infiltration",
      "influx",
      "iniquity",
      "innocence",
      "innovation",
      "insanity",
      "inspiration",
      "instruction",
      "instructor",
      "insurer",
      "interact",
      "intercession",
      "intercourse",
      "intermission",
      "interpretation",
      "intersection",
      "interval",
      "intolerance",
      "intruder",
      "invasion",
      "investment",
      "involvement",
      "irrigation",
      "iteration",
      "jenny",
      "jihad",
      "jog",
      "juggernaut",
      "juncture",
      "jurisprudence",
      "juror",
      "kangaroo",
      "kingdom",
      "knock",
      "laborer",
      "larceny",
      "laurels",
      "layout",
      "leadership",
      "lease",
      "legislation",
      "leopard",
      "liberation",
      "licence",
      "lifeblood",
      "lifeline",
      "ligament",
      "light",
      "likeness",
      "line-up",
      "lineage",
      "liner",
      "lineup",
      "liquidation",
      "listener",
      "literature",
      "litigation",
      "litre",
      "loath",
      "locality",
      "lodge",
      "logic",
      "longevity",
      "lookout",
      "lordship",
      "lustre",
      "ma\"am",
      "machinery",
      "madness",
      "magnificence",
      "mahogany",
      "mail",
      "mainframe",
      "maintenance",
      "majority",
      "manga",
      "mango",
      "manifesto",
      "mantra",
      "manufacturer",
      "maple",
      "martin",
      "martyrdom",
      "mathematician",
      "matrix",
      "matron",
      "mayhem",
      "mayor",
      "means",
      "meantime",
      "measurement",
      "mechanics",
      "mediator",
      "medics",
      "melodrama",
      "memory",
      "mentality",
      "metaphysics",
      "method",
      "metre",
      "miner",
      "mirth",
      "misconception",
      "misery",
      "mishap",
      "misunderstand",
      "mobility",
      "molasses",
      "momentum",
      "monarchy",
      "monument",
      "morale",
      "mortality",
      "motto",
      "mouthful",
      "mouthpiece",
      "mover",
      "movie",
      "mow",
      "murderer",
      "musician",
      "mutation",
      "mythology",
      "narration",
      "narrator",
      "nationality",
      "negligence",
      "neighborhood",
      "neighbour",
      "nervousness",
      "network",
      "nexus",
      "nightmare",
      "nobility",
      "nobody",
      "noodle",
      "normalcy",
      "notification",
      "nourishment",
      "novella",
      "nucleus",
      "nuisance",
      "nursery",
      "nutrition",
      "nylon",
      "oasis",
      "obscenity",
      "obscurity",
      "observer",
      "offense",
      "onslaught",
      "operation",
      "opportunity",
      "opposition",
      "oracle",
      "orchestra",
      "organisation",
      "organizer",
      "orientation",
      "originality",
      "ounce",
      "outage",
      "outcome",
      "outdoors",
      "outfield",
      "outing",
      "outpost",
      "outset",
      "overseer",
      "owner",
      "oxygen",
      "pair",
      "panther",
      "paradox",
      "parliament",
      "parsley",
      "parson",
      "passenger",
      "pasta",
      "patchwork",
      "pathos",
      "patriotism",
      "pendulum",
      "penguin",
      "permission",
      "persona",
      "perusal",
      "pessimism",
      "peter",
      "philosopher",
      "phosphorus",
      "phrase",
      "physique",
      "piles",
      "plateau",
      "play",
      "plaza",
      "plethora",
      "plurality",
      "pneumonia",
      "pointer",
      "poker",
      "policeman",
      "polling",
      "polygamy",
      "poster",
      "posterity",
      "post",
      "postponement",
      "potassium",
      "pottery",
      "poultry",
      "pound",
      "pragmatism",
      "precedence",
      "precinct",
      "preoccupation",
      "pretense",
      "priesthood",
      "prisoner",
      "privacy",
      "probation",
      "proceeding",
      "process",
      "progression",
      "projection",
      "prominence",
      "propensity",
      "prophecy",
      "prorogation",
      "prospectus",
      "protein",
      "prototype",
      "providence",
      "provider",
      "provocation",
      "proximity",
      "puberty",
      "publicist",
      "publicity",
      "publisher",
      "pundit",
      "quantity",
      "quart",
      "quilt",
      "quorum",
      "racism",
      "radiance",
      "ralph",
      "rancher",
      "ranger",
      "rapidity",
      "rapport",
      "ratification",
      "rationality",
      "reaction",
      "reader",
      "reassurance",
      "rebirth",
      "receptor",
      "recipe",
      "recognition",
      "recourse",
      "recreation",
      "rector",
      "recurrence",
      "redemption",
      "redistribution",
      "redundancy",
      "refinery",
      "reformer",
      "refrigerator",
      "regularity",
      "regulator",
      "reinforcement",
      "reins",
      "reinstatement",
      "relativism",
      "relaxation",
      "rendition",
      "repayment",
      "repentance",
      "repertoire",
      "repository",
      "republic",
      "reputation",
      "resentment",
      "residency",
      "resignation",
      "restaurant",
      "resurgence",
      "retailer",
      "retention",
      "retirement",
      "reviewer",
      "riches",
      "righteousness",
      "roadblock",
      "robber",
      "rocks",
      "rubber",
      "runoff",
      "saloon",
      "salvation",
      "sarcasm",
      "saucer",
      "savior",
      "scarcity",
      "scenario",
      "scenery",
      "schism",
      "scholarship",
      "schoolboy",
      "schooner",
      "scissors",
      "scolding",
      "scooter",
      "scourge",
      "scrimmage",
      "scrum",
      "seat",
      "sediment",
      "seduction",
      "seeder",
      "seizure",
      "self-confidence",
      "self-control",
      "self-respect",
      "semicolon",
      "semiconductor",
      "semifinal",
      "senator",
      "serenity",
      "seriousness",
      "servitude",
      "sesame",
      "setup",
      "saw",
      "sharpness",
      "shavings",
      "shopp",
      "side",
      "simplicity",
      "simulation",
      "sinker",
      "skate",
      "sloth",
      "slugger",
      "snack",
      "snail",
      "snapshot",
      "snark",
      "soccer",
      "solemnity",
      "solicitation",
      "solitude",
      "somewhere",
      "sophistication",
      "sorcery",
      "souvenir",
      "spaghetti",
      "specification",
      "specimen",
      "specs",
      "spectacle",
      "spectre",
      "speculation",
      "sperm",
      "spoiler",
      "squad",
      "squid",
      "stage",
      "stagnation",
      "staircase",
      "stairway",
      "stamina",
      "standpoint",
      "standstill",
      "stanza",
      "statement",
      "stillness",
      "stimulus",
      "stocks",
      "stole",
      "stoppage",
      "storey",
      "storyteller",
      "stylus",
      "subcommittee",
      "subscription",
      "subsidy",
      "suburb",
      "success",
      "sufferer",
      "supposition",
      "suspension",
      "sweater",
      "sweepstakes",
      "swimmer",
      "syndrome",
      "synopsis",
      "syntax",
      "system",
      "tablespoon",
      "taker",
      "tavern",
      "technology",
      "telephony",
      "template",
      "tempo",
      "tendency",
      "tendon",
      "terrier",
      "terror",
      "terry",
      "theater",
      "theology",
      "therapy",
      "thicket",
      "thoroughfare",
      "threshold",
      "thriller",
      "thunderstorm",
      "ticker",
      "tiger",
      "tights",
      "to-day",
      "toss",
      "touchdown",
      "tourist",
      "tourney",
      "toxicity",
      "tracer",
      "tractor",
      "translation",
      "transmission",
      "transmitter",
      "trauma",
      "traveler",
      "treadmill",
      "trilogy",
      "trout",
      "tumor",
      "tune",
      "twenties",
      "tycoon",
      "tyrant",
      "ultimatum",
      "underdog",
      "underwear",
      "unhappiness",
      "unification",
      "university",
      "uprise",
      "vaccination",
      "validity",
      "vampire",
      "vanguard",
      "variation",
      "vegetation",
      "verification",
      "viability",
      "vicinity",
      "victory",
      "viewpoint",
      "villa",
      "vindication",
      "violation",
      "vista",
      "vocalist",
      "vogue",
      "volcano",
      "voltage",
      "vomit",
      "vulnerability",
      "waistcoat",
      "waitress",
      "wardrobe",
      "warmth",
      "watchdog",
      "wealth",
      "weariness",
      "werewolf",
      "whereabouts",
      "whisky",
      "whiteness",
      "widget",
      "width",
      "windfall",
      "wire",
      "witchcraft",
      "withholding",
      "womanhood",
      "words",
      "workman",
      "youngster",
      "indigo",
      "sage",
      "slate",
      "ruby",
      "gray",
      "ebony",
      "aqua",
      "azure",
      "emerald",
      "silver",
      "fuchsia",
      "coral",
      "sky",
      "topaz", 
      "red",
      "blue",
      "green",
      "yellow",
      "pink",
      "purple",
      "white",
      "pizza",
      "hippopotamus",
      "petrichor" ]
};