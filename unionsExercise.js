"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var stuff = [];
var colors = [];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
var greet = function (person) {
    if (typeof person === "string") {
        console.log("Hello, ".concat(person));
    }
    else {
        person.forEach(function (p) { return console.log("Hello, ".concat(p)); });
    }
};
