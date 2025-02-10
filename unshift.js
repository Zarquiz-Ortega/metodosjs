/*
?Método unshift()
*El método unshift() se usa para agregar uno o más elementos al inicio de un array. 
*Este método modifica el array original y devuelve la nueva longitud del array después de la adición.
*/

//? array.unshift(elemento1, elemento2, ..., elementoN);

/*
Ejemplo básico:
Supongamos que tienes un array y quieres agregar un nuevo elemento al principio:
*/

const numeros = [2, 3, 4];

const nuevaLongitud = numeros.unshift(1);

console.log(numeros);
console.log(nuevaLongitud);

/*
Ejemplo con múltiples elementos:
Si quieres agregar varios elementos al mismo tiempo:
*/
const frutas = ['manzana', 'plátano'];

const nuevafrutas = frutas.unshift('uva', 'naranja');

console.log(frutas);
console.log(nuevafrutas);

/*
Ejemplo con objetos:
Si tienes un array de objetos y quieres agregar un nuevo objeto al principio:
*/

const personas = [
    { nombre: 'Ana', edad: 16 },
    { nombre: 'Pedro', edad: 30 }
];

personas.unshift({ nombre: 'Juan', edad: 25 });

console.log(personas);

//? Ejercicios para practicar con unshift()

/*
Ejercicio 1: Agregar nombres a una lista
Crea un array vacío y usa unshift() para agregar los nombres "María", "Luis" y "Carmen", 
en ese orden, al inicio del array. Muestra el array final.
*/

const nombres = [];
// Agrega los nombres al inicio del array


/*
Ejercicio 2: Agregar productos nuevos a una tienda
Tienes un array de objetos que representa productos en una tienda. 
Usa unshift() para agregar un nuevo producto con nombre "Sombrero" y precio 20 al inicio del array.
*/
const productos = [
    { nombre: 'Camiseta', precio: 15 },
    { nombre: 'Pantalón', precio: 30 }
];
// Agrega un nuevo producto al inicio del array
