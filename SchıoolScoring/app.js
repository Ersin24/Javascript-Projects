let userName = '';

userName ? userName=userName : userName='Kullanıcı';

console.log(`Merhaba ${userName}`);


let okulNo = Math.floor(Math.random() * 999);

let kacinciSinif = 1;

let notOrtalama = 68;

let basariSonuc= '';

if(kacinciSinif){
  if(kacinciSinif === 1){
    okulNo += 1000;
  }else if(kacinciSinif ===2){
    okulNo += 2000;
  }else if(kacinciSinif === 3){
    okulNo += 3000;
  }else if(kacinciSinif){
    okulNo += 4000;
  }
}else{
  console.log('Geçerli bir sınıf adı giriniz')
}

if(notOrtalama <= 100 && notOrtalama >=85){
  basariSonuc = 'Pekiyi';
}else if(notOrtalama < 85 && notOrtalama >= 70){
  basariSonuc = 'İyi';
}else if(notOrtalama < 70 && notOrtalama >= 55){
  basariSonuc = 'Orta';
}else if(notOrtalama < 55 && notOrtalama >= 45){
  basariSonuc = 'Geçer';
}else if(notOrtalama < 45 && notOrtalama >= 0){
  basariSonuc = 'Kalır';
}else{
  basariSonuc = 'Geçersiz bir değer';
}


console.log(`Kullanıcı adı: ${userName}`);
console.log(`Sınıf: ${kacinciSinif}`);
console.log(`Okul Numarası: ${okulNo}`);
console.log(`Not Ortalaması: ${notOrtalama}`);
console.log(`Durumu: ${basariSonuc}`);