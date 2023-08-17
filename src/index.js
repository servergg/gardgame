const {
    STATS,
    ELEMENTS,
    BUILDS,
    PROFILES,
    RANK,
    RANK_ALGORITHM_LAMBDA,
} = require("./constants.js");
const { randomExponential, randomUniform } = require("./utils.js");

function getBuildModifiers(build = 0) {
    const { primary, secondary, last } = BUILDS[build].modifiers;

    return {
        primary,
        secondary,
        last
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

function generateCard(userid) {
    const rank = getRandomRank();
    const build = getRandomBuild();
    const element = getRandomElement();
    const profile = getRandomProfile();
    const stats = getRandomStats(rank.index, build.index);

    const template = `
    \`${profile.name} | ${build.name} | ${element.name} | RANK ${rank.name}\`
    \`${JSON.stringify(stats)}\``

    console.log(template);
    let card = {
        "Rank": rank,
        "Build": build,
        "Element": element,
        "Profile": profile,
        "Stats": stats,
        "Template": template,
        "UserId": userid
    }
    return card;
}

module.exports = {
    generateCard
}