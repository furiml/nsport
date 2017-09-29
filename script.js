// liste des listes
const listes = {
	cours : 'COURS',
	presta : 'PRESTA'
}

// prix des prestations
const prices = {
	cours_col_beginner_1 : 100,
	cours_col_beginner_2 : 150,
	presta1 : 10,
	presta2 : 20
}

var selected = null;

for (let liste in listes) {
	//console.log(i);
	//console.log(listes[i]);
	const dropdown = document.getElementById(liste);
	dropdown.addEventListener('change', handleChange);
}

function handleChange() {
	selected = this.options[this.selectedIndex].value;
	logPrice();
}

function logPrice() {
	if (selected in prices) {
		console.log(prices[selected]);
	} else {
		console.log(0);
	}
}