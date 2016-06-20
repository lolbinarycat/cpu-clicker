var data = {bits : window.localStorage.bits , cpus : window.localStorage.cpus  }; //game data

if ( data.cpus = 0 ) { data.cpus = 1 };

function addShopItem( name , price , functionToExacuteWhenBought) { //constructor to add items to shop
	var shopItem = document.createElement("BUTTON");        // Create a <button> element
	var t = document.createTextNode(name + "costs:" + price + "b");       // Create a text node containing name and price
	shopItem.appendChild(t);                                // Append the text to <button>
	document.getElementById("shop").appendChild(shopItem);
	
	this.name = name;
	this.price = price; 
	this.addEventListener('click', function  {
		if (data.bits >= this.price) {
			data.bits -= this.price;
			functionToExacuteWhenBought();
		 } 
	} ); 
	 
}	
function update() {
	
	data.bits += data.cpus
	//update statusbar
	document.getElementById("bit-count").innerHTML = "bits: " + data.bits ;
	document.getElementById("cpu-count").innerHTML = "cpus: " + data.cpus ; 
}
	
window.onload = function {  //main function
	
var updateint = setInterval( update , 1000 );

}
//im a bunny wabbit
