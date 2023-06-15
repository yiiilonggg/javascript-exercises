function shift(s, x, dir) {
    let l = s.length;
    while (x >= 0 && x < l) {
        let code = s.charCodeAt(x);
        if (!(code > 47 && code < 58) &&
            !(code > 64 && code < 91) &&
            !(code > 96 && code < 123)) {
                x += dir;
            } else {
                break;
            }
    }  
    return x;
}

const palindromes = function (s) {
    s = s.toUpperCase();
    let left = shift(s, 0, 1), right = shift(s, s.length - 1, -1);
    while (left < right) {
        if (s.charAt(left) != s.charAt(right)) return false;
        left = shift(s, left + 1, 1);
        right = shift(s, right - 1, -1);
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
