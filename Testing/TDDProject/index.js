const Calculate = {
    factorial(inputNumber){
      if(inputNumber === 0){
        return 1;
      }
  
      let result = 1;
  
      for(let i = inputNumber ; i > 0 ; i--){
        result *= i;
      }
  
      return result;
    }
  }
  
  module.exports = Calculate;
  
  
  