//A JavaScript function that takes a number as a parameter and check the number is prime or not. 
//Simon Mulligan


function isPrime(number) {
    // Check if number is less than 2, then it's not a prime number
    if (number < 2) {
      return false;
    }
  
    // Check if number is 2, then it's a prime number
    if (number === 2) {
      return true;
    }
  
    // Check if number is even, then it's not a prime number
    if (number % 2 === 0) {
      return false;
    }
  
    // Check if number is divisible by any odd number less than itself
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) {
        return false;
      }
    }
  
    // Number is prime
    return true;
  }
  
//test data
  console.log(isPrime(2)); // expected result: true
console.log(isPrime(3)); // expected result:  true
console.log(isPrime(4)); // expected result: false
console.log(isPrime(5)); // expected result: true
console.log(isPrime(6)); // expected result: false
console.log(isPrime(7)); // expected result: true
console.log(isPrime(8)); // expected result: false
console.log(isPrime(9)); // expected result: false
console.log(isPrime(10)); // expected result: false
