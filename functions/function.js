function easy(money){
    // console.log("Easy function", money, "busy")
}

easy(430);


// 
function add(n1, n2){
    var res = n1 + n2;
    return res;
}

const result = add(30, 2);
// console.log(result);

// CGPA maker:
function average(m1, m2, m3, m4, m5, m6, m7, m8){
    const sum = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8;
    const average = sum / 8;

    return average;
}

const cgpa = average(2.50, 2.81, 3.50, 3.50, 3.00, 3.40, 3.50, 3.70);
const cgpaFinal = cgpa.toFixed(2);
const myResult = parseFloat(cgpaFinal)
console.log(myResult);

// 
// function foo(){
//     console.log('foo');
//     function bar(){
//         console.log("bar");
//     }
//     bar(); 
// }

// foo();
// 

function foo(){
    console.log('foo');

    
}

function bar(){
    console.log('bar');
    foo();
}
bar();

// 
function make_avg(myArray){

    let sum = 0;
    
    for(i = 0; i < arr.length; i++){
        let numbers = myArray[i];
        sum += numbers;
       
    }
    console.log(sum);
    let avg = sum / arr.length;

   return avg;
}
let arr = [1, 2, 3, 4];
let m = make_avg(arr);

console.log(m);