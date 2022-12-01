//Recorridos de arrays con FILTER, MAP, FIND, forEach, SOME.



//Se tiene el siguiente array: (objetos dentro de un array)

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
  ];



  //**Metodo FILTER genera un nuevo array sin modificar el original y FILTRA por condicion.
  var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
  });
  console.log(articulosFiltrados);




  //**Metodo MAP genera un nuevo array sin modificar el original y "mapea todos los elementos dentro del array".
  var nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre;
  })
  console.log(nombreArticulos);




  //**Metodo FIND valida true o false si el parametro existe o no.
  var algunArticulo = articulos.find(function(articulo){
    return (articulo.nombre === "Laptop");
  });
  console.log(algunArticulo); //  { nombre: 'Laptop', costo: 3000 }




  //**Metodo forEach, no genera un nuevo array.
  articulos.forEach(function(articulo){
    console.log(articulo.nombre);
  });
  /* 
{ nombre: 'Bici' }
{ nombre: 'TV' }
...
{ nombre: 'Audifonos' }
*/




/* **Metodo SOME, consiste en retornar un valor lógico verdadero si existe al menos
un elemento que cumpla la condición establecida en la función (callback).*/

//EJEMPLO: saber si existe al menos un artículo con el costo menor o igual que 700.

var existeArticulo = articulos.some(function(articulo){
    return articulo.costo <= 1700
});
console.log(existeArticulo) // true

