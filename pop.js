/*
Método pop()
El método pop() se usa para eliminar el último elemento de un array y devolver ese elemento eliminado. 
Este método modifica el array original, es decir, cambia el array al eliminar el último elemento.
*/
//* Ejemplo básico:
//* Supongamos que tenemos un array de números, y queremos eliminar el último elemento:

const numeros1 = [1, 2, 3, 4, 5];

const eliminado = numeros1.pop();

console.log(eliminado);
console.log(numeros1);

//TODOS  EJEMPLO CON OBJ
const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 16 },
    { nombre: "Pedro", edad: 30 },
];

const personaEliminada = personas.pop();

console.log(personaEliminada);
console.log(personas);

//! EJERCICIO 1
const numeros2 = [10, 20, 30, 40, 50];
// Elimina el último número y muestra el array resultante


//! EJERCICIO 2

const productos = [
    { nombre: "Camiseta", precio: 15 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
];
// Elimina el último producto y muestra el array resultante

