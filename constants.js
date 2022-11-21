export const RANK_ALGORITHM_LAMBDA = 3.6;
export const RANK = [
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
            secondary: [4, 3],
            standard: [3, 2],
            last: [1],
        },
    },
    {
        name: "B",
        modifiers: {
            primary: [7, 6], 
            secondary: [6, 5],
            standard: [4, 3],
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
export const STATS = ["STR", "DEX", "CON", "WIS", "INT", "CHA"];
export const ELEMENTS = [
    { name: "fire", wins: [1, 3] },
    { name: "earth", wins: [2, 4] },
    { name: "water", wins: [0, 3] },
    { name: "wind", wins: [4, 1] },
    { name: "lighting", wins: [0, 2] }
];
export const BUILDS = [
    {
        name: "mage",
        modifiers: {
           primary: ["INT"],
           secondary: ["WIS"],
           last: ["STR", "CON"], 
        }
    },
    // {
    //     name: "warrior",
    //     statModifiers: buildModifier({ STR: 5, CON: 5, WIS: -5, INT: -5 })
    // },
    // {
    //     name: "cleric",
    //     statModifiers: buildModifier({ CON: 5, CHA: 5, DEX: -5, INT: -5 })
    // },
    // {
    //     name: "rogue",
    //     statModifiers: buildModifier({ DEX: 5, CHA: 5, STR: -5, CON: -5 })
    // },
    // {
    //     name: "ranger",
    //     statModifiers: buildModifier({ DEX: 5, WIS: 5, INT: -5, CHA: -5 })
    // },
    // {
    //     name: "spellblade",
    //     statModifiers: buildModifier({ STR: 5, INT: 5, DEX: -5, CHA: -5 })
    // },
    // {
    //     name: "warlock",
    //     statModifiers: buildModifier({ INT: 5, CHA: 5, DEX: -5, STR: -5 })
    // },
    // {
    //     name: "trickster",
    //     statModifiers: buildModifier({ DEX: 5, INT: 5, STR: -5, CON: -5 })
    // },
    // {
    //     name: "paladin",
    //     statModifiers: buildModifier({ STR: 5, CON: 5, DEX: -5, INT: -5 })
    // },
    // {
    //     name: "swashbuckler",
    //     statModifiers: buildModifier({ STR: 5, DEX: 5, CON: -5, WIS: -5 })
    // },
    // {
    //     name: "druid",
    //     statModifiers: buildModifier({ DEX: 5, INT: 5, STR: -5, CHA: -5 })
    // },
    // {
    //     name: "shaman",
    //     statModifiers: buildModifier({ WIS: 5, CHA: 5, STR: -5, INT: -5 })
    // },
    // {
    //     name: "barbarian",
    //     statModifiers: buildModifier({ STR: 5, DEX: 5, INT: -5, CHA: -5 })
    // },
    // {
    //     name: "inquisitor",
    //     statModifiers: buildModifier({ DEX: 5, CHA: 5, WIS: -5, INT: -5 })
    // },
    // {
    //     name: "ninja",
    //     statModifiers: buildModifier({ DEX: 5, WIS: 5, STR: -5, CON: -5 })
    // },
];

export const NAMES = [
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
