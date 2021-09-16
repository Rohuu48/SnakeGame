import { drawSnake, SNAKE_SPEED, updateSnake } from "./snake.js";

const snakeBoard = document.querySelector("#snake-board");
let lastRenderTime = 0;
function main(currentTime) {
  window.requestAnimationFrame(main);

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;

  console.log("Render");
  update();
  draw();
}

function update() {
  updateSnake();
}

function draw() {
  snakeBoard.innerHTML = "";
  drawSnake(snakeBoard);
}

window.requestAnimationFrame(main);
