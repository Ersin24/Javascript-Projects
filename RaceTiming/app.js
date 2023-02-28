let raceNumber = Math.floor(Math.random() * 1000);

let erkenKayit = true;

let runnerAge = 13;

if(erkenKayit && runnerAge >= 18){
    raceNumber += 1000;
    console.log(`9: 30'da başlayacak ve numarası ${raceNumber} `)
}else if(!erkenKayit && runnerAge >= 18){
    console.log(`11:00 da başlayacak ve numarası ${raceNumber}`)
}else if(runnerAge < 18){
    console.log(`12:30 da başlayacak ve numarası ${raceNumber}`)
}else{
  console.log(`Lütfen geçerli bir değer giriniz!`)
}

