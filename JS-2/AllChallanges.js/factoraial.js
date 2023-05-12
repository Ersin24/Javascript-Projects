// Write function below
const factorial = num => {
    let result = 1;
 
    for(let x = num; num > 0; num--){
      result *= num 
    }
 
    return result;
 }
 
 console.log(factorial(5))