import {
    STATS,
    ELEMENTS,
    BUILDS,
    NAMES,
    RANK,
    RANK_ALGORITHM_LAMBDA,
} from "./constants.js";
import { randomExponential, randomUniform } from "./utils.js";

// function generateStat (skew = 0) {
//     const range = [MIN_STAT_VALUE, MAX_STAT_VALUE];
//     const value = randomTruncSkewNormal({ mean: MEAN_STAT_VALUE, stdDev: STD_DEV_STAT_VALUE, range, skew });

//     return Math.round(value);
// };

function generateRank () {
    const r = randomExponential(RANK.length, RANK_ALGORITHM_LAMBDA);

    return RANK[r];
}

function attributesToList ({ STR, DEX, CON, WIS, INT, CHA }) {
    return [STR, DEX, CON, WIS, INT, CHA];
}

function generateStatsByRank (rank = 0) {
    let stats = {};
    const rankMod = RANK[rank].modifiers;
    const buildMod = BUILDS[0].modifiers;

    // STATS.map((stat, i) => {

    // })

    // modifiers.forEach((attrs, i) => {
    //     const attr = attrs.length > 1 ? randomUniform(attrs[0], attrs[attrs.length - 1]): attrs[0];

    //     mod[i] = attr;
    // });

    // return mod;
}

function generateCharName () {
    return randomUniform(0, NAMES.length);
};

function getRandomElement() {
    return randomUniform(0, ELEMENTS.length);
}

function getRandomBuild() {
    return randomUniform(0, BUILDS.length);
}

function generateCard() {
    const rank = generateRank();
    // var buildIndex = getRandomBuild();
    // var elementIndex = getRandomElement();
    // var charNameIndex = generateCharName();

    // var elementName = ELEMENTS[elementIndex].name;
    // var className = BUILDS[buildIndex].name;
    // var charName = NAMES[charNameIndex];
    // var statsValue = BUILDS[buildIndex].statModifiers.map(value => generateStat(value));
    // var statsRank = statsValue.reduce((a, v, i) => ({ ...a, [STATS[i]]: v }), {});

    // const template = `
    // \`${charName} | ${className} | ${elementName}\`
    // \`${JSON.stringify(statsRank)}\``

    // statsValue.find(v => {
    //     if (v === 9) {
    //         console.log(template);
    //         return true;
    //     }

    //     return false;
    // });

    // statsValue.some((element, index) => {
    //     if (element === 9 && statsValue.indexOf(element) !== index) {
    //         console.log(template);
    //         return true;
    //     }

    //     return false;
    // })

    return rank;
}

const RANK_LIST = {};

// [...Array(10).keys()].forEach(i => {
//     const rank = generateCard();

//     RANK_LIST[rank] = typeof RANK_LIST[rank] === "number" ? RANK_LIST[rank] + 1 : 1;
// });

// console.log(JSON.stringify(RANK_LIST));
console.log(generateStatsByModifiers(RANK[4].modifiers));