const result = document.querySelector(".output input");
const equalBtn = document.querySelector(".cal-buttons .equal");

equalBtn.addEventListener("click", function () {
  if (!result.value) {
    result.value = "";
  } else {
    result.value = eval(result.value.replace("%", "/100"));
  }
});

// Dark Mode:

const toggle = document.getElementById("toggle");
const button = document.querySelectorAll(".cal-buttons input");

toggle.onclick = () => {
  toggle.classList.toggle("active");
  toggle.parentElement.classList.toggle("active");
  toggle.parentElement.parentElement.classList.toggle("active");
};
