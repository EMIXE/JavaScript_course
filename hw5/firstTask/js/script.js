var numb = document.getElementsByClassName('menu-item');
console.log(numb);
numb[3].parentNode.insertBefore(numb[1],numb[3]);

let newElem = numb[0].cloneNode(true);
newElem.textContent = "Пятый пункт";
numb[3].insertAdjacentElement('afterend', newElem);

let newImg = document.querySelector('body');
newImg.style.background = 'url(img/apple_true.jpg)';

let newTitle = document.getElementById('title');
newTitle.textContent = newTitle.textContent + " подлинную";

let delAdv = document.getElementsByClassName('adv');
delAdv[0].parentNode.removeChild(delAdv[0]); 

let answer = prompt("Как вы относитесь к технике Apple?", "");
let promptAnswer = document.getElementById('prompt');
promptAnswer.textContent = answer;