//쿼리를 통해 html의 엘리멘트를 불러왔다.
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

//함수 getTime을 html의 h1엘리먼트에 적용
/*seconds의 숫자가 10이하 일때 한자리수로 나오는것을 고치기 위해 삼항연산자를 이용해 수정
풀이:if(seconds가 10보다 작으면? seconds앞에 0을 붙이거나,else(그냥 seconds으로 출력)(:는 else기호)*/
function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

//setInterval을 통헤 주기적인 실행(호출)을 할수있다.
function init() {}
getTime();
setInterval(getTime, 1000);
init();
