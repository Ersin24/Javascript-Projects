class School{
    constructor(name, age, no){
        this._name = name;
        this._age = age;
        this._no = no;
    }

    getName(){
        return this._name;
    }

    getAge(){
        return this._age;
    }

    getNo(){
        return this._no;
    }

}

const ersinSchool = new School('ersin', 18, 20)

const schoolPromise = () => {
    return new Promise((resolve, reject) => {
        if(ersinSchool._age > 20){
            resolve('18 den büyük yaş')
        }else{
            reject('18 den küçük yaş')
        }
    })
}


console.log(schoolPromise())


///2

// console.log("This is the first line of code in app.js.");
// // Keep the line above as the first line of code
// // Write your code here:

// const usingSTO = () => {
//   console.log('Test')
// }

// setTimeout(usingSTO, 2000)

// // Keep the line below as the last line of code:
// console.log("This is the last line of code in app.js.");