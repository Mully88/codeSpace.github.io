// user enters a number
const number = parseInt(prompt('Please enter a number: '));

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result to the user
    console.log(`${number} * ${i} = ${result}`);