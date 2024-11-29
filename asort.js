/*
Simulación de asort() en JavaScript
Si tienes un objeto o un array asociativo que necesitas ordenar por valores, puedes hacerlo con estos pasos:
Convierte el objeto en un array de pares clave-valor.
Ordena el array con sort() basado en los valores.
Opcionalmente, puedes reconstruir el objeto ordenado.
 */

/*
Ejemplo: Ordenar un objeto por valores
Supongamos que tienes un objeto:
Quieres ordenarlo por los valores en orden ascendente (simulando asort):
 */
const datos = { a: 3, b: 1, c: 2 };

// Convertir el objeto a un array de pares clave-valor
const pares = Object.entries(datos);

// Ordenar los pares según los valores
pares.sort(([, valorA], [, valorB]) => valorA - valorB);

// Reconstruir el objeto ordenado
const ordenado = Object.fromEntries(pares);

console.log(ordenado);
// Salida: { b: 1, c: 2, a: 3 }

/*
Ejemplo: Ordenar un array de objetos
Si tienes un array de objetos, puedes usar sort() directamente:
 */
const personas = [
    { nombre: 'Ana', edad: 30 },
    { nombre: 'Juan', edad: 20 },
    { nombre: 'Pedro', edad: 25 }
];

// Ordenar por edad de menor a mayor
personas.sort((a, b) => a.edad - b.edad);

console.log(personas);

//? Ejercicios para practicar con sort() en objetos
/*
Ejercicio 1: Ordenar un objeto por valores
Dado el siguiente objeto, ordénalo por los valores en orden ascendente:
 */
const calificaciones = {Maria: 100, Jose: 75, Ana: 65 };
// Ordena este objeto por sus valores
const cal = Object.entries(calificaciones)

cal.sort(([, valorA], [, valorB]) => valorA - valorB )

const calAsort = Object.fromEntries(cal)

console.log(calAsort)

/*
Ejercicio 2: Ordenar un array de objetos
Dado un array de productos, ordénalo por precio de mayor a menor:
 */
const productos = [
    { nombre: 'Pantalón', precio: 50 },
    { nombre: 'Zapatos', precio: 30 },
    { nombre: 'Camisa', precio: 20 },
];
// Ordena los productos por precio descendente


productos.sort((a, b) => a.precio - b.precio)

console.log(productos)