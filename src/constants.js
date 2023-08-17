const RANK_ALGORITHM_LAMBDA = 3.6;
const RANK = [
    {
        name: "D",
        modifiers: {
            primary: [4, 5], 
            secondary: [2, 3],
            least: [0, 1]
        }
    },
    {
        name: "C",
        modifiers: {
            primary: [5, 6], 
            secondary: [3, 4],
            least: [1, 2]
        }
    },
    {
        name: "B",
        modifiers: {
            primary: [6, 7], 
            secondary: [4, 5],
            least: [2, 3]
        }
    },
    {
        name: "A",
        modifiers: {
            primary: [7, 8], 
            secondary: [5, 6],
            least: [3, 4]
        }
    },
    {
        name: "S",
        modifiers: {
            primary: [9], 
            secondary: [6, 7],
            least: [4, 5]
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
    { name: "fire", wins: [1] },
    { name: "earth", wins: [2] },
    { name: "water", wins: [0] }
];

const { STR, DEX, CON, WIS, INT, CHA } = STATS;

const BUILDS = [
    {
        name: "Wizard",
        modifiers: {
           primary: [INT],
           secondary: [],
           least: [WIS, DEX, CHA, STR, CON], 
        }
    },
    {
        name: "Fighter",
        modifiers: {
            primary: [STR],
            secondary: [],
            least: [CON, DEX, CHA, WIS, INT], 
         }
     },
     {
        name: "Cleric",
        modifiers: {
            primary: [CHA],
            secondary: [],
            least: [DEX, STR, CON, DEX, INT], 
         }
     },
    {
        name: "Rogue",
        modifiers: {
            primary: [DEX],
            secondary: [],
            least: [INT, WIS, CHA, STR, CON], 
         }
     },
    {
        name: "Ranger",
        modifiers: {
            primary: [WIS],
            secondary: [],
            least: [DEX, STR, CON, INT, CHA], 
         }
    }
];

const PROFILES = [
    "anainthesky",
    "Bwana Plemos",
    "gabrieleiro",
    "Germano",
    "Katsuo",
    "Kriz",
    "Lino",
    "lucas",
    "Nham",
    "nobusada",
    "Schweins",
    "Trilles",
    "𝖇𝖗𝖊𝖓𝖔",
];

const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;
const DREAMSTUDIO_API_KEY = process.env.DREAMSTUDIO_API_KEY;

module.exports = {
    RANK_ALGORITHM_LAMBDA, RANK, PROFILES, BUILDS, STATS, ELEMENTS, TOKEN, CLIENT_ID, GUILD_ID, DREAMSTUDIO_API_KEY
}