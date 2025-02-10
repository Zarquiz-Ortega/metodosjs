/*
Método shift()
El método shift() se utiliza para eliminar el primer elemento de un array y devolverlo. 
Este método modifica el array original, es decir, cambia el array al eliminar el primer elemento.
*/

//? const elementoEliminado = array.shift();

/*
Ejemplo básico:
Supongamos que tienes un array y quieres eliminar el primer elemento:
*/
const numeros = [1, 2, 3, 4];

const eliminado = numeros.shift();

console.log(eliminado); 
console.log(numeros);   


/*
Ejemplo con objetos:
Si tienes un array de objetos y quieres eliminar el primer objeto:
*/

const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 16 },
    { nombre: 'Pedro', edad: 30 }
];

const personaEliminada = personas.shift();

console.log(personaEliminada);
console.log(personas);

//?Ejercicios para practicar con shift()

/* 
Ejercicio 1: Eliminar números de un array
Tienes un array con varios números. Usa shift() para eliminar 
el primer número y muestra el resultado del array después de la eliminación.
*/

const numeros2 = [10, 20, 30, 40, 50];
// Elimina el primer número y muestra el array resultante

/*
Ejercicio 2: Eliminar productos de una lista
Tienes un array de objetos que representa productos. 
Usa shift() para eliminar el primer producto de la lista y muestra el producto eliminado y el array resultante.
*/


const productos = [
    { nombre: 'Camiseta', precio: 15 },
    { nombre: 'Pantalón', precio: 30 },
    { nombre: 'Zapatos', precio: 50 }
];
// Elimina el primer producto y muestra el resultado
