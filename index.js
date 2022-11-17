const MAX_STAT_VALUE = 99;
const MIN_STAT_VALUE = 0;
const STATS = ["STR", "DEX", "CON", "WIS", "INT", "CHA"];
const RANK = [
    {name: "0", max: 9},
    {name: "1", max: 19},
    {name: "2", max: 29},
    {name: "3", max: 39},
    {name: "4", max: 49},
    {name: "5", max: 59},
    {name: "6", max: 69},
    {name: "7", max: 79},
    {name: "8", max: 89},
    {name: "9", max: 99},
];
const ELEMENTS = [
    {name: "fire", win: [3, 4], lose: [1, 2]},
    {name: "earth", win: [0, 2], lose: [3, 4]},
    {name: "water", win: [0, 3], lose: [1, 4]},
    {name: "metal", win: [1, 4], lose: [0, 2]},
    {name: "wood", win: [1, 2], lose: [0, 3]}
];
const BUILDS = [
    {
        name: "mage", 
        statsDistribution: [1.5, 1, 1.5, 0.5, 0.5, 1] // the sum of all elements must be 6
    },
    {
        name: "warrior", 
        statsDistribution: [0.5, 1, 0.5, 1.5, 1.5, 1]
    },
    {
        name: "cleric", 
        statsDistribution: [1, 1.5, 0.5, 1, 1.5, 0.5]
    },
    {
        name: "rogue", 
        statsDistribution: [1.5, 0.5, 1.5, 1, 1, 0.5]
    },
];

function getRandomDistributedNumber (min, max, skew) {
    let u = 0, v = 0;
    while(u === 0) u = Math.random() //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random()
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v )
    
    num = num / 10.0 + 0.5 // Translate to 0 -> 1
    if (num > 1 || num < 0) 
      num = getRandomDistributedNumber(min, max, skew) // resample between 0 and 1 if out of range
    
    else{
      num = Math.pow(num, skew) // Skew
      num *= max - min // Stretch to fill range
      num += min // offset to min
    }
    return num
};

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

function generateStat (skew = 1) { 
    return Math.round(getRandomDistributedNumber(MIN_STAT_VALUE, MAX_STAT_VALUE, skew));
};

function getRandomElement () {
    const index = getRandomNumber(0, ELEMENTS.length);

    return index;
}

function getRandomBuild () {
    const index = getRandomNumber(0, BUILDS.length);

    return index;
}

function getRank (value) {
    function iterator (value, maxRank, i = 0) {
        return value <= maxRank ? RANK[i].name : iterator(value, RANK[i + 1].max, i + 1);
    }

    return iterator(value, RANK[0].max);
}

function generateCard () {
    var buildIndex = getRandomBuild();
    var elementIndex = getRandomElement();

    var elementName = ELEMENTS[elementIndex].name;
    var className = BUILDS[buildIndex].name;
    var statsNumber = BUILDS[buildIndex].statsDistribution.map(value => generateStat(value));

    var statsRank = statsNumber.reduce((a, v, i) => {
        const rank = getRank(v);
        // if (rank === "S" || rank === "E") console.log({
        //     elementName,
        //     className,
        //     statsNumber,
        // });
        return { ...a, [STATS[i]]: rank}
    }, {})

        console.log({
            elementName,
            className,
            statsRank,
        });
}

[...Array(10).keys()].forEach(generateCard)