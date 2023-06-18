import "../scss/main.scss";
import "normalize.css";

Array.prototype.removeValue = function (value) {
  let indexValue = this.indexOf(value);
  if (indexValue != -1) {
    this.splice(indexValue, 1);
  }
};

function appendDefault(valueObject, defaultValueObject) {
  if (valueObject === undefined || valueObject === null) {
    valueObject = {}
  }
  for (let [key, value] of Object.entries(defaultValueObject)) {
    if (!valueObject.hasOwnProperty(key)) {
      valueObject[key] = value;
    }
  }
  return valueObject;
}

const header = document.querySelector(".header");
const placeholder = document.querySelector(".placeholder");
const hamburger = document.querySelector(".header__hamburger--js");
const navBlock = document.querySelector(".header__nav--js");
const add = document.querySelector(".main__add--js");
const clear = document.querySelector(".main__clear--js");
const Creator = document.querySelector(".main__creator");
const creatorClose = document.querySelector(".close--js");
const colInput = document.querySelector(".creator__input--js");
const columnHolder = document.querySelector('.columnHolder');
const colSubmit = document.querySelector(".creator__submit--js");
const textEditor = document.querySelector(".task__editor--text");
const saveButton = document.querySelector('.nav--savebutton--js');
const loadButton = document.querySelector('.nav--loadbutton--js');
const deleteIcon = document.querySelector(".deleteIcon");
const moveIcon = document.querySelector(".moveIcon");
const editIcon = document.querySelector(".editIcon");
//setting variable for dragged element
let currentlyDragged;

let data = [];

saveButton.addEventListener('click', () => {
  let content = JSON.stringify(data);
  localStorage.setItem('data', content);
})

