//localStorage는 string 형태만 저장한다.
const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

//JSON.stringify()는 JS오브젝트를 String형태로 바꿔준다.
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const todoObj = {
    text: text,
    id: newId,
  };
  toDos.push(todoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ""; //to do를 저장하면 또 새로작성하여 저장할수 있도록 만듬
}
function loadTodos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos === null) {
  }
}

function init() {
  loadTodos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
