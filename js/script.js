function init(){
	var name = document.getElementsByClassName("center")[1];	
	var message = document.getElementById("entryinput").value;
	var results = document.getElementById('textoutput');
	alert(name.textContent + ": " + message);
	results.innerHTML = '<h2>' + message + "</h2>";
}
var Alert = document.getElementById('entrybutton');
Alert.addEventListener('click', init);



