// A JavaScript program to calculate the average value of an array elements
//Simon Mulligan

function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    const avg = sum / arr.length;
    return avg;
  }
  
  // Moodle test 
  const myArray = [20, 30, 25, 35, -16, 60, -100];
  const average = calculateAverage(myArray);
  console.log(average); // Output: 7.7
  