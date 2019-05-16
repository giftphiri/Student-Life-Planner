var ToDoCounter = -1;
var key = [];
var storeKey = [];

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
	console.log(document.getElementById(i));
    div.style.display = "none";
  }
}
 
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");

  ToDoCounter++;
  li.id = ToDoCounter;
  
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
	  saveToDo(inputValue);
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
	  deleteToDo(div.id);
      div.style.display = "none";
    }
  }
}

function saveToDo(ToDoInput){
	
	console.log(ToDoInput);
	firebase.database().ref("ToDoList/" + myUser + "/" + ToDoCounter).set(ToDoInput);
}

function deleteToDo(x){

	firebase.database().ref("ToDoList/" + myUser + "/" + x).remove();
}



function retrieveToDo(){
	
	var ToDoRef = database.ref('ToDoList/' + myUser);
	ToDoRef.on('value', function(snapshot) {
		
	  var scores = snapshot.val();
	  
	  key = Object.keys(scores);
	  
	  for(var i = 0; i < key.length; i++){
		  var k = key[i];
		  var test = scores[k];
		  storeKey[i] = String(test);
		  console.log(storeKey[i]);
	  }  
});

}

function runTo(){
	
	console.log("runTo()");
	for(var i = 0; i < storeKey.length; i++){
		console.log(storeKey[i]);
		loadElement();
	}
}

function loadElement() {
  var li = document.createElement("li");
  
  ToDoCounter++;
  li.id = ToDoCounter;
  
  var inputValue = storeKey[ToDoCounter];
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("myUL").appendChild(li);

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;

      div.style.display = "none";
	  deleteToDo(div.id);
    }
  }
}