// 2 JavaScript functions to: Show the array content and Show the max value
//Simon Mulligan




let arr = [10, 2, 3, 4, 7]; //Sample array

function showArray(arr) {
  console.log("The content of the array is: " + arr); //Returns entire array to console
}

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; //runs through array before calculating the greatest number
    }
  }
  console.log("The max value in the array is: " + max);  //displays greatest to log
}

showArray(arr);
findMax(arr);
