//Haydn

function openPage(pageName, elmnt, color) {

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }


    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    document.getElementById(pageName).style.display = "block";


    elmnt.style.backgroundColor = color;
}


document.getElementById("defaultOpen").click();

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('leftcolumn').innerHTML = quotes[randomNumber];
}

function newFact() {
    var randomNumber = Math.floor(Math.random() * (facts.length));
    document.getElementById('rightcolumn').innerHTML = facts[randomNumber];
}

var quotes = [
    'But man is not made for defeat. A man can be destroyed but not defeated. -Ernest Hemingway',
    'I love you the more in that I believe you had liked me for my own sake and for nothing else. -John Keats',
    'When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt',
    'There is nothing permanent except change. -Heraclitus',
    'You cannot shake hands with a clenched fist. -Indira Gandhi',
    'Let us sacrifice our today so that our children can have a better tomorrow. -A. P. J. Abdul Kalam',
    'It is better to be feared than loved, if you cannot be both. -Niccolo Machiavelli',
    'Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself. -Henry James',
    ' Learning never exhausts the mind. -Leonardo da Vinci',
    'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference. –Robert Frost',
    'Whatever the mind of man can conceive and believe, it can achieve. –Napoleon Hill',
    'Strive not to be a success, but rather to be of value. –Albert Einstein',
    'You miss 100% of the shots you don’t take. -Wayne Gretzky',
    'The most difficult thing is the decision to act, the rest is merely tenacity. –Amelia Earhart',
    'Every strike brings me closer to the next home run. –Babe Ruth',
    'Definiteness of purpose is the starting point of all achievement. –W. Clement Stone',
    'Life is what happens to you while you’re busy making other plans. –John Lennon',
    'We become what we think about. –Earl Nightingale',
    'Life is 10% what happens to me and 90% of how I react to it. –Charles Swindoll',
    'The most common way people give up their power is by thinking they don’t have any. –Alice Walker',
    'The mind is everything. What you think you become. –Buddha',
    'The best time to plant a tree was 20 years ago. The second best time is now. –Chinese Proverb',
    'An unexamined life is not worth living. –Socrates',
    'Eighty percent of success is showing up. –Woody Allen',
    'Your time is limited, so don’t waste it living someone else’s life. –Steve Jobs',
    'Every child is an artist.  The problem is how to remain an artist once he grows up. –Pablo Picasso',
    'Either you run the day, or the day runs you. –Jim Rohn',
    'Whether you think you can or you think you can’t, you’re right. –Henry Ford',
    'The best revenge is massive success. –Frank Sinatra',
    'People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily. –Zig Ziglar',
]

var facts = [
    'The average person spends 6 months of their lifetime waiting on a red light to turn green.',
    'The largest recorded snowflake was in Keogh, MT during year 1887, and was 15 inches wide.',
    'You burn more calories sleeping than you do watching television.',
    'There are more lifeforms living on your skin than there are people on the planet.',
    'A single cloud can weight more than 1 million pounds.',
    'The average person walks the equivalent of three times around the world in a lifetime.',
    ' Coca-Cola would be green if coloring wasn’t added to it.',
    'You cannot snore and dream at the same time.',
    'Chewing gum while you cut an onion will help keep you from crying.',
    'Al Capone’s business card said he was a used furniture dealer',
    'It is physically impossible for pigs to look up into the sky.',
    'Honey never spoils.',
    'It would take a sloth one month to travel one mile.',
    'Earth has traveled more than 5,000 miles in the past 5 minutes.',
    'A sneeze travels about 100 miles per hour.',
    'Chewing gum burns about 11 calories per hour.',
    'In New York, it is illegal to sell a haunted house without telling the buyer.',
    'In Japan, crooked teeth are considered cute and attractive.',
    'A waterfall in Hawaii goes up sometimes instead of down.',
    'A church in the Czech Republic has a chandelier made entirely of human bones.',
    'The elephant is the only mammal that can’t jump!',
    'Most dust particles in your house are made from dead skin!',
    'Just like fingerprints, everyone has different tongue prints.',
    'One fourth of the bones in your body are located in your feet',
    'Blue-eyed people tend to have the highest tolerance of alcohol.',
    'The cigarette lighter was invented before the match.',
]

//David 
	/*var money = [];
		
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
	for(var i = 0; i < len; i++){
		console.log(money[i].mon, "This is the money at pos i, line 63");
		cal = cal + (money[i].mon);
		
	}
	document.getElementById("moneyAvil").innerHTML = cal;
	append_json();
	console.log(cal, "This is the cal variable, line 67");
		 
	}


	 function append_json(){
            var table = document.getElementById('display');
	    var moneytemp = money[money.length-1].mon;
            var summtemp = money[money.length-1].summ;
            var date = new Date();
            var x = String(date);
            var c = "";
            for(var i = 0; i<21; i++){
              c += x[i];
                    }

	    console.log(moneytemp, summtemp, "this is the temp values");


                var tr = document.createElement('tr');
                tr.innerHTML = '<td>' + moneytemp + '</td>'+'<td>' + summtemp + '</td>' + '<td>' + c + '</td>';
                table.appendChild(tr);

        }*/

//gift
/*


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
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
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
      div.style.display = "none";
    }
  }
	
}
*/
 

function hideLogin() {
    var x = document.getElementById("placeholder");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    var y = document.getElementById("signup");
     if (x.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }

    document.getElementById("defaultOpen").innerHTML = "User";
}




