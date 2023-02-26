//My Age
const myAge = 30;
//2 years early
let earlyYears = 2;
earlyYears *= 10.5;
//Later Years
let laterYears = myAge - 2;
laterYears *= 4;
//console.log(earlyYears + ' ' + laterYears);
const myAgeInDogYears = earlyYears + laterYears;
//My name to lower case
const myName = 'Ersin'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);