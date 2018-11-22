window.addEventListener('load', function () {
	"use strict";

	document.getElementById("Formular02").onclick = Valider2;
});



function Valider2() {
	"use strict";
	var AntalFejl = 0;
	var FejlBesked1 = "";
	var FejlBesked2 = "";



	if (document.getElementById('InputNavn2').value === "") {
		AntalFejl += 1;
		FejlBesked1 = "Du skal skriv dit navn!";
		document.getElementById('InputNavn2').value = "";
	} else {
		var regexpbogstaver = /^[a-zæøåA-ZÆØÅ ]+$/;
		if (!regexpbogstaver.test(document.getElementById('InputNavn2').value)) {
			AntalFejl += 1;
			FejlBesked1 = "Navnet må kun indeholde bogstaver!";
			document.getElementById('InputNavn2').value = "";
		}
	}

	if (document.getElementById('InputTelnummer2').value === "") {
		AntalFejl += 1;
		FejlBesked2 = "Skriv dit telefonnummer!";
		document.getElementById('InputTelnummer2').value = "";
	} else {
		var regexptal = /^[0-9]+$/;
		if (!regexptal.test(document.getElementById('InputTelnummer2').value)) {
			AntalFejl += 1;
			FejlBesked2 = "Telefonnummeret må kun indeholde tal!";
			document.getElementById('InputTelnummer2').value = "";
		} else {
			var laengde = (document.getElementById('InputTelnummer2').value);
			if (laengde.length < 8) {
				AntalFejl += 1;
				FejlBesked2 = "Telefonnummeret er ikke gyldig!";
				document.getElementById('InputTelnummer2').value = "";
			}
		}
	}





	if (AntalFejl === 0) {
		return true;
	} else {
		document.getElementById('InputNavn2').className = "formInvalid";
		document.getElementById('InputNavn2').placeholder = FejlBesked1;


		document.getElementById('InputTelnummer2').className = "formInvalid";
		document.getElementById('InputTelnummer2').placeholder = FejlBesked2;


		return false;
	}
}
