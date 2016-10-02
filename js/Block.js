class Block {
  constructor(...placementArray) {
    this.placement = placementArray.map(line => line.split(""));
    this.width = Math.max.apply(null, this.placement.map(line => line.length));
    this.height = this.placement.length;
  }

  rotateClockwise() {
    let newPlacement = [];

    for(let i = 0; i < this.placement.length; ++i) {
      for(let j = 0; j < this.placement[i].length; ++j) {
        if(newPlacement[j] == undefined) {
          newPlacement[j] = [];
        }
        newPlacement[j][this.placement.length - i - 1] = this.placement[i][j];
      }
    }

    this.placement = newPlacement;
    this.width = Math.max.apply(null, this.placement.map(line => line.length));
    this.height = this.placement.length;
  } 

  rotateCounterclockwise() {
    let newPlacement = [];

    for(let i = 0; i < this.placement.length; ++i) {
      for(let j = 0; j < this.placement[i].length; ++j) {
        if(newPlacement[this.placement[i].length - j - 1] == undefined) {
          newPlacement[this.placement[i].length - j - 1] = [];
        }
        newPlacement[this.placement[i].length - j - 1][i] = this.placement[i][j];
      }
    }

    this.placement = newPlacement;
    this.width = Math.max.apply(null, this.placement.map(line => line.length));
    this.height = this.placement.length;
  }

  getPlacement() {
    return this.placement;
  }

  getHeight() {
    return this.height;
  }

  getWidth() {
    return this.width;
  }

  toString(paddingLeft = 0, lineLength = 0) {
    let placementChain = "";
    let l = 0;

    for(let i = 0; i < this.placement.length; ++i, l = 0) {
      for(let j = 0; j < paddingLeft; ++j) {
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
}
