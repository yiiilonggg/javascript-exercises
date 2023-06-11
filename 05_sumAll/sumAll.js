const sumAll = function(x, y) {
    if (x < 0 || typeof y != "number") return "ERROR";
    if (x > y) return sumAll(y, x);
    return (y * (y + 1) - x * (x - 1)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
