const toggleHidden = (hiddenElement, btnElement) => {
    if(hiddenElement.style.display === 'none'){
        hiddenElement.style.display = 'block';
        btnElement.innerHTML = 'Kapat'
    }else{
        hiddenElement.style.display = 'none'
        btnElement.innerHTML = 'Buraya Tıkla'

    }
}

const colorChange = (hiddenElement) => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    hiddenElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

//1. Yöntem
// export {toggleHidden, colorChange};

const resource = {toggleHidden, colorChange};
export default resource;