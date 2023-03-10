// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// input: a number
// output: where our number input is at boiling point or not
// create a function boilingPoint
// write a condetional statement that would take in tempeture
// return if the tempeture is below, above or at boiling point


// const boilingPoint = (num) => {
//     if (num === 212){
//         return `${num} is at boiling point`
//     }else if (num > 212){
//         return `${num} is above boing point`
//     }else if (num < 212){
//         return `${num} is below boing point`
//     }
// }
// console.log(boilingPoint())


// const temp1 = 42
// console.log(boilingPoint(temp1))
// // Expected output: "42 is below boiling point"

// const temp2 = 350
// console.log(boilingPoint(temp2))
// // Expected output: "350 is above boiling point"

// const temp3 = 212
// console.log(boilingPoint(temp3))
// // Expected output: "212 is at boiling point"



// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: 
// input: a combination of arrays
// output: the length of a new array
// concatanate the arrays given using built-in method .concat()
// use built-in method .length
// return the lenght of the new array.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

// console.log((padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)).length)

// Expected output: 9



// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// input: a given string
// output: given string with letters in reverse "3202 ahplA"
// split the given string with .split("") for each index in the string
// reverse the given string with .reverse()
// join the given string with .join("") to concatanate the given string

const currentCohort = "Alpha 2023"

console.log(currentCohort.split("").reverse().join("")) 
   

// Expected output: "3202 ahplA"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// input: a given array 
// output: the last index of a given value
// find the last index of a given value by using built-in method .lastIndexOf() 
// input the given value inside the built-in method
// return the last index of the given value.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42

// console.log(myNumbers.lastIndexOf(givenValue1))
// Expected output: 7

const givenValue2 = 10

// console.log(myNumbers.lastIndexOf(givenValue2))
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// input: a given array of numbers
// output: sort the numbers from largest to smallest
// use built-in method .sort() to sort out the numbers
// within the built-in method .sort() write a function(high order function) to sort out the number from largest to smallest
// return the new array of numbers. 

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]

// console.log(sanDiegoSummerTemperatures.sort((a, b) => b - a))
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]

// console.log(sanDiegoWinterTemperatures.sort((a, b) => b - a))
// Expected output: [68, 67, 66, 66, 62, 59, 59]
