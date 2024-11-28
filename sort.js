
/*
Método sort()
El método sort() se utiliza para ordenar los elementos de un array. 
De forma predeterminada, convierte los elementos a cadenas y los ordena en orden lexicográfico (alfabético).
Si necesitas un orden diferente (por ejemplo, numérico o personalizado), 
puedes proporcionar una función de comparación.
 */

//? array.sort([funciónDeComparación]);

/*
Ejemplo básico: Ordenar cadenas
 */
const frutas = ['manzana', 'naranja', 'uva', 'plátano'];

frutas.sort();

console.log(frutas); // Salida: ['manzana', 'naranja', 'plátano', 'uva']

/*
Ejemplo: Ordenar números
Cuando trabajas con números, la ordenación predeterminada no funciona correctamente:
 */
const numeros = [10, 5, 20, 15];

numeros.sort();

console.log(numeros); // Salida: [10, 15, 20, 5] (orden incorrecto)

/*
Esto sucede porque sort() convierte los números a cadenas. Para ordenarlos correctamente, 
debes proporcionar una función de comparación:
 */
const numeros2 = [10, 5, 20, 15];

numeros2.sort((a, b) => a - b); // Orden ascendente

console.log(numeros2); // Salida: [5, 10, 15, 20]



/*
Ejemplo: Ordenar objetos
Cuando tienes un array de objetos, puedes usar una función de comparación basada en una propiedad del objeto:
 */
const personas = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Pedro', edad: 20 }
];

// Ordenar por edad de menor a mayor
personas.sort((a, b) => a.edad - b.edad);

console.log(personas);

//? Ejercicios para practicar con sort()

/*
Ejercicio 1: Ordenar números de menor a mayor
Tienes un array de números desordenados. Usa sort() para ordenarlos en orden ascendente.
 */

const numeros3 = [40, 10, 30, 20, 50];
// Ordena el array de menor a mayor


/*
Ejercicio 2: Ordenar cadenas en orden inverso
Tienes un array con nombres de frutas. Usa sort() para ordenarlas en orden alfabético inverso.
 */

const frutas2 = ['manzana', 'uva', 'plátano', 'naranja'];
// Ordena las frutas en orden alfabético inverso

/*
Ejercicio 3: Ordenar objetos por una propiedad
Tienes un array de objetos que representan productos. Usa sort() para ordenarlos por precio de menor a mayor.
 */

const productos = [
    { nombre: 'Camiseta', precio: 20 },
    { nombre: 'Pantalón', precio: 50 },
    { nombre: 'Zapatos', precio: 30 }
];
// Ordena los productos por precio de menor a mayor
