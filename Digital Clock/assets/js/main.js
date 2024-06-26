const dark_btn = document.querySelector(".dark-light");
const container_body = document.querySelector(".digital-clock");
const clock_btn = document.querySelector(".btn-clock");
const clock_Alerm = document.querySelector(".btn-alerm");
const clock_swatch = document.querySelector(".btn-stopwatch");
const clock_timer = document.querySelector(".btn-timer");

const sound = document.getElementById("sound");
const ampm = document.getElementById("ampm");

const time = document.querySelector(".time");
const alarm = document.querySelector(".alarm");
const stopwatch = document.querySelector(".stopwatch");
const timer = document.querySelector(".timer");

const buttons = document.querySelectorAll(".dc-btn");

const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const cancel = document.querySelector(".cancel");
const reset = document.querySelector(".reset");
const pause = document.querySelector(".pause");
const lap = document.querySelector(".lap");

const fButtons = document.querySelectorAll(".fuction-btn button");

const timeBtn = document.querySelector(".d-items");

// Digital clock Function
const digitalClock = () => {
  clockInit = setInterval(() => {
    sound.play();
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    ampm.innerHTML = "AM";
    if (hours > 12) {
      hours = hours - 12;
      ampm.innerHTML = "PM";
    } else if (hours >= 12) {
      ampm.innerHTML = "PM";
    } else if ((hours = 24)) {
      hours = 0 + 12;
      ampm.innerHTML = "PM";
    } else {
      ampm.innerHTML = "AM";
    }

    time.innerHTML = `
      ${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
  }, 1000);
};

digitalClock();

// Stop Watch Function
let sMinuts = 0;
let sSeconds = 0;
let sMiliSec = 0;
let int;

const stopWatchTime = () => {
  clearInterval(clockInit);

  stopwatch.innerHTML = `${sMinuts < 10 ? "0" + sMinuts : sMinuts}:${
    sSeconds < 10 ? "0" + sSeconds : sSeconds
  }:${sMiliSec < 10 ? "0" + sMiliSec : sMiliSec}`;

  sMiliSec++;

  if (sMiliSec == 100) {
    sSeconds++;
    sMiliSec = 0;
  }

  if (sSeconds >= 60) {
    sMinuts++;
    sSeconds = 0;
  }

  if (sMinuts == 60) {
    clearInterval(int);
  }
};

start.onclick = (e) => {
  if (!int) {
    int = setInterval(stopWatchTime, 10);
  }

  btnDisplay(e.target, stop, lap);

  lap.classList.remove("disable");
};

stop.onclick = (e) => {
  clearInterval(int);
  int = false;
  btnDisplay(e.target, start, reset);
};

lap.onclick = () => {
  let li = document.createElement("li");
  li.setAttribute("class", "laps");

  if (!int) {
    li.innerHTML = `  ${sMinuts < 10 ? "0" + sMinuts : sMinuts}:${
      sSeconds < 10 ? "0" + sSeconds : sSeconds
    }:${sMiliSec < 10 ? "0" + sMiliSec : sMiliSec}`;
  }

  li.innerHTML = ` ${number()}. ${sMinuts < 10 ? "0" + sMinuts : sMinuts}:${
    sSeconds < 10 ? "0" + sSeconds : sSeconds
  }:${sMiliSec < 10 ? "0" + sMiliSec : sMiliSec}`;

  let ul = document.querySelector(".lap-box ul");
  ul.appendChild(li);
};

reset.onclick = (e) => {
  clearInterval(int);
  sMinuts = 0;
  sSeconds = 0;
  sMiliSec = 0;
  stopwatch.innerHTML = "00:00:00";

  btnDisplay(e.target, start, lap);
  lap.classList.add("disable");

  let ulVal = "";
  document.querySelector(".lap-box ul").innerHTML = ulVal;

  resetNumberGenerator();
};

// Clock button action
clock_btn.onclick = (e) => {
  time.style.display = "block";
  alarm.style.display = "none";
  stopwatch.style.display = "none";
  timer.style.display = "none";
  timeBtn.firstElementChild.style.display = "block";
  timeBtn.lastElementChild.style.display = "none";

  activeColor(e.target);
  btnDisplay(e.target);

  digitalClock();
};

// Alerm button action
clock_Alerm.onclick = (e) => {
  time.style.display = "none";
  alarm.style.display = "block";
  stopwatch.style.display = "none";
  timer.style.display = "none";

  timeBtn.firstElementChild.style.display = "none";
  timeBtn.lastElementChild.style.display = "block";

  activeColor(e.target);
  btnDisplay(e.target, start, lap);

  clearInterval(clockInit);
};

// Stopwatch button action
clock_swatch.onclick = (e) => {
  time.style.display = "none";
  alarm.style.display = "none";
  stopwatch.style.display = "block";
  timer.style.display = "none";
  ampm.style.display = "none";

  timeBtn.firstElementChild.style.display = "none";
  timeBtn.lastElementChild.style.display = "block";

  btnDisplay(e.target, start, lap);
  activeColor(e.target);

  clearInterval(clockInit);
};

// Timer button action
clock_timer.onclick = (e) => {
  time.style.display = "none";
  alarm.style.display = "none";
  stopwatch.style.display = "none";
  timer.style.display = "block";

  timeBtn.firstElementChild.style.display = "none";
  timeBtn.lastElementChild.style.display = "block";

  ampm.innerHTML = "ti";
  activeColor(e.target);
  btnDisplay(e.target);
  clearInterval(clockInit);
};

// Dark Mode
dark_btn.onclick = () => {
  container_body.classList.toggle("dark");
};
