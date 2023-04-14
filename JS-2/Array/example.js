let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//Last element removed
secretMessage.pop();

console.log(secretMessage.length);

//Sonuna ekle
secretMessage.push('to', 'program');

//change array 7
secretMessage[7] = 'right';

//remove first element
secretMessage.shift();

//added first element
secretMessage.unshift('Programming');

//remove and replace
secretMessage.splice(6, 5, 'know,')

console.log(secretMessage.join(' '));


