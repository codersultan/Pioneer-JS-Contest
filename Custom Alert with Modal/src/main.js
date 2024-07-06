const modalBtn = document.getElementById("modal-btn");
const modalBox = document.getElementById("modal-box");
const closeModal = document.getElementById("close-btn");
const modal = document.querySelector(".modal");

const alertBox = document.getElementById("alert-box");
const closeAlert = document.getElementById("close-alert");
const keepEdit = document.querySelector(".keep-edit");
const discard = document.querySelector(".discard");

modalBtn.onclick = (e) => {
  e.preventDefault();
  modalBox.style.opacity = "1";
  modalBox.style.pointerEvents = "all";

  modal.style.cursor = "default";

  modal.classList.add("active");
};

closeModal.onclick = () => {
  alertBox.style.display = "flex";
};

modalBox.addEventListener("click", function (e) {
  if (e.target == this) {
    modalBox.style.opacity = "0";
    modalBox.style.pointerEvents = "none";
    modal.classList.remove("active");
  }
});

closeAlert.onclick = () => {
  alertBox.style.display = "none";
};

keepEdit.onclick = () => {
  alertBox.style.display = "none";
};

discard.onclick = () => {
  alertBox.style.display = "none";
  modalBox.style.opacity = "0";
  modalBox.style.pointerEvents = "none";

  modal.classList.remove("active");
};
