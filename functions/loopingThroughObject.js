const myComputer ={
    brand: 'Asus',
    price: 35000,
    color: 'gray',
    generation: '5th',
    warranty: '24 months'
}

const keys = Object.keys(myComputer);
console.log(keys);
const values = Object.values(myComputer);
console.log(values);

for(i = 0; i < keys.length; i++){
    console.log(keys[i],'-', myComputer[keys[i]]);
}
console.log(myComputer['price']);

console.log(Object.entries(myComputer))

// for in loop
for(let propertyName in myComputer){
    const value = myComputer[propertyName];
    console.log(propertyName, value);
}
