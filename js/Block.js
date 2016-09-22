var Block = function(placementArray = []) {
  this.placement = placementArray;
  this.floors = [];

  this.calcFloors();
}

Block.prototype.calcFloors = function() {
  var newFloors = [];
  var n = 0;

  for(var i = this.placement.length - 1; i >= 0; --i) {
    for(var j = n; j < this.placement[i].length; ++j) {
      if(this.placement[i][j] != " ") {
        newFloors.push([i, j]);
        ++n;
      }
    }
  }

  this.floors = newFloors;
}

Block.prototype.rotateRight = function() {
  var newPlacement = [];

  for(var i = 0; i < this.placement.length; ++i) {
    for(var j = 0; j < this.placement[i].length; ++j) {
      if(newPlacement[j] == undefined) {
        newPlacement[j] = [];
      }
      newPlacement[j][this.placement.length - i - 1] = this.placement[i][j];
    }
  }

  this.placement = newPlacement;
  this.calcFloors();
}

Block.prototype.rotateLeft = function() {
  var newPlacement = [];

  for(var i = 0; i < this.placement.length; ++i) {
    for(var j = 0; j < this.placement[i].length; ++j) {
      if(newPlacement[this.placement[i].length - j - 1] == undefined) {
        newPlacement[this.placement[i].length - j - 1] = [];
      }
      newPlacement[this.placement[i].length - j - 1][i] = this.placement[i][j];
    }
  }

  this.placement = newPlacement;
  this.calcFloors();
}

Block.prototype.getPlacement = function() {
  return this.placement;
}

Block.prototype.getFloors = function() {
  return this.floors;
}

Block.prototype.toString = function(paddingLeft = 0, lineLength = 0) {
  var placementChain = "";
  var l = 0;

  for(var i = 0; i < this.placement.length; ++i, l = 0) {
    for(var j = 0; j < paddingLeft; ++j) {
      placementChain += " ";
      ++l;
    }
    placementChain += this.placement[i].join("");
    l += this.placement[i].length;
    for(; l < lineLength; ++l) {
      placementChain += " ";
    }
  }

  return placementChain;
}
