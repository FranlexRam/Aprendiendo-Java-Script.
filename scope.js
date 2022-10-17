// Scope GLOBAL:


var nombre = "JavaScript"

function saludar(){
    console.log("Hola " + nombre)
}

saludar()


// Scope local:


function saludo() {
    var nombre = "Andres"
    console.log(nombre)
}

saludo()
console.log(nombre)