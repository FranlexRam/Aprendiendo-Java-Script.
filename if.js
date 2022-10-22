if (true) {
    console.log("Hola, soy verdadero");
}// Hola, soy verdadero

if (false) {
    console.log("Hola, soy verdadero");
}// Undefined


if (false) {
    console.log("Hola");
} else {
    console.log("Soy falso");
}// Soy falso


if (true) {
    console.log("Hola");
} else {
    console.log("Soy falso");
}// Hola


//if, else if, else

/* Ejemplo para una persona que va a votar.
Si su edad es 18, votaria por 1era vez;
Si su edad es mayor a 18, votaria nuevamente;
Si su edad es menor a 18, no puede votar. */


var edad = 18;

if (edad === 18) {
    console.log("Puedes votar por 1era vez");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("No puedes votar");
}//Puedes votar por 1era vez


var edad = 26;

if (edad === 18) {
    console.log("Puedes votar por 1era vez");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("No puedes votar");
}//Puedes votar de nuevo


var edad = 17;

if (edad === 18) {
    console.log("Puedes votar por 1era vez");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("No puedes votar");
}//No puedes votar