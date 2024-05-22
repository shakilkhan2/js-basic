// inches to feet
function inchesToFeet(inches) {
  let feet = inches / 12;

  return feet;
}
let inches = 36;
const result = inchesToFeet(inches);
console.log(result, "feet");

// miles to kilometer
function milesToKm(miles) {
  const km = miles * 1.609344;

  return km;
}
let miles = 5;
console.log(milesToKm(miles), "km");

let miles10 = 10;
console.log(milesToKm(miles10), "km");

// check the number: even or not
function check_Even(number) {
  if (number % 2 === 0) {
    return true;
  } else {
   return false;
  }
}
let number1 = 98;
console.log(check_Even(number1));

let number2 = 117;
console.log(check_Even(number2));

// is Leap year:
function isLeapYear(year){
if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
return true;
}
return false;
}
let year = 2028;
console.log(isLeapYear(year));

let year2 = 2030;
console.log(isLeapYear(year2));