/*
Método map()
El método map() se utiliza para crear un nuevo array transformando cada elemento del array original 
mediante una función de callback.
No modifica el array original, sino que devuelve un nuevo array.
 */

//? const nuevoArray = array.map(callback(currentValue, index, array));

//* Ejemplo básico:
//Supongamos que tienes un array de números y quieres duplicar cada valor:
const numeros = [1, 2, 3, 4, 5];

const duplicados = numeros.map(numero => numero * 2);

console.log(duplicados);
console.log(numeros);

//* Ejemplo con objetos:
// Si tienes un array de objetos y quieres transformar sus propiedades, como agregar un nuevo atributo:
const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 16 },
    { nombre: 'Pedro', edad: 30 }
];

const personasConEstado = personas.map(persona => ({
    ...persona, //! Usamos el operador spread (...) para mantener los datos originales del objeto.
    esMayorDeEdad: persona.edad >= 18
}));

console.log(personasConEstado);

//* Ejercicios para practicar con map()

/*
Ejercicio 1: Convertir temperaturas
Tienes un array con temperaturas en grados Celsius. Usa map() para convertirlas a Fahrenheit.
La fórmula para la conversión es: F = C x 1.8 + 32 
*/

const celsius = [0, 20, 30, 40];
// Convierte las temperaturas a Fahrenheit
const fahrenheit = celsius.map(celsius => (celsius * 1.8 ) +32 )

console.log(fahrenheit)
/*
Ejercicio 2: Calcular precios con impuestos
Tienes un array de objetos que representa productos en una tienda. 
Cada producto tiene un nombre y un precio. 
Usa map() para calcular un nuevo array donde cada producto incluya un precio con un impuesto del 16%.
 */

const productos = [
    { nombre: 'Camiseta', precio: 100 },
    { nombre: 'Pantalón', precio: 200 },
    { nombre: 'Zapatos', precio: 300 }
];
// Calcula los precios con impuestos
const impuestoAplicado = productos.map(producto => ({
    ...producto,
    precio : (producto.precio * 0.16) + producto.precio
}))

console.log(impuestoAplicado)