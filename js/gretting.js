//querySelector로 document의 .js-form,.js-greetings,input을 불러왔다.
const form = document.querySelector(".js-form");
const greeting = document.querySelector(".js-greetings");
const input = form.querySelector("input");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

//currentValue를 로컬스토리지에 저장.
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

//preventDefault는 현재 event의 기본 동작(새로고침)을 중단할때 쓴다.
//input.value 인풋안에 내용을 currentValue에 저장.
//paintGreeting, saveName함수들을 호출
function handleSubmit(event) {
  //4번
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

//form class를 추가한다. 입력란 생성함수.
//submit(엔터)하면 handleSubmit함수 호출
function askForName() {
  //3번
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

//form클래스의 입력창을 제거
//greeting에 기존(form)에 입력한 내용을 `hello ${text}` 형식으로 저장.
function paintGreeting(text) {
  //5번
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `hello ${text}`;
}

//로컬스토리지에서 USER_LS를 꺼내온다. 없으면 askForName함수 호출
function loadName() {
  //2번
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    //유저가 있는 경우.
    paintGreeting(currentUser);
  }
}

//loadName함수를 호출
function init() {
  //1번
  loadName();
}
init();
