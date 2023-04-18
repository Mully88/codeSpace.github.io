

//A program that sums the values of an array by Simon Mulligan



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12]; //These are the array values we are using

let sum = 0;
for (let i = 0; i < arr.length; i++) { //sets i to 0 then itterates through the array values
  sum += arr[i];// adds array value 
}

console.log('The sum is ' + sum + '.'); //displays the sum of the values to the console
