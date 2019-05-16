var ROW;
var CELL;

function addRow(){	//CREATES OUR TABLE WHEN THE PAGE LOADS
 	var table = document.getElementById("table");
	var time = 9;
	
	for(var j = 1; j<=10; j++){
		
		table.insertRow(table.rows.length);	//CREATE NEW ROW
		table.rows[table.rows.length-1].contentEditable="false";
		
		for(var i=0; i < table.rows[0].cells.length; i++){
			
			table.rows[table.rows.length-1].insertCell(i);	//CREATE CELLS IN THE NEWLY CREATED ROW
			table.rows[table.rows.length-1].cells[i].style.textAlign="center";
			
			if(i == 0){
					table.rows[table.rows.length-1].cells[i].innerHTML = "<td>"+time+":00"+"</td>";	//THE FIRST CELL DISPLAYS THE TIME
					time++;
			}else{
				table.rows[table.rows.length-1].cells[i].innerHTML = "<td> <p class='title' id = "+j+","+i+"></p> <p class='note' id = "+j+":"+i+"></p> </td>";	//CONTENT IN THE CELL
				table.rows[table.rows.length-1].cells[i].onclick = function(){ 
					rowIndex = this.parentElement.rowIndex;	//ROW INDEX
					cellIndex = this.cellIndex;	//CELL INDEX
					index(rowIndex, cellIndex); //RUN INDEX FUNCTION WITH ROW AND CELL INDEXES
				}
			}
		}
		table.rows[table.rows.length-1].cells[i-1].contentEditable="false";
	}
}

/* MODAL */
var modal = document.getElementById("myModal");
var span1 = document.getElementsByClassName("closer")[0];
var edit = document.getElementById("editModalButton");

function index(x, y){	//DISPLAY THE CELLS INFORMATION WHEN THE USER CLICKS IT
	
	ROW = x;
	CELL = y;
	
	var title = document.getElementById(x+","+y).innerHTML; //GET TITLE FIELD OF THE SELECTED CELL
	var note = document.getElementById(x+":"+y).innerHTML;	//GET NOTE FIELD OF THE SELECTED CELL
	
	document.getElementById("rowCol").innerHTML = x+","+y; //STORE ROW AND CELL IN "rowCOL"
	document.getElementById("title").value = title;	//STORE var title INTO OUR title FIELD
	document.getElementById("note").value = note;	//STORE var note INTO OUR NOTE FIELD
	modal.style.display = "block";
}

edit.onclick = function(){ //EDIT / SAVE BUTTON
	
	var title = document.getElementById("title");	//GET title FIELD
	var note = document.getElementById("note");		//GET note FIELD

	if(document.getElementById("editModalButton").innerHTML == "Edit"){ //EDIT
		document.getElementById("editModalButton").innerHTML = "Save";
		
		title.readOnly = false; //ABLE TO NOW EDIT TITLE AND NOTE
		note.readOnly = false;
	}else{															    //SAVE
		document.getElementById("editModalButton").innerHTML = "Edit";
		
		var id = document.getElementById("rowCol").innerHTML;	//STORING NEW DATA INTO OUR title AND note FIELDS
		var xy = id.split(",");

		document.getElementById(xy[0]+","+xy[1]).innerHTML = document.getElementById("title").value; //STORE NEW TITLE
		document.getElementById(xy[0]+":"+xy[1]).innerHTML = document.getElementById("note").value; //STORE NEW NOTE
		
		saveT();
		
		title.readOnly = true;//NOT ABLE TO EDIT UNTIL YOU CLICK EDIT AGAIN
		note.readOnly = true;
	}
}

span1.onclick = function(){	//CLICK 'x' TO CLOSE MODAL
	modal.style.display = "none";
}

window.onclick = function(event){	//[TO DO: MAKE IT SO THAT WHEN THE MODAL IS OPEN, THAT IT DISAPPEARS ONCE THE USER CLICKS AWAY]
	if(event.target == modal){
		modal.style.display = "block";
	}
}


function writeUserData(userId, x, y) {
  
  firebase.database().ref('timetable/' + myUser + '/' + x).set(y);
}

function saveT(){
	var title = document.getElementById(ROW+","+CELL).innerHTML;
	var note = document.getElementById(ROW+":"+CELL).innerHTML;
	var total = title+"|"+note;
	
	writeUserData(myUser, ROW+"|"+CELL, total);
}

var timetableKey = [];
var timetableValue = [];
function abc(){
var leadsRef = database.ref('timetable/' + myUser);
leadsRef.on('value', function(snapshot) {

	  var timetableScores = snapshot.val();
	  
	  timetableKey = Object.keys(timetableScores);
	  
	  for(var i = 0; i < timetableKey.length; i++){
		var k = timetableKey[i];
		var tester = timetableScores[k];
		timetableValue[i] = String(tester);
	  }
});
}

function retrieveTimetable(){

	for(var i = 0; i < timetableKey.length; i++){
	
		var titleID = timetableKey[i].replace("|", ",");
		var noteID = timetableKey[i].replace("|", ":");

		var title = document.getElementById(titleID);
		var note = document.getElementById(noteID);
		
		var splitValue = timetableValue[i].split("|");
		
		title.innerHTML = splitValue[0];
		note.innerHTML = splitValue[1];

		console.log(title + " " + note);
	}
}

