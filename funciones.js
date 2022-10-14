// Funciones Declarativas: No es anonima ya que se le esta colocando un nombre.

function miFuncion() {
    return 3;
}

miFuncion (); //Se manda a llamar la funcion declarativa con el nombre de la funcion.


// Funciones de expresion: Se le conoce como funciones anonimas porque la funcion no tiene nombre.

var miFuncion = function (a,b) {
    return a + b;
}

miFuncion(); // Se manda a llamar la funcion expresiva con el nombre de la variable.
// Al ser una funcion, se colocan los parentesis.