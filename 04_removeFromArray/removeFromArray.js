const removeFromArray = function(arr, ...args) {
    let flags = [], n = arr.length, res = [];
    for (let i = 0; i < n; i++) flags.push(false);
    for (t of args) {
        for (let i = 0; i < n; i++) {
            if (arr[i] == t && typeof arr[i] == typeof t) flags[i] = true;
        }
    }
    for (let i = 0; i < n; i++) {
        if (!flags[i]) res.push(arr[i]);
    }
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
