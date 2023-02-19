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

function Casella({ CasellaObj, colore }) {
  const [content, setContent] = useState(null);

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
  }, []);

  return content ? (
    colore ? (
      <TouchableOpacity style={styles.Casella_Bianca}>
        <Image style={styles.Image} source={content} />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity style={styles.Casella_Nera}>
        <Image style={styles.Image} source={content} />
      </TouchableOpacity>
    )
  ) : (

    colore ? (
      <TouchableOpacity style={styles.Casella_Bianca}>
        <Image style={styles.Image} source={content} />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity style={styles.Casella_Nera}>
        <Image style={styles.Image} source={content} />
      </TouchableOpacity>
    )
    
  );
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

 



  Image: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
});

export default Casella;
