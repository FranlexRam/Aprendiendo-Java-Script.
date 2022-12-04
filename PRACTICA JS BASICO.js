/*  1) Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2.
Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.*/




let num = Math.ceil(Math.random()*10);
let num2 = Math.ceil(Math.random()*10);
const result = num + num2;
let questions = {
  q1: `Cuanto es ${num} + ${num2}`
}


function Quizzer() {
  let userInput = prompt(questions.q1);
  if (userInput == result) {
    alert("Felicitaciones, respondiste correctamente el desafio 😎");
  } else {
    alert("lamentablemente, tu respuesta es incorrecta, sigue practicando ❌!");
  }
}
Quizzer();


RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRTDDFT-  

/*  2) Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.*/



let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];


function readArray (array){
  console.log(array[0]);
}

readArray(myArray);



/*  3) Crea una función que pueda recibir cualquier array como parámetro e imprima
todos sus elementos uno por uno (no se vale imprimir el array completo). */

let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];


function allArray (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i+1}) ${array[i]}`);
    }
}

allArray(myArray);



/*  4) Crea una función que pueda recibir cualquier objeto como parámetro e imprima
todos sus elementos uno por uno (no se vale imprimir el objeto completo). */


let myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969
};


function newObject(object) {
  for (const key in object) {
    console.log(object[key]);
  }  
}

newObject(myCar);0005
05
