// msg is the word the user will input
// this variable will equal a function to be defined
var print = function(msg) {
	document.getElementById("output").innerHTML = "Length is " + msg;

}
	// .onclick is event handler 
	document.getElementById("btn").onclick = function(event) {
		// this print means display
		print(document.getElementById('str').value.length);
	}