let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let HTMLMinutes = document.getElementById("minutes");
let HTMLSeconds = document.getElementById("seconds");
let HTMLMiliseconds = document.getElementById("Miliseconds");
let BtnStart = document.getElementById("BtnStart");
let BtnStop = document.getElementById("BtnStop");
let BtnClear = document.getElementById("BtnClear");

function startTimer() {
  miliseconds++;
  if (miliseconds <= 9) {
    HTMLMiliseconds.innerHTML = "0" + miliseconds;
  }
  if (miliseconds > 9) {
    HTMLMiliseconds.innerHTML = miliseconds;
  }
  if (miliseconds > 99) {
    seconds++;
    HTMLSeconds.innerHTML = "0" + seconds;
    miliseconds = 0;
    HTMLMiliseconds.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    HTMLSeconds.innerHTML = seconds;
  }
  if (seconds > 60) {
    minutes++;
    HTMLMinutes.innerHTML = "0" + minutes;
    seconds = 0;
    HTMLSeconds.innerHTML = "0" + 0;
  }
  if (minutes > 9) {
    HTMLMinutes.innerHTML = minutes;
  }
}

BtnStart.onclick = function Start() {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
};

BtnStop.onclick = function Stop() {
  clearInterval(interval);
};

BtnClear.onclick = function Clear() {
  clearInterval(interval);
  minutes = "00";
  seconds = "00";
  miliseconds = "00";
  HTMLMinutes.innerHTML = minutes;
  HTMLMiliseconds.innerHTML = miliseconds;
  HTMLSeconds.innerHTML = seconds;
};
