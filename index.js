import {
    MAX_STAT_VALUE,
    MIN_STAT_VALUE,
    MEAN_STAT_VALUE,
    STATS,
    ELEMENTS,
    BUILDS
} from "./constants.js";
import { randomTruncSkewNormal } from "./utils.js";

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function generateStat(skew = 0) {
    const range = [MIN_STAT_VALUE, MAX_STAT_VALUE];
    const value = randomTruncSkewNormal({ mean: MEAN_STAT_VALUE, stdDev: 2, range, skew });
    return Math.round(value);
};

function getRandomElement() {
    const index = getRandomNumber(0, ELEMENTS.length);

    return index;
}

function getRandomBuild() {
    const index = getRandomNumber(0, BUILDS.length);

    return index;
}

function generateCard() {
    var buildIndex = getRandomBuild();
    var elementIndex = getRandomElement();

    var elementName = ELEMENTS[elementIndex].name;
    var className = BUILDS[buildIndex].name;
    var statsNumber = BUILDS[buildIndex].statsDistribution.map(value => generateStat(value));
    var statsRank = statsNumber.reduce((a, v, i) => ({ ...a, [STATS[i]]: v }), {});

    // statsNumber.find(v => {
    //     if (v === 9) {
    //         console.log({ elementName, className, statsRank });
    //         return true;
    //     }

    //     return false;
    // });
    console.log({ elementName, className, statsRank });
}

console.log([...Array(10).keys()].forEach(generateCard))