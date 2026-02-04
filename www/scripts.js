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
function initialisation_variable() {
	var commande_XHR = XMLHttpRequest();
	let temp_nini_value = document.getElementById("temp_nini").value;
	let temp_max_value = document.getElementById("temp_max").value;
	let humid_mini_value = document.getElementById("humid_mini").value;
	let humid_max_value = document.getElementById("humid_max").value;
	commande_XHR.open("GET","/?temp_nini"+temp_nini_value,true);
	commande_XHR.send();
	commande_XHR.open("GET","/?temp_max"+temp_max_value,true);
	commande_XHR.send();
	commande_XHR.open("GET","/?humid_mini"+humid_mini_value,true);
	commande_XHR.send();
	commande_XHR.open("GET","/?humid_max"+temp_nini_value,true);
	commande_XHR.send();
};
initialisation_variable()
