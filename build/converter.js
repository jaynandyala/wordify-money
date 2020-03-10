"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("util");
var checkIfNumberIsValid = function (number) {
    console.log("Hello Fucker!! Your shit is working!!");
};
exports.converter = function (number) {
    if (util_1.isNumber(number)) {
        checkIfNumberIsValid(number);
    }
    else {
        console.log("check the shit you wrote!!");
    }
};
