/**
 * Fuctional Button visibility
 * @param {*} data
 */
const btnDisplay = (btn, value1, value2) => {
  if (btn) {
    fButtons.forEach((button) => button.classList.remove("visibility"));
    if (value1) value1.classList.add("visibility");
    if (value2) value2.classList.add("visibility");
  }
};

/**
 * Active button color
 * @param {*} btn
 */
const activeColor = (btn) => {
  buttons.forEach((button) => button.classList.remove("active"));
  btn.classList.add("active");
};

/**
 * create unic number generator (lap)
 */

creatNum = () => {
  let currentNumber = 1;

  return () => {
    return currentNumber++;
  };
};

let number = creatNum();

const resetNumberGenerator = () => {
  number = creatNum();
};
