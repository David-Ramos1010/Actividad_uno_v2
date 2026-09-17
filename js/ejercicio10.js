function Convertir(){
	var num1 = document.getElementById("num1").value;


	if (num1 == ""){
		alert('¡Tienes que introducir un número!');
		input.focus();
		return;
	}

	var num2 = 9/5 * parseFloat(num1) + 32;
	document.getElementById("num2").value = num2;
}