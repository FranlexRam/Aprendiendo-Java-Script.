//Juego de piedra, papel o tijera:

var Pi = "piedra";
var Pa = "papel";
var Ti = "tijera";

var resultado = function (yo,pc) {
    if (yo != pc) {
        if (yo === Pi && pc === Ti){
            console.log("Yo gane con " + Pi);
        } else if (yo === Pa && pc === Pi) {
            console.log("Yo gane con " + Pa);
        } else if (yo === Ti && pc === Pa) {
            console.log("Yo gane con " + Ti);
        } else {
            console.log("La pc gano!!");
        }
    } else if (yo === pc) {
        console.log("Es un empate porque ambos sacaron igual");
    }
}

resultado (Pi,Pa);







//Practica hecha por mi:
var Pi = "piedra";
var Pa = "papel";
var Ti = "tijera";

var resultado = function (Jugador1, CPU) {
    if (Jugador1 != CPU){
        if (Jugador1 === Pi && CPU === Ti) {
            console.log("Jugador 1 gano con " + Pi);
        } else if (Jugador1 === Pa && CPU === Pi) {
            console.log("Jugador 1 gano con " + Pa);
        } else if (Jugador1 === Ti && CPU === Pa) {
            console.log("Jugador 1 gano con " + Ti);
        } else {
            console.log("CPU gano!!");
        }

    }else if (Jugador1 === CPU) {
        console.log("Empate");
    }
}

resultado (Ti,Pi);//CPU gano!!