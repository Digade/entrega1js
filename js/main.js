let win1 = 0;
let win2 = 0;
let jug1 = Math.floor(Math.random() * 10) + 1;
let jug2 = Math.floor(Math.random() * 10) + 1;

alert("Jugador 1 juega Gangster(DUELO) vs jugador 2");

for (let i = 1; i <= 3; i++) {
  if (jug1 == jug2) {
    alert("Empate en la ronda " + i);
    console.log(jug1 + " vs " + jug2);
  } else if (jug1 > jug2) {
    alert("Gana una ronda el jugador 1");
    console.log(jug1 + " vs " + jug2);
    win1 = win1 + 1;
  } else {
    alert("Gana una ronda el jugador 2");
    console.log(jug1 + " vs " + jug2);
    win2 = win2 + 1;
  }
  if (win1 === 1 || win2 == 1) {
    break;
  }
  jug1 = Math.floor(Math.random() * 10) + 1;
  jug2 = Math.floor(Math.random() * 10) + 1;
}

if (win1 == win2) {
  alert("Empate entre Jugadores");
} else if (win1 > win2) {
  alert("Gano el Jugador 1");
} else {
  alert("Gano el Jugador 2");
}

let sibila = Math.floor(Math.random() * 5) + 1;
let entrada = "";
let control = true;
console.log(sibila + " vs " + entrada);
while (control != false) {
  alert("Próximo Jugador juega una Sibila(PREDICCIÓN) al Ganador");
  entrada = prompt(
    "Predice Ícono (1: Mundo / 2: Balanza / 3: Ficha / 4: Calavera / 5: Corona)"
  );
  if (entrada == sibila) {
    alert("El jugador gano");
    control = false;
    console.log("Icono: " + sibila + " Predicción: " + entrada);
  } else {
    alert("Perdiste");
  }
}


if (sibila == 1) {
    alert("Tenia 1: Mundo");
  } else if (sibila == 2) {
    alert("Tenia 2: Balanza");
  } else if (sibila == 3) {
    alert("Tenia 3: Ficha");
  } else if (sibila == 4) {
    alert("Tenia 4: Calavera");
  } else if (sibila == 5) {
    alert("Tenia 5: Corona");
  }
