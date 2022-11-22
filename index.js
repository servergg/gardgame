import {
    STATS,
    ELEMENTS,
    BUILDS,
    PROFILES,
    RANK,
    RANK_ALGORITHM_LAMBDA,
} from "./constants.js";
import { randomExponential, randomUniform } from "./utils.js";

function getBuildModifiers(build = 0) {
    const { primary, secondary, last } = BUILDS[build].modifiers;
    const stats = [...primary, ...secondary, ...last];

    return {
        primary,
        secondary,
        last,
        standard: STATS.filter(stat => (stats.indexOf(stat) == -1))
    };
}

function getRandomStats(rank = 0, build = 0) {
    let stats = {};

    const rankMods = RANK[rank].modifiers;
    const buildMods = getBuildModifiers(build);

    Object.keys(buildMods).forEach(key => buildMods[key].forEach(s => {
        const mod = rankMods[key];
        const min = mod[mod.length - 1];
        const max = mod[0] + 1;

        stats[s] = mod.length > 1 ? randomUniform(min, max) : mod[0];
    }));

    const { STR, DEX, CON, WIS, INT, CHA } = stats;

    return [STR, DEX, CON, WIS, INT, CHA];
}

function getRandomRank(lambda = RANK_ALGORITHM_LAMBDA) {
    const index = randomExponential(RANK.length, lambda);

    return [RANK[index], index];
}

function getRandomProfile() {
    const index = randomUniform(0, PROFILES.length);

    return [PROFILES[index], index];
};

function getRandomElement() {
    const index = randomUniform(0, ELEMENTS.length);

    return [ELEMENTS[index], index];
}

function getRandomBuild() {
    const index = randomUniform(0, BUILDS.length);

    return [BUILDS[index], index];
}

function generateCard() {
    const [rank, rankIdx] = getRandomRank(1.1);
    const [build, buildIdx] = getRandomBuild();
    const [element] = getRandomElement();
    const [profile] = getRandomProfile();
    const stats = getRandomStats(rankIdx, buildIdx);

    const template = `
    \`${profile} | ${build.name} | ${element.name} | RANK ${rank.name}\`
    \`${JSON.stringify(stats)}\``

    console.log(template);
    return template;
}

// const RANK_LIST = {};

// [...Array(500).keys()].forEach(i => {
//     const [rank] = getRandomRank(1.2);

//     RANK_LIST[rank.name] = typeof RANK_LIST[rank.name] === "number" ? RANK_LIST[rank.name] + 1 : 1;
// });

// console.log(JSON.stringify(RANK_LIST));

[...Array(20).keys()].forEach(generateCard);