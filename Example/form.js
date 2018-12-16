function show() {
	document.getElementById('show').style.display = ('block');

	var name= document.getElementById('Fullname').value;
	document.getElementById('fullname').innerHTML = name;
	
	var male= document.getElementById('male').checked;
	var female= document.getElementById('female').checked;
		if (male) {
			document.getElementById('show-img').src="male.jpg";
		}
		else if (female) {
			document.getElementById('show-img').src="female.jpg";
		}

	var yearr= document.getElementById('yearr').value;
	document.getElementById('year').innerHTML = yearr;
	if (yearr > 1998) {
		document.getElementById('show').style.background = ('yellow');
	}
	else if (yearr < 1998) {
		document.getElementById('show').style.background = ('green');
	}
}
