// prix des prestations
const prices = {
	cours_col_beginner_1 : 100,
	cours_col_beginner_2 : 150
}

var selected = null;

const list1 = document.getElementById('cours');
list1.addEventListener('change', handleChange);
//var list2 = document.getElementById('presta');

function handleChange() {
	selected = list1.options[list1.selectedIndex].value;
	logPrice();
}

function logPrice() {
	if (selected in prices) {
		console.log(prices[selected]);
	} else {
		console.log(0);
	}
}
