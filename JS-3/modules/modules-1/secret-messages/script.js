//1. yöntem
// import {toggleHidden, colorChange} from '../modules/dom-functions.js';



import domFunc from '../modules/dom-functions.js';
const {colorChange, toggleHidden} = domFunc;

const mainButton = document.getElementById('mainButton');
const hiddenSection = document.getElementById('hiddenSection');



mainButton.addEventListener('click', () => {

    toggleHidden(hiddenSection, mainButton);
    colorChange(mainButton);
})