var list1 = document.getElementById('cours');
var list2 = document.getElementById('presta');

function priceLoader() {
    // On affiche le contenu de l'élément <option> ciblé par la propriété selectedIndex
    price = 0;
    for (var i=1; i<3; i++) {
    	myList = "list" + i
    	console.log(myList)
    	console.log(myList.options[myList.selectedIndex].value);	
    	price += myList.options[myList.selectedIndex].value;
		}
};

list1.addEventListener('change', priceLoader);
priceLoader();
console.log(price1);