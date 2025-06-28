let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

const display = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

const startAudio = new Audio("audio1.mp3")

function updateDisplay() {
  const m = minutes < 10 ? "0" + minutes : minutes;
  const s = seconds < 10 ? "0" + seconds : seconds;
  display.textContent = `${m}:${s}`;
}

function startTimer() {
  startAudio.play()
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        isRunning = false;
        alert("Time's up!");
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  startAudio.play()
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  minutes = 25;
  seconds = 0;
  updateDisplay();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);


updateDisplay();
