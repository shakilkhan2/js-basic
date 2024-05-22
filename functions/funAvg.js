
// Function that takes an array as arguments

function make_avg(arr){
    if (numbers.length === 0){
        return 0;
    }

    let sum = 0;
    for(i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }
    avg = sum / numbers.length;

    return avg;
}

let numbers = [5, 5, 5];
console.log(make_avg(numbers));


// odd or even
let value = 20
function odd_even(value){
    if(value % 2 === 0){
return "even";
    }else{
        return "odd";
    }

}
console.log(odd_even(value));