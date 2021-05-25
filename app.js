const plybtn = document.getElementById("icon1");
const stopBtn = document.getElementById("icon2");
const plyicon = document.getElementById("play");
const pauseicon = document.getElementById("pause");
const clock = document.getElementById("stopwatch");

let minute = 0;
let second = 0;
let mlsecond = 0;
let isCounting = false;
let intId;

const setClock = () => {
  clock.innerHTML = `${minute < 10 ? "0" + minute : minute}:${
    second < 10 ? "0" + second : second
  }:${mlsecond < 10 ? "0" + mlsecond : mlsecond}`;
};

function myTimer() {
  mlsecond += 1;
  if (mlsecond == 100) {
    mlsecond = 0;
    second += 1;
  }
  if (second == 60) {
    second = 0;
    minute += 1;
  }
  setClock();
}

const handlePlayClick = () => {
  if (isCounting === false) {
    plyicon.style.display = "none";
    pauseicon.style.display = "block";
    intId = setInterval(myTimer, 10);
    isCounting = true;
  } else if (isCounting === true) {
    plyicon.style.display = "block";
    pauseicon.style.display = "none";
    isCounting = false;
    clearInterval(intId);
  }
};
plybtn.addEventListener("click", handlePlayClick);
stopBtn.addEventListener("click", () => {
  clearInterval(intId);
  minute = 0;
  second = 0;
  mlsecond = 0;
  setClock();
});
