let greeting;
const getSleepHours = (day) => {
  if(day === 'monday'){
    return 8;
  }else if(day === 'tuesday' || day === 'wednesday' || day === 'thursday' ){
    return 8
  }else if(day === 'friday' || day === 'saturday'){
    return 8
  }else if(day === 'sunday'){
    return 8
  }else {
    greeting = 'Herhangi bir sonuç bulunamadı';
    return greeting;
  }
};

const getActualSleepHours = () => {
  return (getSleepHours('sunday') + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday'))
}

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours){
    return greeting = 'Perfect amount of sleep';
  }else if(actualSleepHours > idealSleepHours){
    return greeting = 'Çok fazla uyku' + ' ' + actualSleepHours + ' ' + idealSleepHours;
  }else if(actualSleepHours < idealSleepHours){
    return greeting = 'Çok az uyku';
  }else{
    return greeting = 'Invalid value'
  }
}

console.log(calculateSleepDebt());










