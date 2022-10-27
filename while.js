var edad = Number(prompt("Ingresar tu edad: "));

while (edad >18 || edad <=0){
    edad = Number(prompt("Ingrese un valor correcto: "))
}

console.log("Aceptado, gracias por ingresar al programa");