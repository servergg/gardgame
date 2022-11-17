import { average, range } from "./utils.js";

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
        name: "mage", // ["STR", "DEX", "CON", "WIS", "INT", "CHA"]
        statModifiers: [-5, 0, -5, 5, 5, 0] // the sum of all elements must be 0
    },
    {
        name: "warrior", // ["STR", "DEX", "CON", "WIS", "INT", "CHA"]
        statModifiers: [5, 0, 5, -5, -5, 0]
    },
    {
        name: "cleric", // ["STR", "DEX", "CON", "WIS", "INT", "CHA"]
        statModifiers: [0, -5, 5, 0, -5, 5]
    },
    {
        name: "rogue", // ["STR", "DEX", "CON", "WIS", "INT", "CHA"]
        statModifiers: [-5, 5, -5, 0, 0, 5]
    },
    {
        name: "ranger", // ["STR", "DEX", "CON", "WIS", "INT", "CHA"]
        statModifiers: [0, 5, 0, 5, -5, -5]
    },
    // {
    //     name: "battle mage", // ["STR", "DEX", "CON", "WIS", "INT", "CHA"]
    //     statModifiers: [1, 1, 1, 1, 1, 1]
    // },
    // {
    //     name: "warlock", // ["STR", "DEX", "CON", "WIS", "INT", "CHA"]
    //     statModifiers: [1, 1, 1, 1, 1, 1]
    // },
    // {
    //     name: "trickster", // ["STR", "DEX", "CON", "WIS", "INT", "CHA"]
    //     statModifiers: [1, 1, 1, 1, 1, 1]
    // },
    // {
    //     name: "paladin", // ["STR", "DEX", "CON", "WIS", "INT", "CHA"]
    //     statModifiers: [1, 1, 1, 1, 1, 1]
    // },
    // {
    //     name: "swashbuckler", // ["STR", "DEX", "CON", "WIS", "INT", "CHA"]
    //     statModifiers: [1, 1, 1, 1, 1, 1]
    // },
    // {
    //     name: "druid", // ["STR", "DEX", "CON", "WIS", "INT", "CHA"]
    //     statModifiers: [1, 1, 1, 1, 1, 1]
    // },
    // {
    //     name: "shaman", // ["STR", "DEX", "CON", "WIS", "INT", "CHA"]
    //     statModifiers: [1, 1, 1, 1, 1, 1]
    // },
    // {
    //     name: "barbarian", // ["STR", "DEX", "CON", "WIS", "INT", "CHA"]
    //     statModifiers: [1, 1, 1, 1, 1, 1]
    // },
    // {
    //     name: "inquisitor", // ["STR", "DEX", "CON", "WIS", "INT", "CHA"]
    //     statModifiers: [1, 1, 1, 1, 1, 1]
    // },
    // {
    //     name: "ninja", // ["STR", "DEX", "CON", "WIS", "INT", "CHA"]
    //     statModifiers: [1, 1, 1, 1, 1, 1]
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
