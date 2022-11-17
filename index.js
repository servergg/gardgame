const MAX_STAT_VALUE = 99;
const MIN_STAT_VALUE = 0;
const STATS = ["STR", "DEX", "CON", "WIS", "INT", "CHA"];
const ELEMENTS = [
    { name: "fire", wins: [1, 3] },
    { name: "earth", wins: [2, 4] },
    { name: "water", wins: [0, 3] },
    { name: "wind", wins: [4, 1] },
    { name: "lighting", wins: [0, 2] }
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
    const value = getRandomDistributedNumber(MIN_STAT_VALUE, MAX_STAT_VALUE, skew);
    return Math.floor(value * 0.1);
};

function getRandomElement () {
    const index = getRandomNumber(0, ELEMENTS.length);

    return index;
}

function getRandomBuild () {
    const index = getRandomNumber(0, BUILDS.length);

    return index;
}

function generateCard () {
    var buildIndex = getRandomBuild();
    var elementIndex = getRandomElement();

    var elementName = ELEMENTS[elementIndex].name;
    var className = BUILDS[buildIndex].name;
    var statsNumber = BUILDS[buildIndex].statsDistribution.map(value => generateStat(value));

    var statsRank = statsNumber.reduce((a, v, i) => {
        if (v === 9) console.log({
            elementName,
            className,
            statsNumber,
        });
        return { ...a, [STATS[i]]: v}
    }, {})

        // console.log({
        //     elementName,
        //     className,
        //     statsRank,
        // });
}

console.log([...Array(10).keys()].forEach(generateCard))