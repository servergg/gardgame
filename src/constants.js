const RANK_ALGORITHM_LAMBDA = 3.6;

const RANKS = [
    {
        name: "C",
        modifiers: {
            primary: [4, 3],
            secondary: [3, 2],
            latter: [2, 1, 0]
        }
    },
    {
        name: "B",
        modifiers: {
            primary: [6, 5],
            secondary: [5, 4, 3],
            latter: [3, 2]
        }
    },
    {
        name: "A",
        modifiers: {
            primary: [8, 7],
            secondary: [6, 5],
            latter: [4, 3]
        }
    },
    {
        name: "S",
        modifiers: {
            primary: [9],
            secondary: [7, 6],
            latter: [5, 4]
        }
    },
];

const STATS = {
    STR: "STR",
    DEX: "DEX",
    CON: "CON",
    WIS: "WIS",
    INT: "INT",
    CHA: "CHA"
};

const ELEMENTS = [
    {
        name: "fire", wins: [1], preffixes: [
            "Passionate",
            "Fiery",
            "Intense",
            "Enthusiastic",
            "Dynamic",
            "Energetic",
            "Impulsive",
            "Empassioned",
            "Zealous",
            "Radiant"
        ]
    },
    {
        name: "earth", wins: [2], preffixes: [
            "Grounded",
            "Practical",
            "Logical",
            "Analytical",
            "Methodical",
            "Organized",
            "Structured",
            "Pragmatic",
            "Systematic",
            "Thoughtful"
        ]
    },
    {
        name: "water", wins: [0], preffixes: [
            "Serene",
            "Tranquil",
            "Mystical",
            "Reflective",
            "Intuitive",
            "Caring",
            "Harmonious",
            "Ethereal",
            "Sublime",
            "Divine"
        ]
    }
];

const { STR, DEX, CON, WIS, INT, CHA } = STATS;

const BUILDS = [
    {
        name: "Wizard",
        modifiers: {
            primary: [INT],
            secondary: [],
            latter: [WIS, DEX, CHA, STR, CON],
        }
    },
    {
        name: "Fighter",
        modifiers: {
            primary: [STR],
            secondary: [],
            latter: [CON, DEX, CHA, WIS, INT],
        }
    },
    {
        name: "Cleric",
        modifiers: {
            primary: [CHA],
            secondary: [],
            latter: [DEX, STR, CON, DEX, INT],
        }
    },
    {
        name: "Rogue",
        modifiers: {
            primary: [DEX],
            secondary: [],
            latter: [INT, WIS, CHA, STR, CON],
        }
    },
    {
        name: "Ranger",
        modifiers: {
            primary: [WIS],
            secondary: [],
            latter: [DEX, STR, CON, INT, CHA],
        }
    },
    {
        name: "Guardian",
        modifiers: {
            primary: [CON],
            secondary: [],
            latter: [DEX, STR, WIS, INT, CHA],
        }
    }
];

const PROFILES = [
    183067684324376576,
    450771395274866689,
    237020475300118528,
];

const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;
const DREAMSTUDIO_API_KEY = process.env.DREAMSTUDIO_API_KEY;

module.exports = {
    RANK_ALGORITHM_LAMBDA, RANKS, PROFILES, BUILDS, STATS, ELEMENTS, TOKEN, CLIENT_ID, GUILD_ID, DREAMSTUDIO_API_KEY
}