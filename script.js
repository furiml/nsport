// liste des listes
const listes = {
	cours : 'cours',
	presta : 'presta',
	goodies : 'goodies',
    extra : 'extra',
}

// prix des prestations
const prices = {
	default : 0,
	cours_col_beginner_1 : 100,
	cours_col_beginner_2 : 150,
	presta1 : 10,
	presta2 : 20,
	goodie1 : 20,
	goodie2 : 5,
	goodie3 : 35,
    extra1 : 10,
    extra2 : 3,
    extra3 : 20,
    extra4 : 35,
    extra5 : 60,
}

// initiation du sélecteur
var selected = null;

// création des listeners
for (let liste in listes) {
	const dropdown = document.getElementById(liste);
	dropdown.addEventListener('change', handleChange);
}

// détection d'un changement, log console et calcul du prix
function handleChange() {
	selected = this.options[this.selectedIndex].value;
	logPrice();
	calculateTotal();
}

// log console du prix sélectionné
function logPrice() {
	if (selected in prices) {
		console.log(prices[selected]);
	} else {
		console.log(0);
	}
}

// calcul du total
function calculateTotal() {
	var total_price = 0;
	for (let liste in listes) {
		const dropdown = document.getElementById(liste);
		total_price += prices[dropdown.options[dropdown.selectedIndex].value];
	}
	console.log(total_price);
	document.getElementById('prix').innerHTML = total_price + '€';
}
