function convert(degree) {
	var temperature;
	if (degree == "C") {
		temperature = document.getElementById("c").value * 9 / 5 + 32;
		document.getElementById("f").value = Math.round(temperature);
		
	} else {
		temperature = (document.getElementById("f").value -32) * 5/9;
		document.getElementById("c").value = Math.round(temperature);
	}
}

if ("C" == 10) {
	$('#changing-image').attr('src', 'http://placehold.it/350x150');
}