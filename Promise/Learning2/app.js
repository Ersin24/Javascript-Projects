const {checkInventory} = require('./library.js')

const order = [['sunglasses', 1], ['bags', 2]]

const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue)
}

const handleFailure = (rejectedValue) => {
    console.log(rejectedValue)
}
//1.aşama
// checkInventory(order).then(handleSuccess, handleFailure)

//2.aşama
checkInventory(order).then(handleSuccess).catch(handleFailure)