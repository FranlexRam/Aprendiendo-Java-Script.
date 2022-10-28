//Estructura de datos que permite almacenar valores en propiedades a traves de la sintaxis de llaves y separados por coma.

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalle: function (){
        console.log("Es un auto");
    }
}

//Acceder al objeto usando notacion de []
miAuto["marca"]; //'Toyota'
miAuto["modelo"]; // "Corolla"
miAuto["annio"]; // 2020
miAuto["detalle"](); // "Es un auto"

//Acceder al objeto con notacion de punto .
miAuto.marca; //'Toyota'
miAuto.modelo; // "Corolla"
miAuto.annio; // 2020
miAuto.detalle(); // f detalle()


//Annadir nueva propiedad

miAuto.color = "rojo"
//o
miAuto["color"] = "rojo"