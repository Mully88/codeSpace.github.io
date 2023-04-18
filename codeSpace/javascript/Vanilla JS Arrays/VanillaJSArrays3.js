//A JavaScript program to find the maximum and minimum value of an array
//Simon Mulligan


function findMinMax(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) { //if the value is the highest in the array it becomes Max
        max = arr[i];
      }
      if (arr[i] < min) {//if the value is the lowest in the array it becomes Min
        min = arr[i];
      }
    }
    return [min, max]; //returns the maximum and minimum numbers
  }
  
  // Moodle Example
  const myArray = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49]
  const [minValue, maxValue] = findMinMax(myArray);
  console.log(`Minimum value: ${minValue}`); // Output: "Minimum value: 14"
  console.log(`Maximum value: ${maxValue}`); // Output: "Maximum value: 77"
  