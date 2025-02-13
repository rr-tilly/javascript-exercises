const palindromes = function (word) {
    let string = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reverse = string.split('').reverse().join('');
    return string === reverse;
};

// Do not edit below this line
module.exports = palindromes;
