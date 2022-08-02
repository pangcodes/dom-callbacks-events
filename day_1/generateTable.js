function generate_table() {
    // create a <table> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    const numRows = 2;
    const numCols = 2;

    for (let i = 0; i < numRows; i++) {
        // create a table row
        const row = document.createElement("tr");

        // create columns
        for (let j = 0; j < numCols; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);

            cell.append(cellText);
            row.append(cell);
        }

        // add the row to the end of the table body
        tblBody.append(row);
    }

    // put the <tbody> in the <table>
    tbl.append(tblBody);

    document.body.append(tbl);

    // add border
    tbl.setAttribute("border", "2");

}