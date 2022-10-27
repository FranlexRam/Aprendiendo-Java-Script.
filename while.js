/*Tenemos un programa únicamente para estudiantes, queremos controlar que un usuario ingrese una edad menor de 18
(y mayor que 11 porque es la edad minima para ingresar (no existen edades negativas).
Entonces utilizamos while debido a que no conocemos cuántas veces se equivocará el usuario.*/



var edad = Number(prompt("Ingresar tu edad: "));

while (edad >18 || edad <11){
    edad = Number(prompt("Ingrese un valor correcto: "))
}

console.log("Aceptado, gracias por ingresar al programa");