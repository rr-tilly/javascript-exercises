const sumAll = function (first, second) {
    let sum = 0;
    if (first < 0 || second < 0) return 'ERROR';
    if (!Number.isInteger(first) || !Number.isInteger(second)) return 'ERROR'

    if (first > second) {
        let temp = first;
        first = second;
        second = temp;
    }

    for (let i = first; i <= second; i++) {
        sum += i;
    }
    return sum;


};
// Do not edit below this line
module.exports = sumAll;
