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
}

Board.prototype.onUpdate = function() {
  console.log("test");
  setTimeout(() => { this.onUpdate() }, 1000);
}

Board.prototype.canFallBlock = function() {
}

Board.prototype.judgeFinished = function() {
}

Board.prototype.onRightRotate = function() {
}

Board.prototype.onLeftRotate = function() {
}

Board.prototype.onRightMove = function() {
}

Board.prototype.onLeftMove = function() {
}

Board.prototype.toString = function() {
  var statusChain = "";

  for(var i = 0; i < this.status.length; ++i) {
    statusChain += this.status[i].join("");
  }

  return statusChain;
}
  
