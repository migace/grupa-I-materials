const boxEl = document.getElementById("box");
const addClassRedBtnEl = document.getElementById("add-class-red");
const addClassBlueBtnEl = document.getElementById("add-class-blue");
const cubeEl = document.getElementById("cube");

addClassRedBtnEl.addEventListener("click", function () {
  boxEl.classList.remove("blue");

  if (!boxEl.classList.contains("red")) {
    boxEl.classList.add("red");
  }
});

addClassBlueBtnEl.addEventListener("click", function () {
  boxEl.classList.remove("red");

  if (!boxEl.classList.contains("blue")) {
    boxEl.classList.add("blue");
  }
});

let leftOffset = 10;
// direction 0 - left, 1 right
let direction = 1;
const MAX_LEFT_CUBE_POSITION = 300;
const MIN_LEFT_CUBE_POSITION = -300;

// timery
setInterval(function () {
  const currentLeftOffset = cubeEl.style.left;

  if (currentLeftOffset) {
    const value = parseInt(currentLeftOffset.slice(0, -2));

    if (value === MAX_LEFT_CUBE_POSITION) {
      direction = 0;
    }

    if (value === MIN_LEFT_CUBE_POSITION) {
      direction = 1;
    }

    if (direction === 1) {
      cubeEl.style.left = `${value + leftOffset}px`;
    } else {
      cubeEl.style.left = `${value - leftOffset}px`;
    }
  } else {
    cubeEl.style.left = `${leftOffset}px`;
  }
}, 1000 / 60);
