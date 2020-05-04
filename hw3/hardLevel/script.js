let str = "урок-3-был слишком легким";
let newStr = str[0].toUpperCase() + str.slice(1);
console.log(newStr);

var newStr2 = str.replace(/-/g, " ");
console.log(newStr2);

var newStr3 = newStr2.replace("ом легким","оо");
console.log(newStr3);
