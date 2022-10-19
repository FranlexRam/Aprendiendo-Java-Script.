var miNombre; // Declarar una variable.
miNombre = "Diego" // Iniciar una variable.

/* Dos pasos para utilizar variables:
1-Declarar variable.
2-Iniciar una variable.*/


// Forma real de utilizarla:

var miNombre  = "Diego";



console.log(miNombre);

// Resultado: undefined

var miNombre = undefined;
console.log(miNombre + "Soy ese hoisting");
miNombre = "Diego";

// resultado: undefinedSoy ese hoisting
// "Diego"