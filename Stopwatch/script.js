
let timer;
let seconds = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      displayTime();
    }, 1000);
  }
}

function stop() {
  isRunning = false;
  clearInterval(timer);
}

function reset() {
  stop();
  seconds = 0;
  displayTime();
}

function displayTime() {
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  document.getElementById("display").innerText =
    (hrs < 10 ? "0" + hrs : hrs) + ":" +
    (mins < 10 ? "0" + mins : mins) + ":" +
    (secs < 10 ? "0" + secs : secs);
}