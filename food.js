import { getRandomCellPosition } from "./cell.js";
import { onSnake, expandSnake } from "./snake.js";
let food = { x: 10, y: 5 };
const FOOD_SIZE = 3;

export function updateFood() {
  if (onSnake(food)) {
    expandSnake(FOOD_SIZE);
    food = getRandomFoodPosition();
  }
}

export function drawFood(snakeBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  snakeBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = getRandomCellPosition();
  }
  return newFoodPosition; //{x:,y:}
}
