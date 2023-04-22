import "normalize.css";
import "../scss/main.scss";

const header = document.querySelector('.header');
const placeholder = document.querySelector('.placeholder')
const hamburger = document.querySelector('.header__hamburger--js');
const navBlock = document.querySelector('.header__nav--js');
const add = document.querySelector('.main__add--js');
const Creator = document.querySelector('.main__creator');
const creatorClose = document.querySelector('.close--js');
const colInput = document.querySelector('.creator__input--js');
const main = document.querySelector('.main');
const colButton = document.querySelector('.creator__submit--js');

hamburger.addEventListener('click', ()=>{
    navBlock.classList.toggle('visible');
    navBlock.prepend(hamburger);
    header.prepend(placeholder)
    if(navBlock.classList == "header__nav header__nav--js"){
        header.prepend(hamburger);
        navBlock.prepend(placeholder)
    }
})
//listeners to open, close column creator 
add.addEventListener('click', ()=>{
    Creator.classList.toggle('visibleCreator');
})
creatorClose.addEventListener('click', ()=>{
    Creator.classList.remove('visibleCreator');
})

colButton.addEventListener('click', ()=>{
    // creating elements
    const newColumn = document.createElement('section');
    const colHeader = document.createElement('h3');
    const colList = document.createElement('button');
    // creating text
    colList.innerText = ">";
    colHeader.innerText = colInput.value;
    //adding classes to new elements
    newColumn.classList.add('main__column');
    colList.classList.add('main__column--button')
    // adding text to columns and columns to main
    newColumn.appendChild(colHeader);
    newColumn.appendChild(colList);
    main.appendChild(newColumn);

    //listener to new column buttons
    colList.addEventListener('click', ()=>{
        
    })
});
