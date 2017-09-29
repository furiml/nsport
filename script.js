// liste des listes
const listes = {
	cours : 'COURS',
	presta : 'PRESTA'
}

// prix des prestations
const prices = {
	default : 0,
	cours_col_beginner_1 : 100,
	cours_col_beginner_2 : 150,
	presta1 : 10,
	presta2 : 20
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
