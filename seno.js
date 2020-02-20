let radianes=10;
let limite=100;

console.log(sin(radianes,limite));

function sin(x,ctos){
    let result=x;
    let division=3;
    let signo=-1;
      for (var i = 0; i < ctos; i++) {
        result+= signo*Math.pow(x,division)/factorial(division);
        signo*=-1;
        division+=2;
      }
      return result;
}

function factorial(numero) {
  let fact = 1;
  for (var i = 1; i <= numero; i++) {
    fact *= i
  }
  return fact;
}
