let i = 0;
while(i < 10){
    i++;
    // console.log(i);
}

// 

for(i = 0; i < 10; i++){
    // console.log(i);
}
// break
let n = 0;
while(n < 10){
    n++;
    if(n > 5){
        break;
    }
    // console.log(n);
}

// 

for(i = 5; i <= 55; i += 5){
    if(i > 45){
        break;
    }
    // console.log(i);
}

// 
let colors = ['red', 'blue', 'green', 'indigo', 'orange', 'black', 'pink', 'yellow', 'magenta'];

for (i = 0; i < colors.length; i++){
    let color = colors[i];
    if(color == 'black'){
        break;
    }
    // console.log(color);
}

// continue

const numbers = [12, 34, 34, 45, 56, 6, 7, 5, 200, 300, 46, 57, 58, 66];
for (i = 0; i < numbers.length; i++){
    if(numbers[i] > 50){
        break;
    }
    // console.log(numbers[i]);
}
// 
console.log('continue is just maintain the condition and continue/move on on the other hand break is if you reach the condition just stop/break');
const numbers1 = [12, 34, 34, 45, 56, 6, 7, 5, 200, 300, 46, 57, 58, 66];
for (i = 0; i < numbers1.length; i++){
    if(numbers1[i] > 50){
        continue;
    }
    // console.log(numbers1[i]);
}


// 
let a = 30;
while(a <= 86){
    // console.log(a);
    a++;
    if(a > 44){
        break;
    }
    
}

// 
let bookPrices = [100, 200, 230, 50, 30, 55, 400, 500, 120];
for(p = 0; p < bookPrices.length; p++){
  const  price = bookPrices[p];
    
    if(price > 200){
        continue;
    }
    console.log(price);
}