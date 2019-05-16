	var money = [];
	var moneyCount = 0, initialMoney = 0;
	
	function calculate(){
	var x = document.getElementById("Figure");
	var y = x.options[x.selectedIndex].text;

	var mon = document.getElementById("moneyInput").value
	var summ = document.getElementById("summary").value; 

	var arrin; 

	if(y == '+'){
		console.log("This is a plus");
		mon = 1* mon;
		arrin = {mon, summ};
		money.push(arrin);
		update();
	}
	if(y == '-'){
		console.log("This is a minus");
		mon = -1 * mon
		arrin = {mon, summ};
		money.push(arrin);
		update();
	}

 	console.log(money, "This is the array of money and info");
	}


	function update(){
	var len = money.length;
	var cal = 0; 
	for(var i = moneyCount; i < len; i++){
		console.log(money[i].mon, "This is the money at pos i, line 63");
		cal = cal + (money[i].mon);
		
	}
	//cal += initialMoney;
	//document.getElementById("moneyAvil").innerHTML = cal;
	append_json();
	//console.log(cal, "This is the cal variable, line 67");
		 
	}


	 function append_json(){
            var table = document.getElementById('display');
			var moneytemp = money[money.length-1].mon;
            var summtemp = money[money.length-1].summ;
			console.log(moneytemp, summtemp, "this is the temp values");
			var date = new Date().toUTCString();
			
			saveBudget(moneytemp, summtemp+"|"+date);

                var tr = document.createElement('tr');
                tr.innerHTML = '<td>' + moneytemp + '</td>' +
                '<td>' + summtemp + '</td>'+
				'<td>' + date + '</td>';
                table.appendChild(tr);

        }	
		
		function saveBudget(x, y){
			console.log(x);
			firebase.database().ref('budgetFeature/' + myUser + '/' + x).set(y);
		}
		
		var budgetKey = [];
		var budgetValue = [];
		function getBudgetData(){
			var leadsRef = database.ref('budgetFeature/' + myUser);
			leadsRef.on('value', function(snapshot) {

			var budgetScores = snapshot.val();
			
			budgetKey = Object.keys(budgetScores);

			for(var i = 0; i < budgetKey.length; i++){
			
				var k = budgetKey[i];
				var budgetTester = budgetScores[k];
				budgetValue[i] = String(budgetTester);
		}
	});
	console.log(budgetKey);
	console.log(budgetValue);
}

		
		function retrieveBudget(){
			
			var calculateKey = 0;
			var key, value;
			for(var i = 0; i < budgetKey.length; i++){
			
				money[i] = parseInt(budgetKey[i]);
				key = budgetKey[i];
				value = budgetValue[i];
				console.log(money[i]);
				console.log(money[i]);
				
				loadBudget(key, value);
				calculateKey += budgetKey[i];
			}
			//intialUpdate();
		}
		
		function loadBudget(key, value){
				
				var table = document.getElementById('display');
				var splitArray = value.split("|");
				
                var tr = document.createElement('tr');
                tr.innerHTML = '<td>' + key + '</td>' +
                '<td>' + splitArray[0] + '</td>'+
				'<td>' + splitArray[1] + '</td>';
                table.appendChild(tr);
		}
		
	/*function intialUpdate(){
	var len = money.length;
	var cal = 0; 
	for(var i = 0; i < len; i++){
		console.log(money[i], "This is the money at pos i, line 63");
		cal = cal + (money[i]);
	}
	
	initialMoney = cal;
	moneyCount = len;
	
	document.getElementById("moneyAvil").innerHTML = cal;
	append_json();
	console.log(cal, "This is the cal variable, line 67");
		 
	}*/

