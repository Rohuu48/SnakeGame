export const SNAKE_SPEED = 2;
const snakeBody = [
  { x: 11, y: 11 },
  { x: 12, y: 11 },
  { x: 13, y: 11 },
  { x: 14, y: 11 },
];

export function updateSnake() {
  console.log("Snake updated");
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  snakeBody[0].x = snakeBody[0].x + 0;
  snakeBody[0].y = snakeBody[0].y - 1;
}

export function drawSnake(snakeBoard) {
  console.log("Snake drawn");
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    snakeBoard.appendChild(snakeElement);
  });
}