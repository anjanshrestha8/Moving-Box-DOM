let box_X = document.querySelector("#x-axis");
let box_Y = document.querySelector("#y-axis");

const heightWindow = window.innerHeight;
const widthWindow = window.innerWidth;
console.log(heightWindow, widthWindow);
// takes 2  parameter return random number
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) - min);
}

function updateBoxPosition(box, speedX, speedY) {
  let posX = box.offsetLeft;
  let posY = box.offsetTop;
  function updatePosition() {
    // Animation loop
    posX += speedX;
    posY += speedY;
    console.log(posX, posY);
    if (posX <= 0) {
      speedX *= -1;
      box.style.backgroundColor = "red";
    }
    if (posX + 100 > widthWindow) {
      speedX *= -1;
      box.style.backgroundColor = "green";
    }
    if (posY <= 0) {
      speedY *= -1;
      box.style.backgroundColor = "purple";
    }
    if (posY + 100 > heightWindow) {
      speedY *= -1;
      box.style.backgroundColor = "grey";
    }
    box.style.left = posX + "px";
    box.style.top = posY + "px";

    window.requestAnimationFrame(updatePosition);
  }

  updatePosition();
}

window.onload = () => {
  // box1
  box_X.style.left = randomNumber(0, widthWindow - 100) + "px";
  box_X.style.top = randomNumber(0, heightWindow - 100) + "px";
  //   box2
  box_Y.style.left = randomNumber(0, widthWindow - 100) + "px";
  box_Y.style.top = randomNumber(0, heightWindow - 100) + "px";

  //   for speed and direction randomness

  let box_X_xs = randomNumber(-1, 3); //box_X's x-axis speed
  let box_X_ys = randomNumber(-1, 3);
  let box_Y_xs = randomNumber(-1, 3);
  let box_Y_ys = randomNumber(-1, 3);

  //    speed aayo aba update garne position

  updateBoxPosition(box_X, box_X_xs, box_X_ys);
  updateBoxPosition(box_Y, box_Y_xs, box_Y_ys);
};
