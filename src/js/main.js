import "normalize.css";
import "../scss/main.scss";

const header = document.querySelector('.header');
const placeholder = document.querySelector('.placeholder')
const hamburger = document.querySelector('.header__hamburger--js');
const navBlock = document.querySelector('.header__nav--js');
const add = document.querySelector('.main__add--js');
const clear = document.querySelector('.main__clear--js');
const Creator = document.querySelector('.main__creator');
const creatorClose = document.querySelector('.close--js');
const colInput = document.querySelector('.creator__input--js');
const main = document.querySelector('.main');
const colSubmit = document.querySelector('.creator__submit--js');

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

colSubmit.addEventListener('click', ()=>{
    // creating elements
    const flexDiv = document.createElement('div')
    const newColumn = document.createElement('section');
    const colHeader = document.createElement('h3');
    const colList = document.createElement('button');
    const taskArea = document.createElement('section');
    // creating text
    colList.innerText = ">";
    colHeader.innerText = colInput.value;
    //adding classes to new elements
    newColumn.classList.add('main__column');
    colList.classList.add('main__column--button');
    taskArea.classList.add('main__column--task');
    flexDiv.classList.add('test')
    colHeader.classList.add('test__header')
    // adding text to columns and columns to main

    // adding flexDiv to position elements of column 
    // above taskArea and just simplify it
    flexDiv.appendChild(colHeader);
    flexDiv.appendChild(colList);
    newColumn.appendChild(flexDiv);
    newColumn.appendChild(taskArea)
    main.appendChild(newColumn);

    //listener to new column buttons
    colList.addEventListener('click', ()=>{
        colList.classList.toggle('opened');
        taskArea.classList.toggle('taskOpen');
    })
    if(main.childElementCount == 4){
        clear.style.display = "block";
    }
});

//clearing created columns(all at one click)
clear.addEventListener('click', (e)=>{
    const columns = document.querySelectorAll('.main__column');
    columns.forEach((e)=>{
        e.remove()
    })
    clear.style.display = "none"
})