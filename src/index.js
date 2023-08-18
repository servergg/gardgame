const {
    ELEMENTS,
    BUILDS,
    PROFILES,
    RANKS,
} = require("./constants.js");
const { randomUniform } = require("./utils.js");

function generateRandomStats(rank, build) {
    let stats = {};

    Object.keys(build.modifiers).forEach(key => build.modifiers[key].forEach(s => {
        const mod = rank.modifiers[key];
        const min = mod[mod.length - 1];
        const max = mod[0] + 1;

        stats[s] = mod.length > 1 ? randomUniform(min, max) : mod[0];
    }));

    return stats;
}

function generateRandomProfile() {
    return PROFILES[randomUniform(0, PROFILES.length)];
}

function generateRandomElement() {
    return ELEMENTS[randomUniform(0, ELEMENTS.length)];
}

function generateRandomBuild() {
    return BUILDS[randomUniform(0, BUILDS.length)];
}

function generateRandomPreffix(element) {
    return element.preffixes[randomUniform(0, element.preffixes.length)];
}

function generateCard(userid, rankIndex = 0) {
    const rank = RANKS[rankIndex];
    const build = generateRandomBuild();
    const element = generateRandomElement();
    const preffix = generateRandomPreffix(element);
    const profile = generateRandomProfile();
    const stats = generateRandomStats(rank, build);

    let card = {
        "Rank": rank,
        "Build": build,
        "Element": element,
        "Preffix": preffix,
        "Profile": profile,
        "Stats": stats,
        "UserId": userid
    };

    console.log(card);

    return card;
}

module.exports = {
    generateCard
}