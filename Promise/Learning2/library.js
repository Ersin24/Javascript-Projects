const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
}

const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let inStock = order.every(item => inventory[item[0]] >= item[1])
            if(inStock){
                resolve('Thank you. You order was succesful.')
            }else{
                reject(`We're sorry. You order could not be completed because some ietms are sold out`)
            }
        }, 1000)
    })
}

module.exports = {checkInventory}