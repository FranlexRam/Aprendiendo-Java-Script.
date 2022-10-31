//Practicando if, else if, else
var workHours = Number(prompt("Indique sus horas trabajadas"));

if (workHours>=8){
    console.log("Estas listo por hoy");
} else {
    console.log("Aun tienes que seguir trabajando");
}



//Piedra, papel o tijera


var Pi="Piedra";
var Pa="Papel";
var Ti="Tijera";


var resultado = function (yo,pc){
    if (yo!=pc){
        if (yo===Pi && pc===Ti){
            console.log("Yo gane con " + Pi);
        }else if (yo===Pa && pc===Pi){
            console.log("Yo gane con "+ Pa);
        }else if (yo===Ti && pc===Pa){
            console.log("Yo gane con "+ Ti);
        } else {
            console.log("Gano la PC!!");
        }
    }else if (yo===pc){
        console.log("Es um empate");
    }
}
var num1 = 5;
var num2 = 7;
var num3 = 3;
var average = avg(num1,num2,num3);

function avg(x,y,z) {
    return (x+y+z)/3
}