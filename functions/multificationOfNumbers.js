function multificationOfNumbers(numbers) {
  let res = 1;
  for (let i = 1; i <= numbers; i++) {
    res *= i;
    // console.log(i);
  }
  return res;
}
let num = 3;
console.log(multificationOfNumbers(num));
