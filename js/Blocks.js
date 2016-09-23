var Block1 = function() {
  Object.setPrototypeOf(Block1.prototype, Block.prototype);
  Block.call(this, [
    ["A"], 
    ["A"],
    ["A"],
    ["A"]
  ]);
}

var Block2 = function() {
  Object.setPrototypeOf(Block2.prototype, Block.prototype);
  Block.call(this, [
    ["B", "B"], 
    [" ", "B"],
    [" ", "B"],
  ]);
}

var Block3 = function() {
  Object.setPrototypeOf(Block3.prototype, Block.prototype);
  Block.call(this, [
    ["C", "C"], 
    ["C", " "],
    ["C", " "],
  ]);
}

var Block4 = function() {
  Object.setPrototypeOf(Block4.prototype, Block.prototype);
  Block.call(this, [
    ["D", "D", " "], 
    [" ", "D", "D"],
  ]);
}

var Block5 = function() {
  Object.setPrototypeOf(Block5.prototype, Block.prototype);
  Block.call(this, [
    [" ", "E", "E"], 
    ["E", "E", " "],
  ]);
}

var Block6 = function() {
  Object.setPrototypeOf(Block6.prototype, Block.prototype);
  Block.call(this, [
    [" ", "F", " "], 
    ["F", "F", "F"],
  ]);
}

var Block7 = function() {
  Object.setPrototypeOf(Block7.prototype, Block.prototype);
  Block.call(this, [
    ["G", "G"], 
    ["G", "G"],
  ]);
}
