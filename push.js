/*
Método push()
El método push() se usa para agregar uno o más elementos al final de un array. 
Este método modifica el array original y devuelve la nueva longitud del array después de la adición.
*/


//* Ejemplo básico:
//* Supongamos que tenemos un array y queremos agregar un nuevo elemento al final:


const numeros1 = [1, 2, 3];

const nuevaLongitud = numeros1.push(4);

console.log(numeros1);
console.log(nuevaLongitud);

//* Ejemplo con múltiples elementos:
// *Si quieres agregar varios elementos al mismo tiempo:

const frutas = ['manzana', 'plátano'];

const nuevafruta = frutas.push('naranja', 'uva');

console.log(frutas);
console.log(nuevafruta);


//* Ejemplo con objetos:
//* Si tienes un array de objetos y quieres agregar un nuevo objeto:

const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 16 }
];

personas.push({ nombre: 'Pedro', edad: 30 });

console.log(personas);

//! Cómo funciona:
//* Agrega elementos al final del array: push() añade uno o más elementos al final del array.
//* Devuelve la nueva longitud: Después de agregar los elementos, el método devuelve la nueva longitud del array.
//* Modifica el array original: Cambia directamente el array al agregar los nuevos elementos.

//? Ejercicios para practicar con push()

const numeros2 = [];
// Agrega los números del 1 al 5 usando push()
numeros2.push(1, 2, 3, 4, 5)

console.log(numeros2)

const productos = [
    { nombre: 'Camiseta', precio: 15 },
    { nombre: 'Pantalón', precio: 30 }
];
// Agrega un nuevo producto al array

productos.push({nombre: 'vestido', precio: 180})

console.log(productos)