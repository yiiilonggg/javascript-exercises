const getTheTitles = function(arr) {
    let res = [];
    for (x of arr) res.push(x["title"]);
    return res;
};

// Do not edit below this line
module.exports = getTheTitles;
