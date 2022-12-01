const RANK_ALGORITHM_LAMBDA = 3.6;
const RANK = [
    {
        name: "D",
        modifiers: {
            primary: [3, 2], 
            secondary: [2, 1],
            standard: [1],
            last: [1, 0],
        },
    },
    {
        name: "C",
        modifiers: {
            primary: [5, 4], 
            secondary: [4, 3, 2],
            standard: [3, 2],
            last: [1],
        },
    },
    {
        name: "B",
        modifiers: {
            primary: [7, 6], 
            secondary: [6, 5, 4],
            standard: [4, 3, 2],
            last: [2, 1],
        },
    },
    {
        name: "A",
        modifiers: {
            primary: [8, 7], 
            secondary: [7, 6, 5],
            standard: [5, 4],
            last: [3, 2],
        },
    },
    {
        name: "S",
        modifiers: {
            primary: [9], 
            secondary: [8, 7],
            standard: [6, 5, 4], 
            last: [4, 3],
        },
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
    { name: "fire", wins: [1, 3] },
    { name: "earth", wins: [2, 4] },
    { name: "water", wins: [0, 3] },
    { name: "wind", wins: [4, 1] },
    { name: "lighting", wins: [0, 2] }
];

const { STR, DEX, CON, WIS, INT, CHA } = STATS;

const BUILDS = [
    {
        name: "mage",
        modifiers: {
           primary: [INT],
           secondary: [WIS],
           last: [STR, CON], 
        }
    },
    {
        name: "warrior",
        modifiers: {
            primary: [STR],
            secondary: [CON],
            last: [WIS, INT], 
         }
     },
     {
        name: "cleric",
        modifiers: {
            primary: [CHA],
            secondary: [CON],
            last: [DEX, INT], 
         }
     },
    {
        name: "rogue",
        modifiers: {
            primary: [DEX],
            secondary: [CHA],
            last: [STR, CON], 
         }
     },
    {
        name: "ranger",
        modifiers: {
            primary: [WIS],
            secondary: [DEX],
            last: [INT, CHA], 
         }
    },
    {
        name: "spellblade",
        modifiers: {
            primary: [INT],
            secondary: [STR],
            last: [DEX, CHA], 
         }
    },
    {
        name: "warlock",
        modifiers: {
            primary: [INT],
            secondary: [CHA],
            last: [DEX, STR], 
         }
    },
    {
        name: "trickster",
        modifiers: {
            primary: [DEX],
            secondary: [INT],
            last: [STR, CON], 
         }
    },
    {
        name: "paladin",
        modifiers: {
            primary: [CON],
            secondary: [STR],
            last: [DEX, INT], 
         }
    },
    {
        name: "swashbuckler",
        modifiers: {
            primary: [STR],
            secondary: [DEX],
            last: [CON, WIS], 
         }
    },
    {
        name: "druid",
        modifiers: {
            primary: [INT],
            secondary: [DEX],
            last: [STR, CHA], 
         }
    },
    {
        name: "shaman",
        modifiers: {
            primary: [WIS],
            secondary: [CHA],
            last: [STR, INT], 
         }
    },
    {
        name: "barbarian",
        modifiers: {
            primary: [STR],
            secondary: [DEX],
            last: [INT, CHA], 
         }
    },
    {
        name: "inquisitor",
        modifiers: {
            primary: [DEX],
            secondary: [CHA],
            last: [WIS, INT], 
         }
    },
    {
        name: "ninja",
        modifiers: {
            primary: [DEX],
            secondary: [WIS],
            last: [STR, CON], 
         }
    },
];

const PROFILES = [
    "Aeore (Ary Roberto)",
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
    ":skull::fire::skull:RenSound :skull::fire::skull:",
];

const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;
const DREAMSTUDIO_API_KEY = process.env.DREAMSTUDIO_API_KEY;

module.exports = {
    RANK_ALGORITHM_LAMBDA, RANK, PROFILES, BUILDS, STATS, ELEMENTS, TOKEN, CLIENT_ID, GUILD_ID, DREAMSTUDIO_API_KEY
}