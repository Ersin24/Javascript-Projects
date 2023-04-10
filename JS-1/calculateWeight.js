// Write your function here:
const calculateWeight = (earthWeight , planet) => {
    let weight;
    if(planet === 'Mercury'){
      weight = earthWeight * 0.378;
      return weight;
    }else if(planet === 'Venus'){
      weight = earthWeight * 0.907;
      return weight;
    }else if(planet === 'Mars'){
      weight = earthWeight * 0.377;
      return weight;
    }else if(planet === 'Jupiter'){
      weight = earthWeight * 2.36;
      return weight;
    }else if(planet === 'Saturn'){
      weight = earthWeight * 0.916;
      return weight;
    }else{
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    }
  }
  
  console.log(calculateWeight(1,'Venus'));
  
  
  
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
  // console.log(calculateWeight(100, 'Jupiter')) // Should print 236
  
  // We encourage you to add more function calls of your own to test your code!