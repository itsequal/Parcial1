let radianes=10;
let limite=100;

console.log(cos(radianes,limite));

function cos(rad,tope){
    let result=1;
    let division=2;
    let signo=-1;

      for (var i = 0; i < tope; i++) {
        result+= signo*Math.pow(rad,division)/factorial(division);
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
