const fibonacci = function(x) {
    if (typeof x == "string") x = Number(x);
    if (x < 0) return "OOPS";
    if (x <= 2) return 1;
    let prevPrev = 1, prev = 1, curr = 2;
    for (let i = 2; i < x; i++) {
        curr = prevPrev + prev;
        prevPrev = prev;
        prev = curr;
    }
    return prev;
};

// Do not edit below this line
module.exports = fibonacci;
