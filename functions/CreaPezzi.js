import { Pedone } from "../Class/Pedone";
import { creaPlayGround } from "./CreaPlayGround";

var p = creaPlayGround();

function CreaBianchi() {
  creaPedone("bianco");
}

function CreaNeri() {
  creaPedone("nero");
}

//le seguenti funzioni creano le pedine per un giocatore

function creaPedone(colore) {
  var pedone;
  if (colore === "bianco") {
    for (let i = 0; i < p.length; i++) {
      pedone = new Pedone(i, 1, colore);
      p[(i, 1)].occupata = pedone;
    }
  } else {
    for (let i = 0; i < p.length; i++) {
      pedone = new Pedone(i, 6, colore);
      p[(i, 6)].occupata = pedone;
    }
  }
}

function creaCavallo(colore) {
  if (colore === "bianco") {
  } else {
  }
}

function creaAlfiere() {}

function creaTorre() {}

function creaRegina() {}

function creaRe() {}

export { CreaBianchi, CreaNeri };
