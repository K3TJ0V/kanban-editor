import "normalize.css";
import "../scss/main.scss";

const header = document.querySelector(".header");
const placeholder = document.querySelector(".placeholder");
const hamburger = document.querySelector(".header__hamburger--js");
const navBlock = document.querySelector(".header__nav--js");
const add = document.querySelector(".main__add--js");
var clear = document.querySelector(".main__clear--js");
const Creator = document.querySelector(".main__creator");
const creatorClose = document.querySelector(".close--js");
const colInput = document.querySelector(".creator__input--js");
const main = document.querySelector(".main");
const columnHolder = document.querySelector('.columnHolder');
const colSubmit = document.querySelector(".creator__submit--js");
const textEditor = document.querySelector(".task__editor--text");
const saveButton = document.querySelector('.nav--savebutton--js');
const loadButton = document.querySelector('.nav--loadbutton--js');

const deleteIcon = document.querySelector(".deleteIcon");
const moveIcon = document.querySelector(".moveIcon");
const editIcon = document.querySelector(".editIcon");

saveButton.addEventListener('click', ()=>{
  let content = JSON.stringify(columnHolder.innerHTML);
  localStorage.setItem('savedContent', content);
  
})
loadButton.addEventListener('click', ()=>{
  let load = localStorage.getItem('savedContent');
  let loadContent = JSON.parse(load)
  let content = document.querySelector('.columnHolder');
  content.innerHTML += loadContent;
  if (columnHolder.childElementCount > 0) {
    clear.style.display = "block";
  }

})

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
//column container to hold their headers
let columnsContainer = [];
let taskContainer = [];

class column {
  constructor(newColumn, colHeader, flexDiv, colList, taskArea, deleteButton) {
    this.newColumn = newColumn;
    this.colHeader = colHeader;
    this.colList = colList;
    this.flexDiv = flexDiv;
    this.taskArea = taskArea;
    this.deleteButton = deleteButton;
  }
}
class task {
  constructor(newTask, taskDescription, moveButton, deleteButton, flexDiv) {
    this.newTask = newTask;
    this.taskDescription = taskDescription;
    this.moveButton = moveButton;
    this.deleteButton = deleteButton;
    this.flexDiv = flexDiv;
  }
}

function createColumn() {
  //Creating Column elements
  const newColumn = document.createElement("section");
  const flexDiv = document.createElement("div");
  const colHeader = document.createElement("h3");
  const colList = document.createElement("button");
  const taskArea = document.createElement("section");
  const deleteButton = document.createElement("button");
  // creating text to columns button and headers
  colList.innerText = ">";
  colHeader.innerText = colInput.value;
  // creating task button
  const addTask = document.createElement("button");
  addTask.classList.add("column__task");
  addTask.innerText = "Add task";
  deleteButton.innerHTML = deleteIcon.innerHTML + "Delete column";
  taskArea.appendChild(addTask);
  taskArea.appendChild(deleteButton);
  //listener to task and delete button
  addTask.addEventListener("click", (e) => {
    newTask = addTask1();
    let test = e.target.parentElement;
    test.prepend(newTask.newTask);
    test.prepend(e.target);
  });
  deleteButton.addEventListener("click", (element) => {
    let parentColumn = element.target.parentElement.parentElement;
    console.log(parentColumn);
    parentColumn.remove();
    if(main.childElementCount == 5){
      clear.style.display = "none";
    }
  });
  //listener to new column buttons
  colList.addEventListener("click", () => {
    colList.classList.toggle("opened");
    taskArea.classList.toggle("taskOpen");
  });
  //constructing column
  Column = new column(
    newColumn,
    colHeader,
    flexDiv,
    colList,
    taskArea,
    deleteButton
  );
  addColumnClasses(Column);
  columnsContainer.push(Column);
  return Column;
}
//move button list
function buttonListCreator(root, taskRoot) {
  for (let i = 0; i < columnsContainer.length; i++) {
    const button = document.createElement("button");
    button.classList.add('move__list--button');
    button.innerHTML = columnsContainer[i].flexDiv.children[0].innerHTML;
    button.addEventListener("click", () => {
      let test = columnsContainer[i].taskArea.firstChild;
      columnsContainer[i].taskArea.insertBefore(taskRoot, test.nextSibling);
    });
    root.append(button);
  }
}

function addTask1() {
  //Creating Column elements
  const newTask = document.createElement("section");
  const taskDescription = document.createElement("span");
  const moveButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");
  const flexDiv = document.createElement("div");
  //button values
  editButton.innerHTML = editIcon.innerHTML;
  moveButton.innerHTML = moveIcon.innerHTML;
  deleteButton.innerHTML = deleteIcon.innerHTML;
  //appending elements
  editButton.classList.add("task__edit");
  flexDiv.appendChild(editButton);
  flexDiv.appendChild(deleteButton);
  flexDiv.appendChild(moveButton);
  flexDiv.classList.add("task__flex");
  newTask.appendChild(taskDescription);
  newTask.appendChild(flexDiv);
  //buttons listeners
  deleteButton.addEventListener("click", (e) => {
    let root = e.currentTarget.parentElement.parentElement;
    root.remove();
  });

  moveButton.addEventListener("click", () => {
    const moveList = document.querySelector(".task__move--list");
    moveList.classList.toggle("taskEditorOpened");

    let taskRoot = moveButton.parentElement.parentElement;

    if (moveList.classList == "task__move--list taskEditorOpened") {
      moveList.append(moveButton);
      const list = document.querySelector(".move__list");
      buttonListCreator(list, taskRoot);
    } else {
      flexDiv.append(moveButton);
      const list = document.querySelector(".move__list");
      list.innerHTML = "";
    }
  });
  editButton.addEventListener("click", () => {
    const taskEditor = document.querySelector(".task__editor");
    taskEditor.classList.toggle("taskEditorOpened");
    if (taskEditor.classList == "task__editor taskEditorOpened") {
      taskEditor.append(editButton);
    } else {
      flexDiv.prepend(editButton);
      taskDescription.innerHTML = textEditor.value;
      textEditor.value = "";
    }
  });

  Task = new task(newTask, taskDescription, moveButton, deleteButton, flexDiv);
  addTaskClasses(Task);
  taskContainer.push(Task.newTask);
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
  columnHolder.appendChild(column1.newColumn);
  if (columnHolder.childElementCount > 0) {
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
    columnsContainer = [];
  });
  clear.style.display = "none";
});

function addColumnClasses(column1) {
  column1.newColumn.classList.add("main__column");
  column1.colList.classList.add("main__column--button");
  column1.taskArea.classList.add("main__column--task");
  column1.flexDiv.classList.add("column__flex");
  column1.colHeader.classList.add("column__flex--header");
  column1.deleteButton.classList.add("column__flex--deleteButton");
}
function addTaskClasses(task) {
  task.newTask.classList.add("task");
  task.taskDescription.classList.add("task__description");
  task.moveButton.classList.add("task__move");
  task.deleteButton.classList.add("task__delete");
}
