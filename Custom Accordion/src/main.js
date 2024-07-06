let acc_header = document.querySelectorAll(".acc-header");

acc_header.forEach((item) => {
  item.onclick = () => {
    // Remove active class from others items
    acc_header.forEach((header) => {
      if (header !== item) {
        header.classList.remove("active");
        header.nextElementSibling.style.height = "0px";
      }
    });

    // Add active class
    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      item.nextElementSibling.style.height =
        item.nextElementSibling.scrollHeight + "px";
    } else {
      item.nextElementSibling.style.height = "0px";
    }
  };
});
