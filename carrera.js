carrera();

function dado() {
  return Math.floor(Math.random() * 6 + 1);
}

function steps() {
  if (dado() <= 3) {
    return 2;
  }
  if (dado() <= 5) {
    return 1;
  } else {
    return 3;
  }
}

function carrera() {
  let lapiz = 0,
    borrador = 0,
    turno = 1,
    contador = false;
  do {
    borrador += steps();
    lapiz += steps();
    turno++;

    if (borrador >= 100 || lapiz >= 100) {
      contador=true;
    }
    console.log("Turno -->", turno, "Borrador en " + borrador + "  Lapiz en " + lapiz);
  } while (contador != true);

  if (borrador >= 100 && lapiz >= 100) {
    console.log("Empate");
  }else if (lapiz > borrador) {
    console.log("Gano Lapiz en el turno", turno)
  } else {
    console.log("Gano Borrador en el turno", turno)
  }
}
