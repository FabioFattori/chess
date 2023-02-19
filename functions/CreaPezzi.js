import { Pedone } from "../Class/Pedone";
import { Cavallo } from "../Class/Cavallo";
import { Regina } from "../Class/Regina";
import { Re } from "../Class/Re";
import { Alfiere } from "../Class/Alfiere";
import { Torre } from "../Class/Torre";
import { creaPlayGround } from "./CreaPlayGround";

var p = creaPlayGround();

function CreaBianchi() {
  var colore = "bianco";
  creaPedone(colore);
  creaCavallo(colore);
  creaAlfiere(colore);
  creaTorre(colore);
  creaRegina(colore);
  creaRe(colore);
}

function CreaNeri() {
  var colore = "nero";
  creaPedone(colore);
  creaCavallo(colore);
  creaAlfiere(colore);
  creaTorre(colore);
  creaRegina(colore);
  creaRe(colore);
  return p;
}

//le seguenti funzioni creano le pedine per un giocatore

function creaPedone(colore) {
  var pedone;
  if (colore === "bianco") {
    for (let i = 0; i < p.length; i++) {
      pedone = new Pedone(i, 1, colore);
      p[i][1].occupata = pedone;
    }
  } else {
    for (let i = 0; i < p.length; i++) {
      pedone = new Pedone(i, 6, colore);
      p[i][6].occupata = pedone;
    }
  }
}

function creaCavallo(colore) {
  if (colore === "bianco") {
    var Cav1 = new Cavallo(1, 0, colore);
    var Cav2 = new Cavallo(6, 0, colore);

    p[Cav1.x][Cav1.y].occupata = Cav1;

    p[Cav2.x][Cav2.y].occupata = Cav2;
  } else {
    var Cav1 = new Cavallo(1, 7, colore);
    var Cav2 = new Cavallo(6, 7, colore);

    p[Cav1.x][Cav1.y].occupata = Cav1;

    p[Cav2.x][Cav2.y].occupata = Cav2;
  }
}

function creaAlfiere(colore) {
  if (colore === "bianco") {
    var Alf1 = new Alfiere(2, 0, colore);
    var Alf2 = new Alfiere(5, 0, colore);

    p[Alf1.x][Alf1.y].occupata = Alf1;

    p[Alf2.x][Alf2.y].occupata = Alf2;
  } else {
    var Alf1 = new Alfiere(2, 7, colore);
    var Alf2 = new Alfiere(5, 7, colore);

    p[Alf1.x][Alf1.y].occupata = Alf1;

    p[Alf2.x][Alf2.y].occupata = Alf2;
  }
}

function creaTorre(colore) {
  if (colore === "bianco") {
    var Tor1 = new Torre(0, 0, colore);
    var Tor2 = new Torre(7, 0, colore);

    p[Tor1.x][Tor1.y].occupata = Tor1;

    p[Tor2.x][Tor2.y].occupata = Tor2;
  } else {
    var Tor1 = new Torre(0, 7, colore);
    var Tor2 = new Torre(7, 7, colore);

    p[Tor1.x][Tor1.y].occupata = Tor1;

    p[Tor2.x][Tor2.y].occupata = Tor2;
  }
}

function creaRegina(colore) {
  if (colore === "bianco") {
    var Reg = new Regina(3, 0, colore);
    p[Reg.x][Reg.y].occupata = Reg;
  } else {
    var Reg = new Regina(3, 7, colore);
    p[Reg.x][Reg.y].occupata = Reg;
  }
}

function creaRe(colore) {
  if (colore === "bianco") {
    var re = new Re(4, 0, colore);
    p[re.x][re.y].occupata = re;
  } else {
    var re = new Re(4, 7, colore);
    p[re.x][re.y].occupata = re;
  }
}

export { CreaBianchi, CreaNeri };
