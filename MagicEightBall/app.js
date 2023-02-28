const userName = '';

userName ? console.log(`Hello ${userName}`) : console.log(`Hello`);

let userQuestion = '';

console.log(`${userName} adlı kullanıcı şunu sordu: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch(randomNumber){
    case 0:
        eightBall = 'Kesinlikle olacak. Şimdiden tebrikler!';
        break;
    case 1:
        eightBall = 'Yüksek ihtimalle olacak';
        break;
    case 2:
        eightBall = 'Muhtemelen bu olacak!';
        break;
    case 3:
        eightBall = 'Şuan için belirsiz bir durum gibi gözüküyor';
        break;
    case 4:
        eightBall = 'Üzgünüm! Muhtemelen bu olmayacak';
        break;
    case 5:
        eightBall = 'Üzgünüm! Yüksek ihtimalle olmayacak!';
        break;
    case 6:
        eightBall = 'Üzgünüm! kesinlikle olmayacak!';
        break;
    case 7:
        eightBall = 'Sistem buna ne yazık ki karar veremedi';
        break;
    default:
        eightBall = 'Geçersiz bir değer';
        break;
}

console.log(`${userName} adlı kullanıcının sorduğu (${userQuestion}) - Cevap: ${eightBall}`);