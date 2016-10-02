class Block {
  constructor(...placementArray) {
    this.placement = placementArray.map(line => line.split(""));
    this.width = Math.max.apply(null, this.placement.map(line => line.length));
    this.height = this.placement.length;
  }

  rotateClockwise() {
    let newPlacement = [];

    for(let i = 0; i < this.width; ++i) {
      newPlacement[i] = this.placement.map(line => line[i] || " ").reverse();
    }

    this.placement = newPlacement;
    this.width = Math.max.apply(null, this.placement.map(line => line.length));
    this.height = this.placement.length;
  } 

  rotateCounterclockwise() {
    let newPlacement = [];
    let test = [];

    for(let i = 0; i < this.width; ++i) {
      newPlacement[i] = this.placement.map(line => line[i] || " ");
    }

    this.placement = newPlacement.reverse();
    this.width = Math.max.apply(null, this.placement.map(line => line.length));
    this.height = this.placement.length;
  }

  getPlacement() {
    return this.placement;
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
