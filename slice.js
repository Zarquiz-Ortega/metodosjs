/* 
Método slice()
El método slice() se utiliza para extraer una parte de un array sin modificar el original. 
Devuelve un nuevo array con los elementos seleccionados, según los índices que especifiques.
*/

//? const nuevoArray = array.slice(inicio, fin);

/* 
Ejemplo básico:
Supongamos que tienes un array y quieres extraer una parte de él:
*/

const numeros = [1, 2, 3, 4, 5, 6];

const subArray = numeros.slice(2, 5);

console.log(subArray); 
console.log(numeros);  

/*
Ejemplo sin el argumento fin:
Si no especificas el argumento fin, slice() toma desde el índice inicio hasta el final del array:
*/

const numeros2 = [1, 2, 3, 4, 5, 6];

const subArray2 = numeros2.slice(3);

console.log(subArray2); 

/*
Ejemplo con índices negativos:
Puedes usar índices negativos para contar desde el final del array:
*/

const numeros3 = [1, 2, 3, 4, 5, 6];

const subArray3 = numeros.slice(-3, -1);

console.log(subArray3); 

//?Ejercicios para practicar con slice()
/*
Ejercicio 1: Extraer la mitad de un array
Tienes un array con números del 1 al 10. Usa slice() para extraer los primeros 5 elementos en un nuevo array.
*/

const numeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Extrae los primeros 5 elementos



/*
Ejercicio 2: Seleccionar los últimos 3 elementos
Tienes un array con nombres de frutas. Usa slice() para obtener un nuevo array con los últimos 3 nombres.
*/

const frutas = ['manzana', 'plátano', 'uva', 'naranja', 'kiwi', 'sandía'];
// Extrae los últimos 3 elementos

