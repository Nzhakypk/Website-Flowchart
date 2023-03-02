document.getElementById("addIngrediant").addEventListener("click", function() {
  const table = document.getElementById("myTable");
  const newRow = table.insertRow(-1); // insert at the last position
  const newCell1 = newRow.insertCell(0);
  const newCell2 = newRow.insertCell(1);
  newCell1.innerHTML = "Name";
  newCell2.innerHTML = "Amount";
  // Add contenteditable to new row
  const newRowCells = newRow.getElementsByTagName("td");
  for (let i = 0; i < newRowCells.length; i++) {
    newRowCells[i].contentEditable = true;
  }
});
