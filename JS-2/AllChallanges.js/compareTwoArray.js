// Write your code here:
const coolStuff = [
    "gameboys",
    "skateboards",
    "backwards hats",
    "fruit-by-the-foot",
    "pogs",
    "my room",
    "temporary tattoos",
  ];
  
  const myStuff = [
    "rules",
    "fruit-by-the-foot",
    "wedgies",
    "sweaters",
    "skateboards",
    "family-night",
    "my room",
    "braces",
    "the information superhighway",
  ];
  
  const justCoolStuff = (arr1, arr2) =>
    arr1.filter((text) => arr2.includes(text));
  
  console.log(justCoolStuff(myStuff, coolStuff));
  
  // Feel free to uncomment the code below to test your function
  /*
  const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
  
  const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
  
  console.log(justCoolStuff(myStuff, coolStuff))
  // Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
  
  */
  