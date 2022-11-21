import { average, range, buildModifier } from "./utils.js";

export const MAX_STAT_VALUE = 9;
export const MIN_STAT_VALUE = 0;
export const MEAN_STAT_VALUE = average(range(MIN_STAT_VALUE, MAX_STAT_VALUE));
export const STD_DEV_STAT_VALUE = 1.3;
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
        statModifiers: buildModifier({ WIS: 5, INT: 5, STR: -5, CON: -5 })
    },
    {
        name: "warrior",
        statModifiers: buildModifier({ STR: 5, CON: 5, WIS: -5, INT: -5 })
    },
    {
        name: "cleric",
        statModifiers: buildModifier({ CON: 5, CHA: 5, DEX: -5, INT: -5 })
    },
    {
        name: "rogue",
        statModifiers: buildModifier({ DEX: 5, CHA: 5, STR: -5, CON: -5 })
    },
    {
        name: "ranger",
        statModifiers: buildModifier({ DEX: 5, WIS: 5, INT: -5, CHA: -5 })
    },
    {
        name: "battle mage",
        statModifiers: buildModifier({ STR: 5, INT: 5, DEX: -5, CHA: -5 })
    },
    {
        name: "warlock",
        statModifiers: buildModifier({ INT: 5, CHA: 5, DEX: -5, STR: -5 })
    },
    {
        name: "trickster",
        statModifiers: buildModifier({ DEX: 5, INT: 5, STR: -5, CON: -5 })
    },
    {
        name: "paladin",
        statModifiers: buildModifier({ STR: 5, CON: 5, DEX: -5, INT: -5 })
    },
    {
        name: "swashbuckler",
        statModifiers: buildModifier({ STR: 5, DEX: 5, CON: -5, WIS: -5 })
    },
    {
        name: "druid",
        statModifiers: buildModifier({ DEX: 5, INT: 5, STR: -5, CHA: -5 })
    },
    {
        name: "shaman",
        statModifiers: buildModifier({ WIS: 5, CHA: 5, STR: -5, INT: -5 })
    },
    {
        name: "barbarian",
        statModifiers: buildModifier({ STR: 5, DEX: 5, INT: -5, CHA: -5 })
    },
    {
        name: "inquisitor",
        statModifiers: buildModifier({ DEX: 5, CHA: 5, WIS: -5, INT: -5 })
    },
    {
        name: "ninja",
        statModifiers: buildModifier({ DEX: 5, WIS: 5, STR: -5, CON: -5 })
    },
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
