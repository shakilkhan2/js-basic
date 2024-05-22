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

// math.max

function max(n1, n2, n3){
   const winner = Math.max(n1, n2, n3);
   return winner;
}

const Jim = 100;
const Della = 89;
const Chinku = 99;

console.log(max(Jim, Della, Chinku));

// Math.min
function min(n1, n2, n3){
    const minNumber = Math.min(n1, n2, n3);

    return minNumber;
}

let z1 = 45;
let z2 = 56;
let z3 = 33;
console.log(min(z1, z2, z3));

// minimum:

function lowest(v1, v2, v3){
    if(Apu < Dipu && Apu < Tipu){
        return 'Apu got the lowest.'
    }else if(Dipu < Apu && Dipu < Tipu){
        return 'Dipu got the lowest.'
    }else{
        return 'Tipu got the lowest.'
    }
}

let Apu = 33;
let Dipu = 87;
let Tipu = 80;

const result = lowest(Apu, Dipu, Tipu);
console.log(result);

// using math.min:
function lowest(v1, v2, v3) {
    const min = Math.min(v1, v2, v3);
    if (min === v1) {
        return 'Apu got the lowest.';
    } else if (min === v2) {
        return 'Dipu got the lowest.';
    } else {
        return 'Tipu got the lowest.';
    }
}

let apu = 99;
let dipu = 87;
let tipu = 80;

const result1 = lowest(apu, dipu, tipu);
console.log(result1);
