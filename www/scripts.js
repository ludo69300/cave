function fct_temp_nini() {
	var commande_XHR = XMLHttpRequest();
	commande_XHR.open("GET","/?temp_nini"+document.getElementById("temp_nini").value,true);
	commande_XHR.send()
}
function fct_temp_max() {
	var commande_XHR = XMLHttpRequest();
	commande_XHR.open("GET","/?temp_max("+document.getElementById("temp_max").value,true);
	commande_XHR.send()
}
function fct_humid_mini() {
	var commande_XHR = XMLHttpRequest();
	commande_XHR.open("GET","/?humid_mini"+document.getElementById("humid_mini").value,true);
	commande_XHR.send()
}
function fct_humid_max() {
	var commande_XHR = XMLHttpRequest();
	commande_XHR.open("GET","/?humid_max"+document.getElementById("humid_max").value,true);
	commande_XHR.send()
}

