const myObject ={
    id: 23,
    email: 'asdf@g.com',
    phone: 12345,
    quantity: 34,
    address: 'Dhaka, BD'
}

console.log(myObject);
console.log(myObject.address);
myObject.address = 'Cumilla, BD';
console.log(myObject);

const objectKeys = Object.keys(myObject);
const objectValues = Object.values(myObject);
console.log(objectKeys);
console.log(objectValues);

console.log(objectKeys[2], '=', objectValues[2]);
console.log(myObject['address']);

const myAddress = 'address';
console.log(myObject[myAddress]);