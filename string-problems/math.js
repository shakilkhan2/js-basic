// Math.power
console.log(Math.pow(2, 3));

// Math.absolute
let num1 = 23;
let num2 = 70;
const difference = Math.abs(num1 - num2);
console.log(difference);

// Math.round
const cGpa = 3.4045;
console.log('CGPA-', cGpa);
console.log('CGPA-',Math.round(cGpa));
console.log('CGPA-',Math.ceil(cGpa));
console.log('CGPA-',Math.floor(cGpa));

// 
console.log(Math.round(Math.random()*6));

for(let i = 0; i <= 12; i++){
    console.log(Math.round(Math.random()*6), "starts here");
}