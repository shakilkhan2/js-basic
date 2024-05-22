function factorial(number) {
  let res = 1;
  for (let i = 1; i <= number; i++) {
    res *= i;
  }
  return res;
}
let number = 5;
console.log(factorial(number));

// reverse factorial
function reverseFactorial(number) {
  let factorial = 1;
  for (i = number; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
}
let num = 5;
console.log(reverseFactorial(num), 'by reverse');
