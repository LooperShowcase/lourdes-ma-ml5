class Player {
  constructor() {
    this.size = 100;
    this.x = this.size;
    this.y = height - this.size - 15;
    this.velocityY = 0;
    this.gravity = 2;
  }
  jump() {
    if (this.y === height - this.size - 15) {
      this.velocityY = -25;
    }
  }
  move() {
    this.y += this.velocityY;
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, height - this.size - 15);
  }
  show() {
    image(playerImage, this.x, this.y, 65, 115);
  }
  collided(obstacleToCheck) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 80,
      this.size,
      obstacleToCheck.x,
      obstacleToCheck.y,
      obstacleToCheck.size,
      obstacleToCheck.size
    );
    return isColliding;
  }
}
