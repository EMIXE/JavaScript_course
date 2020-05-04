var num = 33721;
var numeral;
var result = 1;
for(var i = 0; i<5; i++)
{
    numeral = num % 10;
    result *= numeral;
    num = Math.floor(num /10);
}
console.log(result);

console.log(result ** 3);