window.onload = function() {
  var table = document.createElement("table");
  var thead = document.createElement("thead");
  var tbody = document.createElement("tbody");
  var board = new Board();
  var cell = [];

  for(var i = 0; i < 21; ++i) {
    var tr = document.createElement("tr");

    for(var j = 0; j < 10; ++j) { 
      var td = document.createElement("td");
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
    } else if(e.keyCode == 38) {
      board.onLeftRotate();
    } else if(e.keyCode == 39) {
      board.onRightMove();
    } else if(e.keyCode == 40) {
      board.onRightRotate();
    }
    e.preventDefault();
  }

  setInterval(function() {
    var tmp = board.toString();

    for(var i = 0; i < tmp.length; ++i) {
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
