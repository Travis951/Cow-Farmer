class World {

  constructor(worldWidth, worldHeight, pixelSize) {
    this.worldWidth = worldWidth;
    this.worldHeight = worldHeight;
    this.createDefaultWorld(worldWidth, worldHeight);
    this.pixelSize = pixelSize;
    this.player = new Player();
    this.screenWidth = int(windowWidth/pixelSize + 4);
    this.screenHeight = int(windowHeight/pixelSize + 4);
    }

  tickWorld() {
    this.displayWorld();
    this.player.tickPlayer();
  }

  createDefaultWorld() {

    //Creating Blank Array worldWidth by worldHeight
    this.worldArray = [];
    for (let x = 0; x < this.worldWidth; x++) {
      this.worldArray[x] = [];
      for (let y = 0; y < this.worldWidth; y++) {
        if (x <= 5) {
          //5 Leftmost Pixels Ocean Water
          this.worldArray[x][y] = 2
        } else if (x <= 10) {
          //5 to the Right of ^ Beach Sand
          this.worldArray[x][y] = 1
        } else {
          //The Rest is Grass
          this.worldArray[x][y] = 0
        }
      }
    }
  }

  displayWorld() {
    //this is really intemidating but all its doing is checking
    //if the regular loop would push the array pass the defined
    //area and if it would just changes the loop to not do that
    if (this.player.x - this.screenWidth/2 < 0) {
      for (let x = 0; x < this.player.x + this.screenWidth/2; x++) {
        if (this.player.y - this.screenHeight/2 < 0) {
          for (let y = 0; y < this.player.y + this.screenWidth/2; y++) {
            rect(this.screenX(x), this.screenY(y), this.pixelSize, this.pixelSize);
          }
        } else if (this.player.y + this.screenHeight/2 > this.worldHeight) {
            for (let y = this.player.y - this.screenHeight/2; y < this.worldHeight; y++) {
              rect(this.screenX(x), this.screenY(y), this.pixelSize, this.pixelSize);
            }
          } else {
            for (let y = this.player.y - this.screenHeight/2; y < this.player.y + this.screenWidth/2; y++) {
              rect(this.screenX(x), this.screenY(y), this.pixelSize, this.pixelSize);
            }
          }
      }
    } else if (this.player.x + this.screenWidth/2 > this.worldWidth) {
      for (let x = this.player.x - this.screenWidth/2; x < this.worldWidth; x++) {
        if (this.player.y - this.screenHeight/2 < 0) {
          for (let y = 0; y < this.player.y + this.screenWidth/2; y++) {
            rect(this.screenX(x), this.screenY(y), this.pixelSize, this.pixelSize);
          }
        } else if (this.player.y + this.screenHeight/2 > this.worldHeight) {
            for (let y = this.player.y - this.screenHeight/2; y < this.worldHeight; y++) {
              rect(this.screenX(x), this.screenY(y), this.pixelSize, this.pixelSize);
            }
          } else {
            for (let y = this.player.y - this.screenHeight/2; y < this.player.y + this.screenWidth/2; y++) {
              rect(this.screenX(x), this.screenY(y), this.pixelSize, this.pixelSize);
            }
          }
        }
      } else {
      for (let x = this.player.x - this.screenWidth/2; x < this.player.x + this.screenWidth/2; x++) {
        if (this.player.y - this.screenHeight/2 < 0) {
          for (let y = 0; y < this.player.y + this.screenWidth/2; y++) {
            rect(this.screenX(x), this.screenY(y), this.pixelSize, this.pixelSize);
          }
        } else if (this.player.y + this.screenHeight/2 > this.worldHeight) {
            for (let y = this.player.y - this.screenHeight/2; y < this.worldHeight; y++) {
              rect(this.screenX(x), this.screenY(y), this.pixelSize, this.pixelSize);
            }
          } else {
            for (let y = this.player.y - this.screenHeight/2; y < this.player.y + this.screenWidth/2; y++) {
              rect(this.screenX(x), this.screenY(y), this.pixelSize, this.pixelSize);
            }
          }
      }
    }
  }

  screenX(worldX) {
    return worldX*this.pixelSize + windowWidth/2 - this.player.x*this.pixelSize
  }
  screenY(worldY) {
    return worldY*this.pixelSize + windowHeight/2- this.player.y*this.pixelSize
  }

}
