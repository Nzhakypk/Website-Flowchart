const table = document.getElementById("myTable");
            for (let i = 0; i < table.rows.length; i++) {
                const row = table.rows[i];
            for (let j = 0; j < row.cells.length; j++) {
                row.cells[j].contentEditable = true;
            }
            }