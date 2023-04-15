import "normalize.css";
import "../scss/main.scss";

const header = document.querySelector('.header');
const placeholder = document.querySelector('.placeholder')
const hamburger = document.querySelector('.header__hamburger--js');
const navBlock = document.querySelector('.header__nav--js');

hamburger.addEventListener('click', ()=>{
    navBlock.classList.toggle('visible');
    navBlock.prepend(hamburger);
    header.prepend(placeholder)
    if(navBlock.classList == "header__nav header__nav--js"){
        header.prepend(hamburger);
        navBlock.prepend(placeholder)
    }
})