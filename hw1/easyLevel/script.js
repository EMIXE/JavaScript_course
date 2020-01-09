alert("Javacript подключен!");
var budget = prompt("Ваш бюджет?", 0);
var nameShop = prompt("Название вашего магазина?", " ");

var mainList = {
    budget,
    nameShop,
    shopGoods: [],
    employers: [],
    open
}

mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");

//alert(mainList.shopGoods);
alert("Ваш бюджет на 1 день: " + budget / 30);
