const modalBtn = document.getElementById("modal-btn");
const modalBox = document.getElementById("modal-box");
const closeBtn = document.getElementById("close-btn");
const modal = document.querySelector(".modal");

modalBtn.onclick = (e) => {
  e.preventDefault();
  modalBox.style.opacity = "1";
  modalBox.style.pointerEvents = "all";

  modal.style.cursor = "default";

  modal.classList.add("active");
};

closeBtn.onclick = () => {
  modalBox.style.opacity = "0";
  modalBox.style.pointerEvents = "none";

  modal.classList.remove("active");
};

modalBox.addEventListener("click", function (e) {
  if (e.target == this) {
    modalBox.style.opacity = "0";
    modalBox.style.pointerEvents = "none";
    modal.classList.remove("active");
  }
});
