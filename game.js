import {
  drawSnake,
  updateSnake,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";
import { drawFood, updateFood } from "./food.js";
import { outsideBoard } from "./cell.js";
let SNAKE_SPEED = 2;
let isGameOver = false;

const snakeBoard = document.querySelector("#snake-board");
let lastRenderTime = 0;
const easyBtn = document.querySelector("#easy");
const mediumBtn = document.querySelector("#medium");
const hardBtn = document.querySelector("#hard");

easyBtn.addEventListener("click", function () {
  SNAKE_SPEED = 2;
  window.requestAnimationFrame(main);
  mediumBtn.classList.add("vanish");
  hardBtn.classList.add("vanish");
});
mediumBtn.addEventListener("click", function () {
  SNAKE_SPEED = 5;
  window.requestAnimationFrame(main);
  easyBtn.classList.add("vanish");
  hardBtn.classList.add("vanish");
});
hardBtn.addEventListener("click", function () {
  SNAKE_SPEED = 10;
  window.requestAnimationFrame(main);
  easyBtn.classList.add("vanish");
  mediumBtn.classList.add("vanish");
});

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
