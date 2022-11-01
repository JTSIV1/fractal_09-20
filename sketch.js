LEVEL = 5

function setup() {
  createCanvas(400, 400);
  background(220);
  drawFractal(-50, 100, 200, LEVEL, 1);
}

function drawFractal(x, y, size, level, orientation) {
  square(x, y, size);
  if (level > 0 && orientation == 1){
    drawFractal(x + size, y, size / 3, level - 1, 1);
    drawFractal(x + size, y + size - size / 3, size / 3, level - 1, 1);
    drawFractal(x + size - size / 3, y - size / 3, size / 3, level - 1, 4);
    drawFractal(x + size - size / 3, y + size, size / 3, level - 1, 2);
  }
  else if (level > 0 && orientation == 2){
    drawFractal(x + size - size / 3, y + size, size / 3, level - 1, 2);
    drawFractal(x, y + size, size / 3, level - 1, 2);
    drawFractal(x - size / 3, y + size - size / 3, size / 3, level - 1, 3);
    drawFractal(x + size, y + size - size / 3, size / 3, level - 1, 1);
  }
  else if (level > 0 && orientation == 3){
    drawFractal(x, y + size, size / 3, level - 1, 2);
    drawFractal(x - size / 3, y + size - size / 3, size / 3, level - 1, 3);
    drawFractal(x - size / 3, y, size / 3, level - 1, 3);
    drawFractal(x, y - size / 3, size / 3, level - 1, 4);
  }
  else if (level > 0 && orientation == 4) {
    drawFractal(x - size / 3, y, size / 3, level - 1, 3);
    drawFractal(x, y - size / 3, size / 3, level - 1, 4);
    drawFractal(x + size - size / 3, y - size / 3, size / 3, level - 1, 4);
    drawFractal(x + size, y, size / 3, level - 1, 1);
  }
}