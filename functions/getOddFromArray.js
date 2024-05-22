function getOddFromArray(numbers){
    const oddArray = [];
    let sum = 0;
    for(i = 0; i < myArray.length; i ++){
        let elements = myArray[i];
        if(0 !== elements % 2){
            oddArray.push(elements);
            sum += elements;
        }
        
    }
    console.log(sum)
    return oddArray;
}
let myArray = [1, 3, 4, 5, 100, 101 ]
let oddNumbersArray = getOddFromArray(myArray);
console.log(oddNumbersArray);

// summation
function sum(oddNumbers){
    let sum = 0;
    for(i = 0; i < oddNumbersArray.length; i++){
sum += oddNumbersArray[i];
    }
    return sum;
}

console.log(sum(oddNumbersArray));

// 
for(i = 37; i <= 58; i+= 2){
    console.log(i)
}