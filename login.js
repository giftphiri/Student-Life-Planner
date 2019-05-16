 var myUser;
 
 var config = {
   apiKey: "AIzaSyCTmo_lu7cnWFbDp5judqiOFwnSD-7kBTE",
   authDomain: "team-project-713a7.firebaseapp.com",
    databaseURL: "https://team-project-713a7.firebaseio.com",
    storageBucket: "team-project-713a7.appspot.com",
  };
  firebase.initializeApp(config);
  // Get a reference to the database service
  var database = firebase.database();


function doLogin()
{
	username=document.getElementById("uname").value
	password=document.getElementById("pass").value

	firebase
		.auth()
		.signInWithEmailAndPassword(username, password)
		.then(watchInbox)
		.catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  console.error(errorMessage)

			if(errorMessage == "The password is invalid or the user does not have a password."){
					alert("Password is invalid : ( ")			
					}
		});

			
}


function watchInbox(user)
{
	console.log(user)
	console.log("Watching inbox for uid:",user.uid)
	console.log("TEST")
	myUser = user.uid;
	
	getBudgetData();
	abc();
	retrieveToDo();
	
	try
	{
		var mymailboxlocation='/users/'+user.uid+'/inbox'

		var mydata = database.ref(mymailboxlocation);
		console.log("TEST1")
		//window.location.href = "http://www.reddit.com"
		
		mydata.on('value', 
		  function(snapshot) 
		  {
		  	console.log("got snapshot")
			retrieveBudget();
			retrieveTimetable();
			runTo();
			alert("Logged in successfully!");
			var result=snapshot.val()
			result=JSON.stringify(result,null,4)
		    //document.getElementById("placeholder").innerHTML="<pre>"+result+"</pre>"
		  }
		);

		console.log("TEST2")
	}
	catch(err)
	{
		console.log(err)
	}
}
