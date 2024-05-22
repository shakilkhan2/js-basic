let numbers = [1, 3, 5, 7, 9];
// console.log(numbers.length);
// console.log(numbers, numbers[4]);

const thirdNumber = numbers[2];
console.log("The third number is", thirdNumber);
numbers[2] = 20;
console.log(numbers);
const newNumber = numbers[2];
console.log("The third number is", newNumber);
let position = numbers.indexOf(9);
console.log(position);
