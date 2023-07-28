const myFamilyJSON = '{"family": { "name" : "ersin", "age" : 30, "isAdult" : true}}';




const myFamilyJs = JSON.parse(myFamilyJSON);

console.log(myFamilyJs.family)



// // Using the dot notation
// const book = jsObject.book;    
// console.log(book);
// console.log(book.name, book.price, book.inStock);




// const jsObject = { book: 'JSON Primer', price: 29.99, inStock: true, rating: null };
// const jsonData = JSON.stringify(jsObject);
// console.log(jsonData);
// { "book": "JSON Primer", "price": 29.99, "inStock": true, "rating": null }