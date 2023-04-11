// Write function below
const isEven = val => {
    let result = Number.isInteger(val / 2);
    if(result){
      return true;
    }else{
      return false;
    }
  }
  
  console.log(isEven(3));