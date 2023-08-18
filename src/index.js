const {
    ELEMENTS,
    BUILDS,
    PROFILES,
    RANKS,
} = require("./constants.js");
const { randomUniform } = require("./utils.js");

function getRandom(list) {
    return list[randomUniform(0, list.length)];
}

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

function generateCard(userid, rankIndex = 0) {
    const rank = RANKS[rankIndex];
    const build = getRandom(BUILDS);
    const element = getRandom(ELEMENTS);
    const preffix = getRandom(element.preffixes);
    const profile = getRandom(PROFILES);
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