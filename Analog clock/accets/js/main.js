// get elements

const sec = document.querySelector(".s");
const min = document.querySelector(".m");
const hour = document.querySelector(".h");
const sound = document.querySelector(".clock audio");

setInterval(() => {
  sound.play();
  let time = new Date();
  let currentSec = time.getSeconds();
  let currentMin = time.getMinutes();
  let currentHour = time.getHours();

  sec.style.transform = `rotate(${clockRools(60, currentSec)}deg)`;
  min.style.transform = `rotate(${clockRools(60, currentMin)}deg)`;
  hour.style.transform = `rotate(${clockRools(12, currentHour)}deg)`;
}, 1000);
