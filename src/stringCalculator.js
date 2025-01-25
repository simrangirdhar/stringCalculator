"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
try {
    rl.question("Enter Strings ", function (input) {
        console.log("You entered: ".concat(input));
        var result = add(input);
        console.log("The result is: ".concat(result));
        rl.close();
    });
}
catch (err) {
    console.log("Error is:" + err);
}
function add(numbers) {
    try {
        if (numbers === "")
            return 0;
        var delimiter = /,|\n/;
        if (numbers.startsWith("//")) {
            var parts = numbers.split(/\r\n|\\n|\n|\r/);
            delimiter = new RegExp(parts[0].substring(2));
            numbers = parts[1];
        }
        var numArray = numbers === null || numbers === void 0 ? void 0 : numbers.split(delimiter).map(function (n) { return parseInt(n, 10); });
        var negatives = numArray === null || numArray === void 0 ? void 0 : numArray.filter(function (n) { return n < 0; });
        if (negatives.length > 0) {
            throw new Error("Negative numbers not allowed: ".concat(negatives.join(", ")));
        }
        console.log(numArray);
        return numArray.reduce(function (sum, num) { return sum + num; }, 0);
    }
    catch (err) {
        throw err;
    }
}
