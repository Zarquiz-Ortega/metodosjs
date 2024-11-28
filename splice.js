/**
Método splice()
El método splice() se utiliza para agregar, eliminar o reemplazar elementos de un array.
A diferencia de slice(), este método modifica directamente el array original.
 */

//?  array.splice(inicio, cantidad, item1, item2, ..., itemN);


/*
Ejemplo básico: Eliminar elementos
Si quieres eliminar elementos de un array:
 */

const numeros = [1, 2, 3, 4, 5];

const eliminados = numeros.splice(1, 2);

console.log(eliminados); // Salida: [2, 3]
console.log(numeros);    // Salida: [1, 4, 5]


/*
Ejemplo: Agregar elementos
Si quieres agregar elementos al array:
 */

const colores = ['rojo', 'azul'];

colores.splice(1, 0, 'verde', 'amarillo');

console.log(colores); // Salida: ['rojo', 'verde', 'amarillo', 'azul']


/*
Ejemplo: Reemplazar elementos
Si quieres reemplazar elementos del array:
 */

const letras = ['a', 'b', 'c', 'd'];

const reemplazados = letras.splice(1, 2, 'x', 'y');

console.log(letras);        // Salida: ['a', 'x', 'y', 'd']
console.log(reemplazados);  // Salida: ['b', 'c']


//?Ejercicios para practicar con splice()

/*
Ejercicio 1: Eliminar números
Tienes un array con números. Usa splice() para eliminar los elementos en las posiciones 2 y 3,
y muestra el array resultante.
 */

const numeros2 = [10, 20, 30, 40, 50];
// Elimina los números en las posiciones 2 y 3


/*
Ejercicio 2: Agregar elementos
Tienes un array con nombres de frutas. Usa splice() para agregar 'mango' y 'fresa' en la segunda posición del array
 */
const frutas = ['manzana', 'plátano', 'uva'];
// Agrega 'mango' y 'fresa' en la segunda posición

