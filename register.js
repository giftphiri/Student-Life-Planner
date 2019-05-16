function doRegister()
{
	username=document.getElementById("uname1").value
	password=document.getElementById("pass1").value


	firebase
	.auth()
	.createUserWithEmailAndPassword(username, password)
	.then(function() 
	{
		alert("Account created")
	})
	.catch(function(error) 
		{
		  // Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			alert(errorMessage);
		})
	
		

}