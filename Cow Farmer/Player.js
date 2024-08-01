class Player {
  constructor() {
    this.x = 25;
    this.y = 11;
    this.vx = 0;
    this.vy = 0;
    this.maxSpeed = 10 / 60;
  }

  tickPlayer() {
    this.runPlayerControls();
    this.displayPlayer();
  }

  displayPlayer() {
    ellipse(windowWidth/2, windowHeight/2, 80, 125);
  }

  runPlayerControls() {
    let velocityVector = createVector(0, 0);
    if(pressedKeys.w) {
      velocityVector.y-=1;
    }
    if(pressedKeys.s) {
      velocityVector.y+=1;
    }
    if(pressedKeys.a) {
      velocityVector.x-=1;
    }
    if(pressedKeys.d) {
      velocityVector.x+=1;
    }

    velocityVector.setMag(this.maxSpeed);

    this.x += velocityVector.x;
    this.y += velocityVector.y;
  }
}
