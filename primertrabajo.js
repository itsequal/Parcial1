let num1 = Math.floor(Math.random() * 20);
let num2 = Math.floor(Math.random() * 20);
let num3 = Math.floor(Math.random() * 20);

console.log(num1);
console.log(num2);
console.log(num3);

if (num1 < num2)
  if (num1 < num3)
    console.log("El numero menor es: ",num1);
  else
    console.log("El numero menor es: ",num3);
else
if (num2 < num3)
  console.log("El numero menor es: ",num2);
  else
  console.log("El numero menor es: ",num3);
