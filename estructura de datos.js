const sueldos = ['100','200','300','400'];

console.log(`el sueldo del empleado es: ${sueldos[0]}`);
console.log(`el sueldo del empleado es: ${sueldos[1]}`);
console.log(`el sueldo del empleado es: ${sueldos[2]}`);
console.log(`el sueldo del empleado es: ${sueldos[3]}`);
console.log(`el sueldo del empleado es: ${sueldos[4]}`); //si no esta defino muestra undefined

for (let index = 0; index < sueldos.length; index++) {
    const sueldo = sueldos[index];
    console.log(`el sueldo es : ${sueldo}`);
}

console.log(sueldos.length); //sirve pra ver la longitud del arry

const datos = ['Zarquiz',24 , true, 3.1416] //sele puede agregar cualquier dato o valor 

//el metodo push sirve para agregar elementos al arreglo 

const pushArry = (num1) =>{
    const arry = []
    for (let i = 0; i < num1; i++) {
        arry.push(parseInt(Math.random() * 100))
    }

    for (let index = 0; index < arry.length; index++) {
        console.log(arry[index]);    
    }
}

pushArry(5)

const alturas = [178, 172 ,165, 154, 172, 155, 179, 190, 155, 165, 165, 175 , 166]

const promAlturas = (altura) =>{
    let suma = 0
    let altas = 0
    let bajas = 0
    for (let i = 0; i < altura.length; i++) {
        suma += altura[i]
    }
    const promedio = parseInt(suma/altura.length)

    for (let j = 0; j < altura.length; j++) {
        promedio > altura[j] ? altas++ : bajas++
    }
    console.log(`promedio ${promedio}cm`);
    console.log(`altas del promedio ${altas}`);
    console.log(`bajas del promedio ${bajas}`);
}

promAlturas(alturas);

//* arreglos paralelos

const name = ['zarquiz', 'luis' , 'steven ']
const age = [15 , 10 ,30]

const mayorDeEdad = (name, age) =>{
    for (let i = 0; i < age.length; i++) {
        console.log(`${name[i]} - ${age[i]}`);
        age[i] >= 18 ? console.log(`${name[i]} es mayor de edad`) : ''
    }
} 

mayorDeEdad(name, age);

const arry1 = [10, 5, 20, 45, 50, 40]

const numMenor= (nums) =>{
    let menor = 100
    let rep = 0

    for (let m = 0; m < nums.length; m++) {
        nums[m] < menor ? menor = nums[m] : ''
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] == menor ? rep++ : ''
    }

    console.log(`el numero menos es: ${menor}`);
    rep > 1 ? console.log('el numero se repite en el arreglo') : ''
}

numMenor(arry1)

const nombres = ['zarquiz', 'carlos', 'ana', 'marcos', 'maria', 'juan']

const mayorNombre =  (nombres) => {
    let menor = nombres[0]
    nombres.forEach(name => {
        name <  menor ? menor = name : ''
    });
    return menor
}

console.log(mayorNombre(nombres));


// ordenamiento de arreglos