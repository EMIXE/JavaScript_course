let money,
    name,
    time,
    price

function start() {
    money = prompt("Ваш бюджет?");
    while (isNaN(money) || money == "" || money == null)  {
        money = prompt("Ваш бюджет?", 0);
    }
    name = prompt("Название вашего магазина?", " ");
    time = 21;
}
start();

var mainList = {
    budget: money,
    nameShop: name,
    shopGoods: [],
    employers: [],
    open: false,
    dicount: false
}

function chooseGoods() {
    for(let i = 0; i<5; i++) {
        let answer = prompt("Какой тип товаров будем продавать?");
        
        if(typeof(answer) === 'string' && (typeof(answer) != null && answer != '')){
            console.log("Все верно!");
            mainList.shopGoods[i] = answer;
        } else {
            i--;
        }
    }
}

chooseGoods();
function workTime(time) {
    if(time < 0) {
        console.log("Такого не может быть!");
    }   else if(time > 8 && time < 20) {
            console.log("Время работать!");
        }   else if(time<24) {
                console.log("Уже слишклм поздно!");
                } else console.log("В сутках 24 часа!");
}

 workTime(18);
function calcDailyBudget(money) {
    return money / 30;
}

function discountSystem() {
    if(mainList.discount) price *= 0.8;
}

function hiringEmployers() {
    for(let i = 0; i<4; i++) {
        let answer = prompt("Введите ваш Номер и Имя в формате: Номер-Имя");
        
        if(typeof(answer) === 'string' && (typeof(answer) != null && answer != '')){
            //console.log("Все верно!");
            mainList.employers[i] = answer;
        } else {
            i--;
        }
    }
}
hiringEmployers();
