//Celvin Deg
const kelvin = 385;
//Celcius Deg
const celsius = kelvin - 273;
//Fahrenheit
let fahrenheit = (celsius * (9/5) + 32);
fahrenheit = Math.floor(fahrenheit);
//Output fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
