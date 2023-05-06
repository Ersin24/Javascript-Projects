// Write your code here:
const convertToBaby = (arr => {
    const converted = [];
    let str = 'baby ';
    for(let i=0; i<= arr.length -1 ; i++){
      converted.push(str + arr[i])
    }
    return converted;
  })
  
  
  
  
  
  
  
  // When you're ready to test your code, uncomment the below and run:
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals)) 
  
  