// A JavaScript function to calculate the factorial of a number 
//Simon Mulligan




function factorial(n) {
    if (n < 0) {
      return undefined; //factorial cannot be less than 0
    } else if (n == 0) {
      return 1; //if factorial is 0 returns 1
    } else {
      let fact = 1;
      for (let i = 1; i <= n; i++) {
        fact *= i; //the product of all the integers from 1 to that number 
      }
      return fact;
    }
  }
  
//Test data 
  console.log(factorial(6)); // Output: 720
console.log(factorial(0)); // Output: 1
console.log(factorial(10)); // Output: 3628800
console.log(factorial(-3)); // Output: undefined
