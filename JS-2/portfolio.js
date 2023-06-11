const rand = () => {
    return Math.floor(Math.random() * 4)
}



const myLuck = (arr) => console.log(arr[rand()]);


const result = ['Kötü bir gün', 'olabilir', 'güzel', 'harika'];



myLuck(result)