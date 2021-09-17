const GRID_SIZE = 21;

export function getRandomCellPosition() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1,
  };
}

export function outsideBoard(snakePosition) {
  return (
    snakePosition.x < 1 ||
    snakePosition.x > GRID_SIZE ||
    snakePosition.y < 1 ||
    snakePosition.y > GRID_SIZE
  );
}
