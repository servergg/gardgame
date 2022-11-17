import {
    MAX_STAT_VALUE,
    MIN_STAT_VALUE,
    MEAN_STAT_VALUE,
    STATS,
    ELEMENTS,
    BUILDS,
    NAMES,
    STD_DEV_STAT_VALUE
} from "./constants.js";
import { randomTruncSkewNormal } from "./utils.js";

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function generateStat(skew = 0) {
    const range = [MIN_STAT_VALUE, MAX_STAT_VALUE];
    const value = randomTruncSkewNormal({ mean: MEAN_STAT_VALUE, stdDev: STD_DEV_STAT_VALUE, range, skew });

    return Math.round(value);
};

function generateCharName () {
    return getRandomNumber(0, NAMES.length);
};

function getRandomElement() {
    return getRandomNumber(0, ELEMENTS.length);
}

function getRandomBuild() {
    return getRandomNumber(0, BUILDS.length);
}

function generateCard() {
    var buildIndex = getRandomBuild();
    var elementIndex = getRandomElement();
    var charNameIndex = generateCharName();

    var elementName = ELEMENTS[elementIndex].name;
    var className = BUILDS[buildIndex].name;
    var charName = NAMES[charNameIndex];
    var statsNumber = BUILDS[buildIndex].statModifiers.map(value => generateStat(value));
    var statsRank = statsNumber.reduce((a, v, i) => ({ ...a, [STATS[i]]: v }), {});

    const template = `
    \`${charName} | ${className} | ${elementName}\`
    \`${JSON.stringify(statsRank)}\``

    statsNumber.find(v => {
        if (v === 8) {
            console.log(template);
            return true;
        }

        return false;
    });

    // statsNumber.some((element, index) => {
    //     if (element === 9 && statsNumber.indexOf(element) !== index) {
    //         console.log(template);
    //         return true;
    //     }

    //     return false;
    // })

    // console.log(template);
}

console.log([...Array(100).keys()].forEach(generateCard))