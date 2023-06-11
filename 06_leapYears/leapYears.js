const leapYears = function(yr) {
    if (yr % 4 != 0) return false;
    if (yr % 100 == 0 && yr % 400 != 0) return false;
    return true;
};

// Do not edit below this line
module.exports = leapYears;
