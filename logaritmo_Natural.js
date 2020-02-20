let radianes=5;
let limite=100;

console.log(ln(radianes,limite));

function ln(x,ctos){
    let result=0;
    let division=1;
    let funcion=(x-1)/x;

      for (var i = 0; i < ctos; i++) {
        result+= (1/division)*Math.pow(funcion,division);
        division++;
      }
      return result;
}
