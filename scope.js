// Scope GLOBAL:


var nombre = "JavaScript" //scope global

function saludar(){  // a partir del momento en el que se inicia una funcion, comienza un scope local.
    console.log("Hola " + nombre)
}

saludar() // resultado: Hola JavaScript


// Scope local:


function saludo() {
    var nombre = "Andres"
    console.log(nombre)
}

saludo()
console.log(nombre)
// resultado: Andres. JavaScript.


// Scope local:
function saludo() {
    var nombre = "Andres"
    console.log(nombre)
}

saludo() // "Andres"
console.log(nombre) // ReferenceError: nombre is not defined 