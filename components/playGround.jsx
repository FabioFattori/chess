import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { CreaBianchi, CreaNeri } from "../functions/CreaPezzi";
import Casella from "./Casella";

function PlayGround() {
  //matrice
  const [p, setMatrix] = useState(null);

  useEffect(() => {
    CreaBianchi();
    setMatrix(CreaNeri());
  }, []);

  return (
    <View style={styles.container}>
      {p ? (
        <View>
          <View style={styles.SingleRow}>
            <Casella CasellaObj={p[0][7]} colore={true}/>

            <Casella CasellaObj={p[1][7]} colore={false}/>

            <Casella CasellaObj={p[2][7]} colore={true}/>

            <Casella CasellaObj={p[3][7]} />

            <Casella CasellaObj={p[4][7]} colore={true}/>

            <Casella CasellaObj={p[5][7]} />

            <Casella CasellaObj={p[6][7]} colore={true}/>

            <Casella CasellaObj={p[7][7]} />
          </View>
          <View style={styles.SingleRow}>
            <Casella CasellaObj={p[0][6]} />

            <Casella CasellaObj={p[1][6]} colore={true}/>

            <Casella CasellaObj={p[2][6]} />

            <Casella CasellaObj={p[3][6]} colore={true}/>

            <Casella CasellaObj={p[4][6]} />

            <Casella CasellaObj={p[5][6]} colore={true}/>

            <Casella CasellaObj={p[6][6]} />

            <Casella CasellaObj={p[7][6]} colore={true}/>
          </View>
          <View style={styles.SingleRow}>
            <Casella CasellaObj={p[0][5]} colore={true}/>

            <Casella CasellaObj={p[1][5]} />

            <Casella CasellaObj={p[2][5]} colore={true}/>

            <Casella CasellaObj={p[3][5]} />

            <Casella CasellaObj={p[4][5]} colore={true}/>

            <Casella CasellaObj={p[5][5]} />

            <Casella CasellaObj={p[6][5]} colore={true}/>

            <Casella CasellaObj={p[7][5]} />
          </View>
          <View style={styles.SingleRow}>
            <Casella CasellaObj={p[0][4]} />

            <Casella CasellaObj={p[1][4]} colore={true}/>

            <Casella CasellaObj={p[2][4]} />

            <Casella CasellaObj={p[3][4]} colore={true}/>

            <Casella CasellaObj={p[4][4]} />

            <Casella CasellaObj={p[5][4]} colore={true}/>

            <Casella CasellaObj={p[6][4]} />

            <Casella CasellaObj={p[7][4]} colore={true}/>
          </View>
          <View style={styles.SingleRow}>
            <Casella CasellaObj={p[0][3]} colore={true}/>

            <Casella CasellaObj={p[1][3]} />

            <Casella CasellaObj={p[2][3]} colore={true}/>

            <Casella CasellaObj={p[3][3]} />

            <Casella CasellaObj={p[4][3]} colore={true}/>

            <Casella CasellaObj={p[5][3]} />

            <Casella CasellaObj={p[6][3]} colore={true}/>

            <Casella CasellaObj={p[7][3]} />
          </View>
          <View style={styles.SingleRow}>
            <Casella CasellaObj={p[0][2]} />

            <Casella CasellaObj={p[1][2]} colore={true}/>

            <Casella CasellaObj={p[2][2]} />

            <Casella CasellaObj={p[3][2]} colore={true}/>

            <Casella CasellaObj={p[4][2]} />

            <Casella CasellaObj={p[5][2]} colore={true}/>

            <Casella CasellaObj={p[6][2]} />

            <Casella CasellaObj={p[7][2]} colore={true}/>
          </View>
          <View style={styles.SingleRow}>
            <Casella CasellaObj={p[0][1]} colore={true}/>

            <Casella CasellaObj={p[1][1]} />

            <Casella CasellaObj={p[2][1]} colore={true}/>

            <Casella CasellaObj={p[3][1]} />

            <Casella CasellaObj={p[4][1]} colore={true}/>

            <Casella CasellaObj={p[5][1]} />

            <Casella CasellaObj={p[6][1]} colore={true}/>

            <Casella CasellaObj={p[7][1]} />
          </View>
          <View style={styles.SingleRow}>
            <Casella CasellaObj={p[0][0]} />

            <Casella CasellaObj={p[1][0]} colore={true}/>

            <Casella CasellaObj={p[2][0]} />

            <Casella CasellaObj={p[3][0]} colore={true}/>

            <Casella CasellaObj={p[4][0]} />

            <Casella CasellaObj={p[5][0]} colore={true}/>

            <Casella CasellaObj={p[6][0]} />

            <Casella CasellaObj={p[7][0]} colore={true}/>
          </View>
          
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  SingleRow: {
    flexDirection: "row",
  },

  container:{
    marginTop:-350,
  }
});

export default PlayGround;
