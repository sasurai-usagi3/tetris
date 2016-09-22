window.onload = function() {
  var table = document.createElement("table");
  var thead = document.createElement("thead");
  var tbody = document.createElement("tbody");
  var board = new Board();
  var cell = [];

  for(var i = 0; i < 21; ++i) {
    var tr = document.createElement("tr");
    cell[i] = [];
    for(var j = 0; j < 10; ++j) { 
      var td = document.createElement("td");
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(thead);
  table.appendChild(tbody);
  document.body.appendChild(table);

  board.onStart();
}
