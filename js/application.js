window.onload = function() {
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  let board = new Board();
  let cells = [];

  for(let i = 0; i < 21; ++i) {
    let tr = document.createElement("tr");

    for(let j = 0; j < 10; ++j) { 
      let td = document.createElement("td");
      cells.push(td);
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(thead);
  table.appendChild(tbody);
  document.body.appendChild(table);

  board.start();
  document.onkeydown = function(e) {
    if(e.keyCode == 37) {
      board.moveBlockToLeft();
      e.preventDefault();
    } else if(e.keyCode == 38) {
      board.rotateBlockClockwise();
      e.preventDefault();
    } else if(e.keyCode == 39) {
      board.moveBlockToRight();
      e.preventDefault();
    } else if(e.keyCode == 40) {
      board.rotateBlockCounterclockwise();
      e.preventDefault();
    }
  }

  setInterval(function() {
    let tmp = board.toString();

    for(let i = 0; i < tmp.length; ++i) {
      switch(tmp[i]) {
        case "A":
          cells[i].style.backgroundColor = "#ff0000";
          break;
        case "B":
          cells[i].style.backgroundColor = "#00ff00";
          break;
        case "C":
          cells[i].style.backgroundColor = "#0000ff";
          break;
        case "D":
          cells[i].style.backgroundColor = "#ffff00";
          break;
        case "E":
          cells[i].style.backgroundColor = "#ff00ff";
          break;
        case "F":
          cells[i].style.backgroundColor = "#00ffff";
          break;
        case "G":
          cells[i].style.backgroundColor = "#000000";
          break;
        default:
          cells[i].style.backgroundColor = "transparent";
      }
    }
  }, 10);
}
