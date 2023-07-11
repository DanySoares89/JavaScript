let products = [
    {name:"Compurador", category: "Eletrónico", price: 800},
    {name:"telemóvel", category: "Eletrónico", price: 500},
    {name:"Teclado", category: "acessorio", price: 80}
];

let myList = document.getElementById('productList');

for(i = 0; i < products.length; i++){

let product = products[i];

let Listitem = document.createElement("li");

Listitem.textContent = product.name + "(" + product.category + "): " + product.price + "€";
 
myList.appendChild(Listitem);
}