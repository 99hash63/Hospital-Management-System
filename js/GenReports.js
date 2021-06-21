

var rIndex,table;
// add row
function addHtmlTableRow()
{
	// get the table by id 
	// create a new row and cells
	// get value form input text
	// set the value into row cells

	var newRow = table.insertRow(table.length),
		cell1 = newRow.insertCell(0),
		cell2 = newRow.insertCell(1),
		cell3 = newRow.insertCell(2),
		cell4 = newRow.insertCell(3),
		tname = document.getElementById("tname").value,
		result = document.getElementById("result").value,
		range = document.getElementById("range").value;
		ob = document.getElementById("ob").value;

	cell1.innerHTML = tname;
	cell2.innerHTML = result;
	cell3.innerHTML = range;
	cell4.innerHTML = ob;

	//call the function to set the event to the new row
	selectedRowToInput();
}

// display selected row data into input text
function selectedRowToInput()
{
	rIndex,table = document.getElementById("table");
	
	for(var i=1; i<table.rows.length; i++)
	{
		table.rows[i].onclick = function()
		{
			// get the selected row index
			rIndex = this.rowIndex;
			console.log(rIndex);
			document.getElementById("tname").value = this.cells[0].innerHTML;
			document.getElementById("result").value = this.cells[1].innerHTML;
			document.getElementById("range").value = this.cells[2].innerHTML;
			document.getElementById("ob").value = this.cells[3].innerHTML;
		};
	}
}

function editHtmlTblSelectedRow()
{
	var tname  = document.getElementById("tname").value,
		result = document.getElementById("result").value,
		range  = document.getElementById("range").value;
		ob  = document.getElementById("ob").value;
	table.rows[rIndex].cells[0].innerHTML = tname;
	table.rows[rIndex].cells[1].innerHTML = result;
	table.rows[rIndex].cells[2].innerHTML = range;
	table.rows[rIndex].cells[3].innerHTML = ob;
}

function removeSelectedRow()
{
	table.deleteRow(rIndex);
	// clear input text
	document.getElementById("tname").value = "";
	document.getElementById("result").value = "";
	document.getElementById("range").value = "";
	document.getElementById("ob").value = "";
}




