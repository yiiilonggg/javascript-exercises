const findTheOldest = function(arr) {
    return arr.reduce((a, b) => {
        const x = getAge(a["yearOfBirth"], a["yearOfDeath"]);
        const y = getAge(b["yearOfBirth"], b["yearOfDeath"]);
        return (x < y) ? b : a;
    })
};

function getAge(birth, death) {
    if (typeof death == "undefined") death = 2023;
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
