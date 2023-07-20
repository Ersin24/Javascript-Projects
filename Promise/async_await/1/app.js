const brainstormDinner = require('./library.js')

// Klasik promise version

function nativePromiseDinner(){
    brainstormDinner().then((meal) => {
        console.log(`I'm going to make ${meal} for dinner`)
    })
}

nativePromiseDinner();


//async/await version

//1. gösterim
// const announceDinner = async () => {
//     let meal = await brainstormDinner()
//     console.log(`I'm going to make ${meal} for dinner`)
// }


async function announceDinner(){
    let meal = await brainstormDinner()
    console.log(`I'm going to make ${meal} for dinner`)
}

announceDinner()