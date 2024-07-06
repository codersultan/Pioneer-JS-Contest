const tab_header = document.querySelectorAll(".header-item");
const tab_content = document.querySelectorAll(".tab-content");

tab_header.forEach((item, index) => {
  item.onclick = () => {
    // Remove active class
    tab_header.forEach((item) => item.classList.remove("active"));
    tab_content.forEach((content) => content.classList.remove("active"));

    // Add active class
    item.classList.add("active");
    tab_content[index].classList.add("active");
  };
});
