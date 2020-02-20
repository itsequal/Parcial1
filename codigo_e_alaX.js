let limite, resultado = 1, aum = 0, count = 1, x, n=1;
limite = 10; x=1;

do {
  resultado += (Math.pow(x,n) / factorial(count));
  count++;
  aum++;
  n++;
} while (aum !== limite);

console.log(resultado);

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}
