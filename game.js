import {
  drawSnake,
  SNAKE_SPEED,
  updateSnake,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";
import { drawFood, updateFood } from "./food.js";
import { outsideBoard } from "./cell.js";

let isGameOver = false;
const snakeBoard = document.querySelector("#snake-board");
let lastRenderTime = 0;
function main(currentTime) {
  if (isGameOver) {
    if (confirm("Game over. Press Ok to restart")) {
      window.location.reload(true);
    }
    return;
  }
  window.requestAnimationFrame(main);

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;

  update();
  draw();
}

function update() {
  updateSnake();
  updateFood();
  checkGameOver();
}

function draw() {
  snakeBoard.innerHTML = "";
  drawSnake(snakeBoard);
  drawFood(snakeBoard);
}

function checkGameOver() {
  isGameOver = outsideBoard(getSnakeHead()) || snakeIntersection();
}

window.requestAnimationFrame(main);
