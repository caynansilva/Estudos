function ExibeAlerta() {
    alert('Seus dados Foram Cronados!'); 
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

}

function myCreateFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
}

function myDeleteFunction() {
  document.getElementById("myTable").deleteRow(0);
}

function returnOS() {
  var os = require("os"); 
  os.hostname();
  return os;
}