import { getInputDirection } from "./direction.js";

const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;
let score = 0;

export function updateSnake() {
  addSegments();
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  snakeBody[0].x = snakeBody[0].x + inputDirection.x;
  snakeBody[0].y = snakeBody[0].y + inputDirection.y;
}

export function drawSnake(snakeBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    snakeBoard.appendChild(snakeElement);
  });
}

export function expandSnake(foodSize) {
  newSegments += foodSize;
  score += 1;
  document.querySelector(".score").innerHTML = `Score: ${score}`;
}

export function onSnake(position, ignoreHead = false) {
  return snakeBody.some((segment, index) => {
    if (index == 0 && ignoreHead) return false;
    return arePositionsEqual(position, segment);
  });
}

function arePositionsEqual(pos1, pos2) {
  return pos1.x == pos2.x && pos1.y == pos2.y;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...(snakeBody[snakeBody.length] - 1) });
  }
  newSegments = 0;
}

export function getSnakeHead() {
  return snakeBody[0];
}

export function snakeIntersection() {
  return onSnake(snakeBody[0], true);
}
