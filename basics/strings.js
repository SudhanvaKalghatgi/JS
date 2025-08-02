const name = "sudhanva"
const repoCount = 50
//console.log(name + repoCount + "Value") // this is a very old method and hence not recommended to use now

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // latest method 

 const gameName = new String('Sudhanva')
 console.log(gameName[0]);
 console.log(gameName.__proto__);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-2,8)
console.log(anotherString)

const newStringOne = "      Sudhanva     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudary"
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));
console.log(gameName.split('-'));



