class Obstacle {
  constructor() {
    this.size = 50;
    this.x = width;
    this.y = height - this.size;
  }
  show() {
    image(obstacle, this.x, this.y - 20, 90, 90);
  }
  move() {
    this.x -= 10;
  }
}
