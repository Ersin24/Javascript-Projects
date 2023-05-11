// Write your code here:
const greetings = ["hello", "hi", "heya", "oi", "hey", "yo"];

const shoutGreetings = (arr) => arr.map((text) => `${text.toUpperCase()}!`);

console.log(shoutGreetings(greetings));

// Feel free to uncomment out the code below to test your function!
/*
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
*/
