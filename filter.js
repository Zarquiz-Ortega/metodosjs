/*
El método filter() en JavaScript es una función que se usa para crear un nuevo array con todos los elementos que
cumplan con una condición especificada. No modifica el array original, y solo incluye los elementos que pasan 
la prueba (es decir, que el callback devuelve true).
*/

//* Ejemplo básico:
//*Supongamos que tenemos un array de números y queremos filtrar aquellos que sean mayores que 10.

const numeros1 = [5, 12, 8, 130, 44];
const mayoresQueDiez = numeros1.filter((numeros) => numeros > 10);

console.log(mayoresQueDiez);

//! EJEMPLO CON OBJ
const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 16 },
    { nombre: "Pedro", edad: 30 },
    { nombre: "Lucía", edad: 17 },
];

const mayoresDeEdad = personas.filter((personas) => personas.edad >= 18);

console.log(mayoresDeEdad);

//! EJERCICIO 1

const numeros2 = [5, -12, 8, -130, 44, -3];
// Filtra los números negativos


//! EJERCICIO 2
const productos = [
    { nombre: "Camiseta", precio: 15 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
    { nombre: "Sombrero", precio: 10 },
];
// Filtra los productos cuyo precio es mayor o igual a 20


