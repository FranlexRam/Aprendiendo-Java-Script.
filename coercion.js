//Coercion es el proceso de convertir el valor de un tipo a otro.


//Coercion implicita: js interpreta a su manera.

var a = 4 + "7";
//47
typeof a // string. el operador (+) en tipos de valores diferentes genera una concatenacion

var b = 4 * "7";
//28
typeof b // js entiende que queriamos hacer una operacion numerica y el operador (*) multiplica los numeros.



//Coercion explicita: nosotros obligamos a que cambie de un tipo de valor a otro a nuestra manera.

var a = 20;
var b = a + "";
console.log(b); //20 (valor tipo string)
typeof b //string
typeof a //number

var c = String(a); //la variable "a" se convierte en un string a traves de la variable "c"
typeof c //string

var d = Number(c); //la variable "c" se convierte en un number a traves de la variable "d"
typeof d // number