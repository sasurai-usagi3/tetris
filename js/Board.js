var Board = function() {
  this.status = [];
  for(var i = 0; i < 21; ++i) {
    this.status[i] = [];
    for(var j = 0; j < 10; ++j) {
      this.status[i][j] = " ";
    }
  }
  this.fallingBlock = null;
  this.fallingBlockPos = [0, 0];
}

Board.prototype.onStart = function() {
  this.generateNewBlock();
  this.onUpdate();
}

Board.prototype.generateNewBlock = function() {
  var r = Math.floor(Math.random() * 7);

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
  this.fallingBlockPos = [0, 0];
}

Board.prototype.onUpdate = function() {
  if(!this.fallBlock()) {
    this.putBlock();
    this.generateNewBlock();
  }
  setTimeout(() => { this.onUpdate() }, 500);
}

Board.prototype.putBlock = function() {
  var block = this.fallingBlock.getPlacement();
  var pos = this.fallingBlockPos;

  for(var i = 0; i < block.length; ++i) {
    for(var j = 0; j < block[i].length; ++j) {
      if(block[i][j] != " ") {
        this.status[pos[0] + i][pos[1] + j] = block[i][j];
      }
    }
  }
}

Board.prototype.fallBlock = function() {
  if(this.canFallBlock()) {
    this.fallingBlockPos[0] += 1;
    this.deleteLine();
    return true;
  } else {
    return false;
  }
}

Board.prototype.canFallBlock = function() {
  var floors = this.fallingBlock.getFloors();

  for(var i = 0; i < floors.length; ++i) {
    var nextFloorY = this.fallingBlockPos[0] + floors[i][0] + 1;
    var nextFloorX = this.fallingBlockPos[1] + floors[i][1];

    if(this.status[nextFloorY] == undefined || this.status[nextFloorY][nextFloorX] != " ") {
      return false;
    }
  }
  return true;
}

Board.prototype.judgeFinished = function() {
}

Board.prototype.deleteLine = function() {
}

Board.prototype.canMove = function() {
  var block = this.fallingBlock.getPlacement();
  for(var i = 0; i < block.length; ++i) {
    for(var j = 0; j < block[i].length; ++j) {
      var pos = this.fallingBlockPos;
      var y = pos[0] + i, x = pos[1] + j;

      if(block[i][j] != " " && this.status[y][x] != " ") {
        console.log(block[i][j]);
        console.log(this.status[y][x]);
        return false;
      }
    }
  }
  return true;
}

Board.prototype.onRightRotate = function() {
  if(this.fallingBlock.getHeight() <= 10 - this.fallingBlockPos[1]) {
    this.fallingBlock.rotateRight();
    if(!this.canMove()) {
      this.fallingBlock.rotateLeft();
    }
  }
}

Board.prototype.onLeftRotate = function() {
  if(this.fallingBlock.getHeight() <= 10 - this.fallingBlockPos[1]) {
    this.fallingBlock.rotateLeft();
    if(!this.canMove()) {
      this.fallingBlock.rotateRight();
    }
  }
}

Board.prototype.onRightMove = function() {
  if(this.fallingBlockPos[1] < 10 - this.fallingBlock.getWidth()) {
    this.fallingBlockPos[1] += 1;
    if(!this.canMove()) {
      this.fallingBlockPos[1] -= 1;
    }
  }
}

Board.prototype.onLeftMove = function() {
  if(this.fallingBlockPos[1] > 0) {
    this.fallingBlockPos[1] -= 1;
    if(!this.canMove()) {
      this.fallingBlockPos[1] += 1;
    }
  }
}

Board.prototype.toString = function() {
  var statusChain = [];
  var margin = this.fallingBlockPos[0] * 10;
  var tmp = this.fallingBlock.toString(this.fallingBlockPos[1], 10);

  for(var i = 0; i < this.status.length; ++i) {
    for(var j = 0; j < this.status[i].length; ++j) {
      if(i * 10 + j >= margin && i * 10 + j < margin + tmp.length && tmp[i * 10 + j - margin] != " ") {
        statusChain[i * 10 + j] = tmp[i * 10 + j - margin];
      } else {
        statusChain[i * 10 + j] = this.status[i][j];
      }
    }
  }

  return statusChain.join("");
}
  
