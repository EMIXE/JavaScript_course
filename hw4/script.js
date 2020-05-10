let money,
    name,
    time,
    price

function start() 
{
    money = prompt("Ваш бюджет?");
    while (isNaN(money) || money == "" || money == null)  {
        money = prompt("Ваш бюджет?", 0);
    }
    name = prompt("Название вашего магазина?", " ").toUpperCase();
    time = 21;
}
//start();

var mainList = {
    budget: money,
    nameShop: name,
    shopGoods: [],
    employers: [],
    shopItems: [],
    open: false, 
    dicount: false,
    chooseGoods: function chooseGoods() {
        for(let i = 0; i<5; i++) {
            let answer = prompt("Какой тип товаров будем продавать?");
            
            if(typeof(answer) === 'string' && (typeof(answer) != null && answer != '')){
                console.log("Все верно!");
                mainList.shopGoods[i] = answer;
            } else {
                i--;
            }
        }
    },
    workTime: function workTime(time) {
        if(time < 0) {
            console.log("Такого не может быть!");
        }   else if(time > 8 && time < 20) {
                console.log("Время работать!");
                mainList.open=true;
            }   else if(time<24) {
                    console.log("Уже слишком поздно!");
                    } else console.log("В сутках 24 часа!");
    },
    dayBudget: function dayBudget() {
        alert("Ежедневный бюджет " + mainList.budget/30);
    },
    makeDiscount: function makeDiscount() {
        if(mainList.discount==true) {
            price *= 0.8;
        }
    },
    hireEmployers: function hireEmployers() {
        for(let i=1; i<4; i++) {
            let name = prompt("Имя сотрудника","");
            mainList.employers[i]=name;
        }
    },
    chooseShopItems: function chooseShopItems() {
        let check = true;
        //while(check == true) {
            let items = prompt("Перечислите товары через запятую","");
            if (items == '') {
               alert("Вы не можете оставить строку пустой!");
            }
            let itemsarr = items.split(",");

            for(let i = 1; i < items.length; i++) {
                if(typeof(items[i]) === 'string' ||  items[i] == '') {
                    alert("Введите корректные данные");
                    break;
                }
                check = false;
                mainList.shopItems = items;
            }
        //}

        //let items = prompt("Перечислите товары через запятую","");

        
        mainList.shopItems.push(prompt("Подождите, еще",""));
        mainList.shopItems.sort();
    }

}
