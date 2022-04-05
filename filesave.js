import fs from 'fs';



// const book  = {
//     title: 'KEK',
//     author: 'LOL'
// };

// const bookJSON = JSON.stringify(book);

// // fs.writeFileSync('myjsonfile.json', bookJSON);

const dataBuffer = fs.readFileSync('myjsonfile.json')
let dataJson = dataBuffer.toString();

console.log(dataJson);

let data = JSON.parse(dataJson);

data.name = 'Maksymque';
data.age = '30';

console.log(data);

let newDataJson = data.toString();

console.log(newDataJson);

fs.writeFileSync('myjsonfile.json', JSON.stringify(data));

// console.log(data.title);


