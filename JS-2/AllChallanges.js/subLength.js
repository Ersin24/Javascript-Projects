// Write function below
const subLength = (text, goal) => {
    let firstIndex = text.indexOf(goal);
    let secondIndex = text.indexOf(goal, (firstIndex + 1));
    let thirdIndex = text.indexOf(goal, (secondIndex + 1));
    let totalLength = secondIndex - firstIndex + 1;
  
    if(thirdIndex > 0 || firstIndex === -1 || secondIndex === -1){
      return 0;
    }
    if(firstIndex && secondIndex){
      return totalLength;
    }
  }
  
  console.log(subLength('uncopyrightable', 'u'))