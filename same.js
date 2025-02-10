/*
Método some()
El método some() verifica si al menos un elemento del array cumple con una condición definida en una 
función de prueba. Si algún elemento satisface la condición, devuelve true. Si ningún elemento cumple, 
devuelve false.
 */
//? array.some(funciónDePrueba(elemento, índice, array));

/*
Ejemplo básico: Verificar números positivos
 */
const numeros = [-1, -2, 3, -4];

const tienePositivos = numeros.some(num => num > 0);

console.log(tienePositivos);

/*
Ejemplo: Verificar cadenas largas
 */
const palabras = ['casa', 'elefante', 'sol', 'girasol'];

const tienePalabraLarga = palabras.some(palabra => palabra.length > 5);

console.log(tienePalabraLarga);

/*
Ejemplo: Comprobar objetos en un array
 */
const usuarios = [
    { nombre: 'Ana', activo: true },
    { nombre: 'Juan', activo: false },
    { nombre: 'Pedro', activo: false }
];

const hayActivos = usuarios.some(usuario => usuario.activo);

console.log(hayActivos);


//? Ejercicios para practicar con some()
/*
Ejercicio 1: Verificar si hay números pares
Dado el siguiente array de números, usa some() para verificar si hay algún número par.
 */
const numeros2 = [1, , 5, 7, 9];
// ¿Hay algún número par?

/*
Ejercicio 2: Comprobar edades
Tienes un array de edades. Usa some() para verificar si hay alguna persona mayor de 18 años.
 */

const edades = [12, 15, 16, 10, 20];
// ¿Alguna edad es mayor de 18?


/*
Ejercicio 3: Verificar palabras con vocal inicial
Tienes un array de palabras. Usa some() para verificar si alguna empieza con una vocal.
*/
const palabras2 = ['casa', 'elefante', 'sol', 'arbol'];
// ¿Alguna palabra empieza con una vocal?
