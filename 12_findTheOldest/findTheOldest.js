const findTheOldest = function(arr) {
    let high = 0, res = undefined;
    const CURR = 2023;
    for (x of arr) {
        let age = (typeof x["yearOfDeath"] == "undefined") ? CURR - x["yearOfBirth"] : x["yearOfDeath"] - x["yearOfBirth"];
        if (age > high) {
            high = age;
            res = x;
        }
    }
    return res;
};

// Do not edit below this line
module.exports = findTheOldest;
