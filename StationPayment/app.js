//Istasyon Ödeme Sistemi

let yakitAldi = true;
let odemeYapti = true;
let yakitAdi = 'Motorin';

let islemSonuc;

yakitAdi = yakitAdi || 'Benzin';

const getIstasyon = () => {
  if(yakitAldi === true){
    if(odemeYapti === true){
      if(yakitAdi === 'Benzin'){
        islemSonuc = `${yakitAdi} alındı ve ödeme tamamlandı`;
        return islemSonuc;
      }else if(yakitAdi === 'Motorin'){
        islemSonuc = `${yakitAdi} alındı ve ödeme tamamlandı`;
        return islemSonuc;
      }else{
        islemSonuc = `Bilinmeyen değer`;
        return islemSonuc;
      }
    }else{
      islemSonuc = 'Lütfen ödeme yapınız';
      return islemSonuc;
    }
  }else{
    islemSonuc = 'Lütfen yakıt alınız';
    return islemSonuc;
  }
}

const istasyon = getIstasyon();
console.log(istasyon);