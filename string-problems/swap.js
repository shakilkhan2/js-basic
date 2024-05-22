let first = 50;
let second = 100;
console.log(first, second);

// swap1: using temp
let temp = first;
// first = second;
// second = temp;

// console.log(first, second);

// swap1: using destructure method
[first , second] = [second , first];
console.log(first, second)