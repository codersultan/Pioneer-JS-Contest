const building = document.querySelector(".building-section");
const cat = document.querySelector(".cat-section");
const flower = document.querySelector(".flower-section");
const bike = document.querySelector(".bike-section");

const buildSec = document.querySelector(".box1");
const catdSec = document.querySelector(".box2");
const flowerSec = document.querySelector(".box3");
const carSec = document.querySelector(".box4");
const bikeSec = document.querySelector(".box5");

// add scroll event
document.onscroll = () => {
  const scrollValue = window.scrollY;

  // Building section
  if (scrollValue < 342) {
    buildSec.style.transform = `translate(0px, ${scrollValue}px)`;
  } else {
    buildSec.style.transform = `translate(0px, 342px)`;
  }

  // Cat Section
  if (scrollValue >= building.clientHeight) {
    catdSec.style.transform = `translate(0px, ${
      scrollValue - building.clientHeight
    }px)`;
  }

  if (scrollValue >= 1288) {
    catdSec.style.transform = `translate(0px, ${
      1288 - building.clientHeight
    }px)`;
  }

  // Flower section
  if (scrollValue >= 1895) {
    flowerSec.style.transform = `translate(0px, ${
      scrollValue - (building.clientHeight + cat.clientHeight)
    }px)`;
  }

  if (scrollValue >= 2232) {
    flowerSec.style.transform = `translate(0px, ${
      2232 - (building.clientHeight + cat.clientHeight)
    }px)`;
  }

  // Bike section
  if (scrollValue >= 2833) {
    bikeSec.style.transform = `translate(0px, ${
      scrollValue -
      (building.clientHeight + cat.clientHeight + flower.clientHeight)
    }px)`;
  }

  if (scrollValue >= 3182) {
    bikeSec.style.transform = `translate(0px, ${
      3182 - (building.clientHeight + cat.clientHeight + flower.clientHeight)
    }px)`;
  }

  console.log(scrollValue);
  //   console.log(scrollValue - building.clientHeight);
};
