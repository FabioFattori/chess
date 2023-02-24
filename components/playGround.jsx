import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { CreaBianchi, CreaNeri } from "../functions/CreaPezzi";
import Casella from "./Casella";

function PlayGround() {
  //matrice
  const [p, setMatrix] = useState(null);
  const [selectedPezzo, setSelected] = useState(null)

  useEffect(() => {
    CreaBianchi();
    setMatrix(CreaNeri());
  }, []);

  const setterSelect = (toSet) => {
    setSelected(toSet)
  }


  const _setter = (toSet) => {
    setMatrix(null);

    setTimeout(() => {
      setMatrix(toSet)
    }, 0);
  }

  return (
    <View style={styles.container}>
      {p ? (
        <View>
          <View style={styles.SingleRow}>
            <Casella CasellaObj={p[0][7]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[1][7]} colore={false} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[2][7]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[3][7]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[4][7]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[5][7]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[6][7]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[7][7]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />
          </View>
          <View style={styles.SingleRow}>
            <Casella CasellaObj={p[0][6]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[1][6]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[2][6]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[3][6]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[4][6]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[5][6]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[6][6]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[7][6]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />
          </View>
          <View style={styles.SingleRow}>
            <Casella CasellaObj={p[0][5]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[1][5]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[2][5]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[3][5]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[4][5]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[5][5]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[6][5]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[7][5]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />
          </View>
          <View style={styles.SingleRow}>
            <Casella CasellaObj={p[0][4]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[1][4]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[2][4]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[3][4]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[4][4]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[5][4]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[6][4]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[7][4]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />
          </View>
          <View style={styles.SingleRow}>
            <Casella CasellaObj={p[0][3]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[1][3]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[2][3]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[3][3]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[4][3]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[5][3]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[6][3]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[7][3]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />
          </View>
          <View style={styles.SingleRow}>
            <Casella CasellaObj={p[0][2]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[1][2]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[2][2]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[3][2]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[4][2]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[5][2]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[6][2]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[7][2]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />
          </View>
          <View style={styles.SingleRow}>
            <Casella CasellaObj={p[0][1]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[1][1]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[2][1]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[3][1]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[4][1]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[5][1]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[6][1]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[7][1]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />
          </View>
          <View style={styles.SingleRow}>
            <Casella CasellaObj={p[0][0]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[1][0]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[2][0]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[3][0]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[4][0]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[5][0]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[6][0]} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />

            <Casella CasellaObj={p[7][0]} colore={true} matrix={p} setter={_setter} PezzoSelezionato={selectedPezzo} setPezzo={(toSet) => setterSelect(toSet)} />
          </View>

        </View>
      ) : (
        <View>

        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  SingleRow: {
    flexDirection: "row",
  },

  container: {
    marginTop: -350,
  }
});

export default PlayGround;
