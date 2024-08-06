const startElement = document.getElementById("start");
const stopElement = document.getElementById("stop");
const resetElement = document.getElementById("restart");
const timerElement = document.getElementById("timer");

let timer = 25 * 60;
let startTimerID = 0;

let startTimerNotClicked = true;
let stopBtnClicked = false;
// let resetBtnClicked = false;

startElement.onclick = () => {
  if (startTimerNotClicked) {
    startTimerID = startTimer();
    startTimerNotClicked = false;
  } else {
    alert("Oh! Ho! Timer Already Started!");
  }
};

stopElement.onclick = () => stopTimer();

reset.onclick = () => {
  window.location.reload();
  alert("Timer Reset.");
};

const startTimer = () => {
  let timePassed = timer;

  const intervalID = setInterval(() => {
    let minute, second;
    minute = Math.floor(timePassed / 60);
    second = timePassed % 60;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    timerElement.innerHTML = `${minute}:${second}`;
    // console.log(`${minute}:${second}`);

    if (timePassed-- < 0) {
      clearInterval(startTimerID);
      alert("Time UP!");
      timePassed = 0;
      startTimerNotClicked = true;
    }
  }, 1000);

  return intervalID;
};

const stopTimer = () => {
  if (startTimerNotClicked === false) {
    clearInterval(startTimerID);
    alert("Timer Stopped!");
    timePassed = 0;
    startTimerNotClicked = true;
  } else {
    alert("Timer isn't stated yet!");
  }
};
