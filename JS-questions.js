// Create function that generates a random integer between the ranges of a minimum int and maximum int (inclusive of highest and lowest integers)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create an empty array to store the random integers
var randomIntArray = [];

// Create a for loop that will generate 10 random integers and insert into randomIntArray
for (var i = 0; i < 10; i++) {
    var randomInt = getRandomInt(1, 1000);
    randomIntArray.push(randomInt);
}

// Console log the random integer array (All 10 generated random ints)
console.log("Array Of Random Numbers: " + "[" + randomIntArray + "]");

// Initialize a variable to store the sum of the randome integers
let sum = 0;

// Create a for loop to iterate through the array and undergo the addition process
for (let i = 0; i < randomIntArray.length; i++) {

    // Add each array[item] to the sum variable
    sum += randomIntArray[i];
}

// Console log the sum of the array
console.log("Sum of Random Numbers: ", sum);
  