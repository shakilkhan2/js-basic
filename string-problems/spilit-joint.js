const paragraph = 'Cow is a domestic animal. It has four legs, two eyes, two ears and a long tail. It gives us milk. And cow meat is very tasty.';

const parts = paragraph.split(' ');
const para = paragraph.split('.');
const chars = paragraph.split('');

console.log(parts, para, chars);

// slice
console.log(paragraph.slice(13, 30));

// subString
console.log(paragraph.substring(13, 30));

// joint
const myArray = [
    'Cow is a domestic animal',
    'It has four legs, two eyes, two ears and a long tail',
    'It gives us milk',
    'And cow meat is very tasty',
  ];
const myPara = myArray.join('. ');
console.log(myPara);