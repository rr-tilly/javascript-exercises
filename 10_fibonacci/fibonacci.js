const fibonacci = function (num) {
    let num1 = 0;
    let num2 = 1;
    let sum = 1;
    let n = Number(num);

    if (n < 0) return "OOPS";
    if (n == 0) return 0;
    for (i = 1; i < n; i++) {
        sum = num1 + num2;

        num1 = num2;
        num2 = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
