import React, { useEffect, useState } from "react";
import { Pedone } from "../Class/Pedone";
import { Cavallo } from "../Class/Cavallo";
import { Regina } from "../Class/Regina";
import { Re } from "../Class/Re";
import { Alfiere } from "../Class/Alfiere";
import { Torre } from "../Class/Torre";
import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import torreB from "../assets/TorreB.jpg";
import torreN from "../assets/TorreN.jpg";
import pedoneN from "../assets/PedoneN.jpg";
import pedoneB from "../assets/PedoneB.jpg";
import cavalloN from "../assets/CavalloN.jpg";
import cavalloB from "../assets/CavalloB.jpg";
import alfiereB from "../assets/AlfiereB.jpg";
import alfiereN from "../assets/AlfiereN.jpg";
import reN from "../assets/ReN.jpg";
import reB from "../assets/ReB.jpg";
import reginaN from "../assets/ReginaN.jpg";
import reginaB from "../assets/ReginaB.jpg";
import { setAllCaselle } from "../functions/SetAllCaselleNonEvidenziate";

function Casella({ CasellaObj, colore, matrix, setter, PezzoSelezionato,setPezzo }) {
  const [content, setContent] = useState(null);
  const [stile, setStile] = useState();

  useEffect(() => {
    if (CasellaObj.occupata instanceof Pedone) {
      if (CasellaObj.occupata.colore === "bianco") {
        setContent(pedoneB);
      } else {
        setContent(pedoneN);
      }
    } else if (CasellaObj.occupata instanceof Regina) {
      if (CasellaObj.occupata.colore === "bianco") {
        setContent(reginaB);
      } else {
        setContent(reginaN);
      }
    } else if (CasellaObj.occupata instanceof Alfiere) {
      if (CasellaObj.occupata.colore === "bianco") {
        setContent(alfiereB);
      } else {
        setContent(alfiereN);
      }
    } else if (CasellaObj.occupata instanceof Torre) {
      if (CasellaObj.occupata.colore === "bianco") {
        setContent(torreB);
      } else {
        setContent(torreN);
      }
    } else if (CasellaObj.occupata instanceof Cavallo) {
      if (CasellaObj.occupata.colore === "bianco") {
        setContent(cavalloB);
      } else {
        setContent(cavalloN);
      }
    } else if (CasellaObj.occupata instanceof Re) {
      if (CasellaObj.occupata.colore === "bianco") {
        setContent(reB);
      } else {
        setContent(reN);
      }
    }


    setStile(ChooseStyle())
  }, []);

  function Evidenzia() {

    CasellaObj.occupata.MostraMossePossibili(matrix);
    setPezzo(CasellaObj.occupata)
    setter(matrix)
  }



  function ChooseStyle() {
    if (CasellaObj.Evidenziata && colore) {
      return styles.Casella_Bianca_Evidenziata;
    } else if (colore) {
      return styles.Casella_Bianca;
    } else if (CasellaObj.Evidenziata && !colore) {
      return styles.Casella_Nera_Evidenziata
    } else {
      return styles.Casella_Nera;
    }
  }

  function Muovi() {
    if (CasellaObj.Evidenziata) {
      setAllCaselle(matrix);
      
      matrix[PezzoSelezionato.x][PezzoSelezionato.y].occupata=false;  
      matrix[CasellaObj.x][CasellaObj.y].occupata=PezzoSelezionato;
      
      matrix[CasellaObj.x][CasellaObj.y].occupata.x=CasellaObj.x;
      
      matrix[CasellaObj.x][CasellaObj.y].occupata.y=CasellaObj.y;

      if(PezzoSelezionato instanceof Pedone){
        matrix[CasellaObj.x][CasellaObj.y].occupata.PrimaMossaFatta=true;
      }
      
      setter(matrix);
    }
  }

  return content ? (
    <TouchableOpacity onPress={() => Evidenzia()} style={stile}>
      <Image style={styles.Image} source={content} />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={() => Muovi()} style={stile}>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Casella_Bianca: {
    width: 50,
    height: 50,
    backgroundColor: "#ffff0",
  },
  Casella_Nera: {
    width: 50,
    height: 50,
    backgroundColor: "#470A00",
  },

  Casella_Nera_Evidenziata: {
    width: 50,
    height: 50,
    borderColor: "green",
    borderWidth: 2,
    backgroundColor: "#470A00",
  },

  Casella_Bianca_Evidenziata: {
    width: 50,
    height: 50,
    borderColor: "green",
    borderWidth: 2,
    backgroundColor: "#ffff0",
  },



  Image: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
});

export default Casella;
