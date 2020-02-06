var num1 = Math.floor(Math.random() * 20);
var num2 = Math.floor(Math.random() * 20);
var num3 = Math.floor(Math.random() * 20);
console.log(num1);
console.log(num2);
console.log(num3);

if (num3<num1 && num3<num2)
  console.log("El numero menor es: ", num3);
else
if (num2<num1 && num2<num3)
  console.log("El numero menor es: ", num2);
else
if (num1<num2 && num1<num3)
  console.log("El numero menor es: ", num1);
