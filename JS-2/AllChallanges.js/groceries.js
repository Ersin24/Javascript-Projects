// Write function below
const groceries = arr => {
    let text = '';
    for(let i=0; i<arr.length; i++){
      text += arr[i].item;
      if(i < list.length - 2){
        text += ', ';
      }else if(i == arr.length -2){
        text += ' and ';
      }
    }
  
    return text;
  }
  
  
  const show = [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ;
  
  groceries(show)