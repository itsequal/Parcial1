let limite, resultado = 1,
  aum = 0;
let count = 1;
limite = 10;

do {
  resultado += (1 / factorial(count));
  count++;
  aum++;
} while (aum !== limite);

console.log(resultado);

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}
