// script.js
let startTime = 0, elapsedTime = 0, timerInterval;
const timeDisplay = document.getElementById("time-display");
const lapsContainer = document.getElementById("laps");

function formatTime(time) {
  const ms = Math.floor((time % 1000) / 10);
  const s = Math.floor((time / 1000) % 60);
  const m = Math.floor((time / 60000) % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}:${String(ms).padStart(2, "0")}`;
}

function updateDisplay() {
  timeDisplay.textContent = formatTime(elapsedTime);
}

document.getElementById("start-btn").addEventListener("click", () => {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
  }
});

document.getElementById("pause-btn").addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

document.getElementById("reset-btn").addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  updateDisplay();
  lapsContainer.innerHTML = "";
});

document.getElementById("lap-btn").addEventListener("click", () => {
  if (timerInterval) {
    const lapTime = document.createElement("div");
    lapTime.textContent = `Lap: ${formatTime(elapsedTime)}`;
    lapsContainer.appendChild(lapTime);
  }
});

let ch1=document.getElementById("start-btn");
function cb1(){
    ch1.style.backgroundColor="red";
    res.style.backgroundColor="lightgreen";
    ch3.style.backgroundColor="lightgreen";
    
}
let res=document.getElementById("reset-btn");
function cb2(){
    ch1.style.backgroundColor="lightgreen";
    ch3.style.backgroundColor="lightgreen";
}
let ch3=document.getElementById("pause-btn");
function cb3(){
    ch3.style.backgroundColor="red";
    ch1.style.backgroundColor="lightgreen";
    
    res.style.backgroundColor="lightgreen";
}