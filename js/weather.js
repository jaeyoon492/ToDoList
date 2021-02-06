const API_KEY = "c82f640123da7eb005ea5e2c04d38655";
const COORDS = "cords";

function getweather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
}

//위도,경도를 스토리지에 저장.
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

//위치가 있는경우 위도,경도를 오브젝트에 저장, saveCoords(coordsObj)함수 호출
function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    위도: latitude,
    경도: longitude,
  };
  saveCoords(coordsObj);
  getweather(latitude, longitude);
}

//위치가 없는경우(위치찾기를 불허할때)
function handleGeoError() {
  console.log("Cant access geo location");
}

//위도와 경도를 찾는 함수
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

//스토리지에 COORDS가 없으면 askForCoords()함수 호출
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getweather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

//loadCoords()함수를 호출
function init() {
  loadCoords();
}

init();
