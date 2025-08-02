//Dates
// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// const myCreatedDate = new Date(2025,0,21)
// console.log(myCreatedDate.toDateString());

// const myCreatedDate = new Date(2025,0,21,5,3)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2025-01-21")
console.log(myCreatedDate.toLocaleString());

//////////////////////////TIME///////////////////////////////////////////////////

let myTimeStamp = Date.now()
console.log(myTimeStamp); // gives time in milliseconds
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{weekday:"long"})







