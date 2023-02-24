import { setAllCaselle } from "../functions/SetAllCaselleNonEvidenziate";

class Pedone {
  constructor(x, y, colore) {
    this.x = x;
    this.y = y;
    this.colore = colore;
    this.inVita = true;
    this.PrimaMossaFatta = false;
  }



  MostraMossePossibili(PlayGround) {
    //TODO

    setAllCaselle(PlayGround);

    if (this.colore === "bianco") {
      if (!this.PrimaMossaFatta) {
        PlayGround[this.x][this.y + 2].Evidenziata = true
      }

      PlayGround[this.x][this.y + 1].Evidenziata = true

    } else {
      if (!this.PrimaMossaFatta) {
        PlayGround[this.x][this.y - 2].Evidenziata = true
      }

      PlayGround[this.x][this.y - 1].Evidenziata = true

    }
  }
}

export { Pedone };
