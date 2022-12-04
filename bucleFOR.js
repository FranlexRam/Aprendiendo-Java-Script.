//Que es un bucle? Ciclo que se repite hasta que se cumpla una condicion.
//Tipos de bucles: For, While, etc.



//**Usar BUCLE for en texto

var estudiantes = ["Maria","Pedro","Luis","Gilberto"];

function saludarEstudiantes (estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (var i=0; i<estudiantes.length; i++){    //Se usa var = i porque se habla del index de cada elemento en el array "estudiantes"
    saludarEstudiantes(estudiantes[i]);
}




//Mismo caso usando BUCLE for...of

var estudiantes = ["Maria","Pedro","Luis","Gilberto"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}