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

const fButtons = document.querySelectorAll(".f-buttons button");
const timeBtn = document.querySelector(".d-items");
const lapBox = document.querySelector(".lap-box");
const timerBox = document.querySelector(".timer-box");

const t_start = document.querySelector(".t-start");
const t_cancel = document.querySelector(".t-cancel");
const t_pause = document.querySelector(".t-pause");
const t_resume = document.querySelector(".t-resume");
const timeForm = document.getElementById("timer-form");

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

  clearInterval(timerInt);
  timer.innerHTML = "00:00:00";

  t_cancel.classList.remove("visibility");
  t_pause.classList.remove("visibility");
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
  ampm.style.display = "block";

  timeBtn.style.display = "none";

  timerBox.style.display = "none";
  lapBox.style.display = "none";

  activeColor(e.target);
  btnDisplay(e.target);

  digitalClock();
  clearInterval(timerInt);
  clearInterval(int);
};

// Date button action
clock_Alerm.onclick = (e) => {
  time.style.display = "none";
  alarm.style.display = "block";
  stopwatch.style.display = "none";
  timer.style.display = "none";
  ampm.style.display = "block";

  timerBox.style.display = "none";
  lapBox.style.display = "none";
  start.classList.remove("visibility");
  lap.classList.remove("visibility");

  activeColor(e.target);
  clearInterval(clockInit);

  const cDate = new Date();

  let date = cDate.getDate();
  let month = cDate.getMonth() + 1;
  let year = cDate.getFullYear();

  let dayofWeek = cDate.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  let dayName = days[dayofWeek];
  alarm.innerHTML = `${date}:${month}:${year}`;

  ampm.innerHTML = dayName;
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
  timerBox.style.display = "none";
  lapBox.style.display = "block";

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
  ampm.style.display = "none";

  timeBtn.firstElementChild.style.display = "block";
  timeBtn.lastElementChild.style.display = "none";
  timerBox.style.display = "block";
  lapBox.style.display = "none";

  activeColor(e.target);
  btnDisplay(e.target);
  clearInterval(clockInit);

  if (tInt == true) {
    t_cancel.classList.add("visibility");
    t_pause.classList.add("visibility");
  }

  // if (h == 0 || m == 0 || s == 0) {
  //   tInt = false;
  // }

  if (tInt == false) {
    t_cancel.classList.remove("visibility");
    t_pause.classList.remove("visibility");
  }
};

//Start Btn - OnSubmit form
timeForm.onsubmit = (e) => {
  e.preventDefault();

  const form_data = new FormData(e.target);
  const timerData = Object.fromEntries(form_data);

  const { hour, min, sec } = timerData;
  h = parseInt(hour);
  m = parseInt(min);
  s = parseInt(sec);

  if (h > 0 || m > 0 || s > 0) {
    tInt = true;
  }

  if (tInt == true) {
    btnDisplay(e.target, t_cancel, t_pause);
  }

  t_pause.classList.remove("disable");
  clearInterval(int);
  stopwatch.innerHTML = `00:00:00`;

  timerOn();
};

// Timer On Fuction
let h = 0;
let m = 0;
let s = 0;
let tInt;

const timerOn = () => {
  if (!h) {
    h = 0;
  }
  if (!m) {
    m = 0;
  }
  if (!s) {
    s = 0;
  }

  timerInt = setInterval(() => {
    sound.play();

    timer.innerHTML = `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${
      s < 10 ? "0" + s : s
    }`;

    if (h === 0 && m === 0 && s === 0) {
      clearInterval(timerInt);
      tInt = false;
    } else if (s === 0) {
      if (m === 0) {
        if (h > 0) {
          h--;
          m = 59;
          s = 59;
        }
      } else {
        m--;
        s = 59;
      }
    } else {
      s--;
    }
  }, 1000);

  sMinuts = 0;
  sSeconds = 0;
  sMiliSec = 0;
  stopwatch.innerHTML = "00:00:00";
};

// Timer Cancel butoon action
const timerCancel = document.getElementById("timer-cancel");
timerCancel.onclick = (e) => {
  clearInterval(timerInt);
  timer.innerHTML = "00:00:00";

  tInt == false;

  t_cancel.classList.remove("visibility");
  t_pause.classList.remove("visibility");
  t_resume.classList.remove("visibility");
};

// Timer Pause butoon action
const timerPause = document.getElementById("timer-pause");
timerPause.onclick = (e) => {
  btnDisplay(e.target, t_cancel, t_resume);
  clearInterval(timerInt);
};

// Timer Reset butoon action
const timerResume = document.getElementById("timer-resume");
timerResume.onclick = (e) => {
  btnDisplay(e.target, t_cancel, t_pause);

  timerOn();
};

// Dark Mode
dark_btn.onclick = () => {
  container_body.classList.toggle("dark");
};
