//localStorage는 string 형태만 저장한다.
const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

//생성한ToDo를 지우는 함수
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

//JSON.stringify()는 JS오브젝트를 String형태로 바꿔준다.
//로컬스토리지에 현 상태를 저장하는 함수
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

//input에 쓴 내용을 리스트화 하는 함수
function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1; //각 리스트에 숫자 1씩 더하기
  delBtn.innerText = "❌"; //버튼에 X자 텍스트적용
  delBtn.addEventListener("click", deleteToDo); //버튼을 누르면 해당 ToDo삭제함수 호출
  span.innerText = text;
  li.appendChild(delBtn); //리스트에 삭제버튼 넣기
  li.appendChild(span); //리스트에 할일적기
  li.id = newId;
  toDoList.appendChild(li);
  const todoObj = {
    text: text,
    id: newId,
  };
  toDos.push(todoObj); //toDos(배열)에 todoObj(오브젝트)를 추가하기
  saveToDos(); //saveToDos함수 호출
}

//TODO를 리스트화 할때 TODO를 분할하는 함수
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ""; //to do를 저장하면 또 새로작성하여 저장할수 있도록 만듬
}

//forEach는 배열이나 오브젝트의 내용들을 한번씩 실행시켜준다.
//로컬스토리지 내용을 불러오는 함수
function loadTodos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadTodos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
