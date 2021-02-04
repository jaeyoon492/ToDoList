//querySelector로 document의 .js-form,.js-greetings,input을 불러왔다.
const form = document.querySelector(".js-form");
const greeting = document.querySelector(".js-greetings");
const input = form.querySelector("input");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function paintGreeting(text) {
  //4번
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `hello ${text}`;
}

function loadName() {
  //2번
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    //유저가 없는 경우.
  } else {
    //유저가 있는 경우.
    paintGreeting(currentUser); //3번
  }
}

function init() {
  //1번
  loadName();
}
init();
