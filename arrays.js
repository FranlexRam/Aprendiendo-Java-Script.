//Un array es una estructura de datos de tipo objeto


//Para conocer la cantidad de elementos dentro de un array:

var array = [1,2,3,4,5,6];
var longitud = array.length;
console.log(longitud);//6


var frutas = ["Manzana","Platano", "Cereza","Fresa"];
console.log(frutas);//(4) ["Manzana","Platano", "Cereza","Fresa"]

//Para acceder a un elemento especifico:
console.log(frutas[0]);//Manzana
console.log(frutas [2]);//Cereza

//Para agregar mas elementos al final del array: .PUSH
var frutas = ["Manzana","Platano", "Cereza","Fresa"];
var masFrutas = frutas.push("Uvas");
console.log(frutas);

//Para quitar ultimo elemento: .POP
var ultimo = frutas.pop("Uvas");
console.log(frutas);