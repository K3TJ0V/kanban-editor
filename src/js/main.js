import "normalize.css";
import "../scss/main.scss";

const header = document.querySelector(".header");
const placeholder = document.querySelector(".placeholder");
const hamburger = document.querySelector(".header__hamburger--js");
const navBlock = document.querySelector(".header__nav--js");
const add = document.querySelector(".main__add--js");
const clear = document.querySelector(".main__clear--js");
const Creator = document.querySelector(".main__creator");
const creatorClose = document.querySelector(".close--js");
const colInput = document.querySelector(".creator__input--js");
const main = document.querySelector(".main");
const colSubmit = document.querySelector(".creator__submit--js");

hamburger.addEventListener("click", () => {
  navBlock.classList.toggle("visible");
  navBlock.prepend(hamburger);
  header.prepend(placeholder);
  if (navBlock.classList == "header__nav header__nav--js") {
    header.prepend(hamburger);
    navBlock.prepend(placeholder);
  }
});

//listeners to open, close column creator
add.addEventListener("click", () => {
  Creator.classList.toggle("visibleCreator");
});
creatorClose.addEventListener("click", () => {
  Creator.classList.remove("visibleCreator");
});

class column {
  constructor(newColumn, colHeader, flexDiv, colList, taskArea) {
    this.newColumn = newColumn;
    this.colHeader = colHeader;
    this.colList = colList;
    this.flexDiv = flexDiv;
    this.taskArea = taskArea;
  }
}
class task{
    constructor(newTask, taskDescription, moveButton, deleteButton, flexDiv){
        this.newTask = newTask;
        this.taskDescription = taskDescription;
        this.moveButton = moveButton;
        this.deleteButton = deleteButton;
    }
}

function createColumn() {
  //Creating Column elements
  const newColumn = document.createElement("section");
  const flexDiv = document.createElement("div");
  const colHeader = document.createElement("h3");
  const colList = document.createElement("button");
  const taskArea = document.createElement("section");
  // creating text to columns button and headers
  colList.innerText = ">";
  colHeader.innerText = colInput.value;
  // creating task button
  const addTask = document.createElement("button");
  addTask.classList.add("column__task");
  addTask.innerText = "Add task";
  taskArea.appendChild(addTask);

  addTask.addEventListener("click", () => {
    newTask = addTask1();
    taskArea.appendChild(newTask.newTask);

  });
  
  //listener to new column buttons
  colList.addEventListener("click", () => {
    colList.classList.toggle("opened");
    taskArea.classList.toggle("taskOpen");
  });
  //constructing column
  Column = new column(newColumn, flexDiv, colHeader, colList, taskArea);
  addColumnClasses(Column);
  return Column;
}

function addTask1() {
    const newTask = document.createElement('section');
    const taskDescription = document.createElement('span');
    const moveButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    const flexDiv = document.createElement('div');
    moveButton.innerText = "move"
    deleteButton.innerText = "delete"
    flexDiv.appendChild(moveButton);
    flexDiv.appendChild(deleteButton);
    flexDiv.classList.add('task__flex')
    newTask.appendChild(taskDescription)
    newTask.appendChild(flexDiv);

    Task = new task(newTask, taskDescription, moveButton, deleteButton, flexDiv);
    addTaskClasses(Task);
    return Task;
}

colSubmit.addEventListener("click", () => {
  // creating columns
  let column1 = createColumn();

  // adding flexDiv to position elements of column
  // above taskArea and just simplify it
  column1.flexDiv.appendChild(column1.colHeader);
  column1.flexDiv.appendChild(column1.colList);
  column1.newColumn.appendChild(column1.flexDiv);
  column1.newColumn.appendChild(column1.taskArea);
  main.appendChild(column1.newColumn);
  if (main.childElementCount == 4) {
    clear.style.display = "block";
  }
  //setting empty input after adding new column
  colInput.value = "";
});

//clearing created columns(all at one click)
clear.addEventListener("click", () => {
  const columns = document.querySelectorAll(".main__column");
  columns.forEach((e) => {
    e.remove();
  });
  clear.style.display = "none";
});

function addColumnClasses(column1) {
  column1.newColumn.classList.add("main__column");
  column1.colList.classList.add("main__column--button");
  column1.taskArea.classList.add("main__column--task");
  column1.flexDiv.classList.add("test");
  column1.colHeader.classList.add("test__header");
}
function addTaskClasses(task){
    task.newTask.classList.add('task');
    task.taskDescription.classList.add('task__description');
    task.moveButton.classList.add('task__move');
    task.deleteButton.classList.add('task__delete');
}