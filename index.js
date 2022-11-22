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
        standard: Object.keys(STATS).filter(key => (stats.indexOf(STATS[key]) == -1))
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

    return stats;
}

function getRandomRank(lambda = RANK_ALGORITHM_LAMBDA) {
    const index = randomExponential(RANK.length, lambda);

    return {
        ...RANK[index],
        index,
    };
}

function getRandomProfile() {
    const index = randomUniform(0, PROFILES.length);

    return {
        name: PROFILES[index],
        index,
    };
};

function getRandomElement() {
    const index = randomUniform(0, ELEMENTS.length);

    return {
        ...ELEMENTS[index],
        index,
    };
}

function getRandomBuild() {
    const index = randomUniform(0, BUILDS.length);

    return {
        ...BUILDS[index],
        index,
    };
}

function generateCard() {
    const rank = getRandomRank(1.1);
    const build = getRandomBuild();
    const element = getRandomElement();
    const profile = getRandomProfile();
    const stats = getRandomStats(rank.index, build.index);

    const template = `
    \`${profile.name} | ${build.name} | ${element.name} | RANK ${rank.name}\`
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