loadButton.addEventListener('click', () => {
  columnHolder.innerHTML = '';
  data.splice(0);
  let load = localStorage.getItem('data');
  let loadContent = JSON.parse(load);
  loadContent.forEach((column) => {
    createAddColumn(column);
  })

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
  constructor(newColumn, colHeader, flexDiv, colList, taskArea, deleteButton, columnData) {
    this.newColumn = newColumn;
    this.colHeader = colHeader;
    this.colList = colList;
    this.flexDiv = flexDiv;
    this.taskArea = taskArea;
    this.deleteButton = deleteButton;
    this.columnData = columnData;
  }
}
class task {
  constructor(newTask, taskDescription, moveButton, deleteButton, flexDiv, taskData) {
    this.newTask = newTask;
    this.taskDescription = taskDescription;
    this.moveButton = moveButton;
    this.deleteButton = deleteButton;
    this.flexDiv = flexDiv;
    this.taskData = taskData;
  }
}

function createColumn(loadedColData) {
  let columnData = appendDefault(loadedColData, {
    name: '',
    taskList: []
  });
  //Creating Column elements
  const newColumn = document.createElement("section");
  const flexDiv = document.createElement("div");
  const colHeader = document.createElement("h3");
  const colList = document.createElement("button");
  const taskArea = document.createElement("section");
  const deleteButton = document.createElement("button");
  newColumn.columnData = columnData;
  // creating text to columns button and headers
  colList.innerText = ">";
  colHeader.innerText = columnData.name;
  columnData.name = columnData.name;
  // creating task button
  const addTask = document.createElement("button");
  addTask.classList.add("column__task");
  addTask.innerText = "Add task";
  deleteButton.innerHTML = deleteIcon.innerHTML + "Delete column";
  taskArea.appendChild(addTask);
  taskArea.appendChild(deleteButton);

  flexDiv.appendChild(colHeader);
  flexDiv.appendChild(colList);
  newColumn.appendChild(flexDiv);
  newColumn.appendChild(taskArea);

  //listener to task and delete button
  addTask.addEventListener("click", (e) => {
    let newTask = addTask1(columnData.taskList);
    columnData.taskList.push(newTask.taskData);
    let test = e.target.parentElement;
    test.prepend(newTask.newTask);
    test.prepend(e.target);
  });
  deleteButton.addEventListener("click", (element) => {
    let parentColumn = element.currentTarget.parentElement.parentElement;
    parentColumn.remove();
    data.removeValue(columnData);
    if (columnHolder.childElementCount == 0) {
      clear.style.display = "none";
    }
  });
  //listener to new column buttons
  colList.addEventListener("click", () => {
    colList.classList.toggle("opened");
    taskArea.classList.toggle("taskOpen");
  });
  //listener to handle droping tasks
  taskArea.addEventListener('dragover', (e) => {
    e.preventDefault();
  })
  taskArea.addEventListener('dragenter', () => {
    newColumn.style.backgroundColor = 'rgba(170, 204, 206, 0.579)';
  })
  taskArea.addEventListener('dragleave', () => {
    newColumn.style.backgroundColor = 'rgba(208, 251, 254, 0.579)';
  })
  taskArea.addEventListener('drop', (e) => {
    e.preventDefault();
    newColumn.style.backgroundColor = 'rgba(208, 251, 254, 0.579)';
    e.currentTarget.insertBefore(currentlyDragged, e.currentTarget.lastChild);
    currentlyDragged.taskPreviousDataContainer.removeValue(currentlyDragged.taskData);
    columnData.taskList.push(currentlyDragged.taskData);
  })

  columnData.taskList.forEach((e) => {
    newTask = addTask1(columnData.taskList, e);
    taskArea.prepend(newTask.newTask);
    taskArea.prepend(addTask);
  })

  //constructing column
  let Column = new column(
    newColumn,
    colHeader,
    flexDiv,
    colList,
    taskArea,
    deleteButton,
    columnData
  );
  addColumnClasses(Column);
  columnsContainer.push(Column);
  return Column;
}
//move button list
function buttonListCreator(root, taskRoot, dataContainer, taskData) {
  for (let i = 0; i < columnsContainer.length; i++) {
    const button = document.createElement("button");
    button.classList.add('move__list--button');
    button.innerHTML = columnsContainer[i].flexDiv.children[0].innerHTML;
    button.addEventListener("click", () => {
      let test = columnsContainer[i].taskArea.firstChild;
      columnsContainer[i].taskArea.insertBefore(taskRoot, test.nextSibling);
      dataContainer.removeValue(taskData);
      columnsContainer[i].columnData.taskList.push(taskData);
    });
    root.append(button);
  }
}

function addTask1(dataContainer, loadedTaskData) {
  let taskData = appendDefault(loadedTaskData, { description: '' })
  //Creating Column elements
  const newTask = document.createElement("section");
  const taskDescription = document.createElement("span");
  const moveButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");
  const flexDiv = document.createElement("div");
  newTask.taskData = taskData;
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

  taskDescription.innerText = taskData.description;
  //buttons listeners
  deleteButton.addEventListener("click", (e) => {
    let root = e.currentTarget.parentElement.parentElement;
    root.remove();
    dataContainer.removeValue(taskData);
  });
  //dragging listener
  newTask.setAttribute('draggable', "true");
  newTask.addEventListener('dragstart', (e) => {
    currentlyDragged = e.currentTarget;
    currentlyDragged.taskPreviousDataContainer = dataContainer;
    currentlyDragged.taskData = taskData;
  })

  moveButton.addEventListener("click", () => {
    const moveList = document.querySelector(".task__move--list");
    moveList.classList.toggle("taskEditorOpened");

    let taskRoot = moveButton.parentElement.parentElement;

    if (moveList.classList == "task__move--list taskEditorOpened") {
      moveList.append(moveButton);
      const list = document.querySelector(".move__list");
      buttonListCreator(list, taskRoot, dataContainer, taskData);
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
      taskData.description = textEditor.value;
      textEditor.value = "";
    }
  });

  let Task = new task(newTask, taskDescription, moveButton, deleteButton, flexDiv, taskData);
  addTaskClasses(Task);
  taskContainer.push(Task.newTask);
  return Task;
}

function createAddColumn(columnData) {
  let column1 = createColumn(columnData);
  data.push(column1.columnData);
  columnHolder.appendChild(column1.newColumn);
  if (columnHolder.childElementCount > 0) {
    clear.style.display = "block";
  }
}

colSubmit.addEventListener("click", () => {
  // creating columns
  let columnName = colInput.value;
  createAddColumn({ name: columnName });
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

if (window.innerWidth > 800) {
  const testing = document.querySelector('.main__buttonsFlex')
  header.appendChild(testing);
}