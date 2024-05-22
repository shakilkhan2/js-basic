let address = "Satpara, Doshpara-3518, Daudkandi, Cumilla.";
let doesExist = address.includes("doshpara");
console.log(doesExist);

let doesExist1 = address.includes("Doshpara");
console.log(doesExist1);

//

console.log(address.indexOf("Cumilla"));
console.log(address.indexOf("para"));

// startsWith
console.log(address.startsWith("Satpara"));
console.log(address.startsWith("satpara"));

// endsWith
const myFile = 'file.pdf';
const myImage = 'image.png';

console.log(myImage.endsWith('.pdf'));
console.log(myImage.endsWith('.png'));
