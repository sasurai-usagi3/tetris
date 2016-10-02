window.onload = function() {
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  let board = new Board();
  let cell = [];

  for(let i = 0; i < 21; ++i) {
    let tr = document.createElement("tr");

    for(let j = 0; j < 10; ++j) { 
      let td = document.createElement("td");
      cell.push(td);
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(thead);
  table.appendChild(tbody);
  document.body.appendChild(table);

  board.onStart();
  document.onkeydown = function(e) {
    if(e.keyCode == 37) {
      board.onLeftMove();
      e.preventDefault();
    } else if(e.keyCode == 38) {
      board.onLeftRotate();
      e.preventDefault();
    } else if(e.keyCode == 39) {
      board.onRightMove();
      e.preventDefault();
    } else if(e.keyCode == 40) {
      board.onRightRotate();
      e.preventDefault();
    }
  }

  setInterval(function() {
    let tmp = board.toString();

    for(let i = 0; i < tmp.length; ++i) {
      switch(tmp[i]) {
        case "A":
          cell[i].style.backgroundColor = "#ff0000";
          break;
        case "B":
          cell[i].style.backgroundColor = "#00ff00";
          break;
        case "C":
          cell[i].style.backgroundColor = "#0000ff";
          break;
        case "D":
          cell[i].style.backgroundColor = "#ffff00";
          break;
        case "E":
          cell[i].style.backgroundColor = "#ff00ff";
          break;
        case "F":
          cell[i].style.backgroundColor = "#00ffff";
          break;
        case "G":
          cell[i].style.backgroundColor = "#000000";
          break;
        default:
          cell[i].style.backgroundColor = "transparent";
      }
    }
  }, 10);
}
