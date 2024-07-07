const fiverr_oder = document.getElementById("fiver-order");
const counter = document.querySelector(".counter");

fiverr_oder.addEventListener("submit", function (e) {
  e.preventDefault();

  let date = this.querySelector('input[type="date"]').value;
  let time = this.querySelector('input[type="time"]').value;

  setInterval(() => {
    let start_time = new Date();
    let end_time = new Date(date + " " + time);

    let time_diff = end_time.getTime() - start_time.getTime();

    if (!time_diff) {
      counter.innerHTML = "";
    } else {
      let total_sec = Math.floor(Math.abs(time_diff / 1000));
      let total_min = Math.floor(total_sec / 60);
      let total_hour = Math.floor(total_min / 60);
      let total_day = Math.floor(total_hour / 24);

      let hour = total_hour - total_day * 24;
      let min = total_min - total_day * 24 * 60 - hour * 60;
      let sec =
        total_sec - total_day * 24 * 60 * 60 - hour * 60 * 60 - min * 60;

      counter.innerHTML = `<span>${total_day}</span>:<span>${
        hour > 9 ? hour : "0" + hour
      }</span>:<span>${min > 9 ? min : "0" + min}</span
        >:<span>${sec > 9 ? sec : "0" + sec}</span>`;
    }
  }, 1000);
});
