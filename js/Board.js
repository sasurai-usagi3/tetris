class Board {
  constructor() {
    this.status = [];
    for(let i = 0; i < 21; ++i) {
      this.status[i] = [];
      for(let j = 0; j < 10; ++j) {
        this.status[i][j] = " ";
      }
    }
    this.fallingBlock = null;
    this.fallingBlockPos = [0, 5];
  }

  onStart() {
    this.generateNewBlock();
    this.onUpdate();
  }

  generateNewBlock() {
    let r = Math.floor(Math.random() * 7);

    switch(r) {
      case 0:
        this.fallingBlock = new Block1();
        break;
      case 1:
        this.fallingBlock = new Block2();
        break;
      case 2:
        this.fallingBlock = new Block3();
        break;
      case 3:
        this.fallingBlock = new Block4();
        break;
      case 4:
        this.fallingBlock = new Block5();
        break;
      case 5:
        this.fallingBlock = new Block6();
        break;
      case 6:
        this.fallingBlock = new Block7();
        break;
    }
    this.fallingBlockPos = [0, 5];
  }

  onUpdate() {
    if(!this.fallBlock()) {
      this.putBlock();
      this.deleteLine();
      this.generateNewBlock();
      if(!this.canMove()) {
        console.log("ゲームオーバー");
        return;
      }
    }
    setTimeout(() => { this.onUpdate() }, 150);
  }

  putBlock() {
    let block = this.fallingBlock.getPlacement();
    let pos = this.fallingBlockPos;

    for(let i = 0; i < block.length; ++i) {
      for(let j = 0; j < block[i].length; ++j) {
        if(block[i][j] != " ") {
          this.status[pos[0] + i][pos[1] + j] = block[i][j];
        }
      }
    }
  }

  fallBlock() {
    if(this.canFallBlock()) {
      this.fallingBlockPos[0] += 1;
      this.deleteLine();
      return true;
    } else {
      return false;
    }
  }

  canFallBlock() {
    let floors = this.fallingBlock.getFloors();

    for(let i = 0; i < floors.length; ++i) {
      let nextFloorY = this.fallingBlockPos[0] + floors[i][0] + 1;
      let nextFloorX = this.fallingBlockPos[1] + floors[i][1];

      if(this.status[nextFloorY] == undefined || this.status[nextFloorY][nextFloorX] != " ") {
        return false;
      }
    }
    return true;
  }

  deleteLine() {
    let flag = true;
    for(let i = 0; i < this.status.length; ++i) {
      flag = true;
      for(var j = 0; j < this.status[i].length; ++j) {
        if(this.status[i][j] ==  " ") {
          flag = false;
          break;
        }
      }
      if(flag) {
        this.status.splice(i, 1);
        this.status.unshift("          ".split(""));
      }
    }
  }

  canMove() {
    let block = this.fallingBlock.getPlacement();
    for(let i = 0; i < block.length; ++i) {
      for(let j = 0; j < block[i].length; ++j) {
        var pos = this.fallingBlockPos;
        var y = pos[0] + i, x = pos[1] + j;

        if(block[i][j] != " " && this.status[y][x] != " ") {
          return false;
        }
      }
    }
    return true;
  }

  onRightRotate() {
    if(this.fallingBlock.getHeight() <= 10 - this.fallingBlockPos[1]) {
      this.fallingBlock.rotateRight();
      if(!this.canMove()) {
        this.fallingBlock.rotateLeft();
      }
    }
  }

  onLeftRotate() {
    if(this.fallingBlock.getHeight() <= 10 - this.fallingBlockPos[1]) {
      this.fallingBlock.rotateLeft();
      if(!this.canMove()) {
        this.fallingBlock.rotateRight();
      }
    }
  }

  onRightMove() {
    if(this.fallingBlockPos[1] < 10 - this.fallingBlock.getWidth()) {
      this.fallingBlockPos[1] += 1;
      if(!this.canMove()) {
        this.fallingBlockPos[1] -= 1;
      }
    }
  }

  onLeftMove() {
    if(this.fallingBlockPos[1] > 0) {
      this.fallingBlockPos[1] -= 1;
      if(!this.canMove()) {
        this.fallingBlockPos[1] += 1;
      }
    }
  }

  toString() {
    let statusChain = [];
    let margin = this.fallingBlockPos[0] * 10;
    let tmp = this.fallingBlock.toString(this.fallingBlockPos[1], 10);

    for(let i = 0; i < this.status.length; ++i) {
      for(let j = 0; j < this.status[i].length; ++j) {
        if(i * 10 + j >= margin && i * 10 + j < margin + tmp.length && tmp[i * 10 + j - margin] != " ") {
          statusChain[i * 10 + j] = tmp[i * 10 + j - margin];
        } else {
          statusChain[i * 10 + j] = this.status[i][j];
        }
      }
    }
  
    return statusChain.join("");
  }
}
  
