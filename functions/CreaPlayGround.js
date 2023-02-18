import { Casella } from "../Class/Casella";

function creaPlayGround() {
    var Playground = new Array(8);
    for (let i = 0; i < Playground.length; i++) {
        Playground[i] = new Array(8);
    }

    for (let i = 0; i < Playground.length; i++) {
        for (let j = 0; j < Playground[i].length; j++) {
            var c=new Casella(i,j);
            Playground[i][j] = c;
            
        }
        
    }

    return Playground;
}

export {creaPlayGround};