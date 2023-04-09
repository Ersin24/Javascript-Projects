// Write your function here:
const finalGrade = (a, b, c) => {
    const average  = (a + b + c) / 3;
    if((a < 0 || a > 100) || (b < 0 || b > 100) || (c < 0 || c > 100)){
      return 'You have entered an invalid grade.';
    }else if(average < 60){
      return 'F';
    }else if(average < 70){
      return 'D';
    }else if(average < 80){
      return 'C';
    }else if(average < 90){
      return 'B';
    }else if(average <= 100){
      return 'A';
    }
  }
  
  console.log(finalGrade(100, 60, 50))
  
  
  
  // Uncomment the line below when you're ready to try out your function
  // console.log(finalGrade(99, 92, 95)) // Should print 'A'
  
  // We encourage you to add more function calls of your own to test your code!