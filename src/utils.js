export function randomExponential (max, zmii = 1.1) {
    var idx = 0;
    if (max > 1) {
        idx = Math.floor(Math.log((Math.random() * (Math.pow(zmii, max) - 1.0)) + 1.0) / Math.log(zmii));
        if (idx >= max) {
            idx = max - 1
        }
        idx = (max - idx) - 1
    }
    return idx;
}

export function randomUniform (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
