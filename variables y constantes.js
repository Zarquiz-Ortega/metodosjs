const num1 = 10;
const num2 = 20;

let resultado = num1 + num2;
console.log(resultado);
resultado = num1 * num2;
console.log(resultado);
//num1 = 5;

const nota = (cal) => {
    const msg = cal >= 8 ? `la calificacion es de ${cal}  as aprobado ` : `o no la calificacion es de ${cal}  as reprovado`;
    return msg;
};

console.log(nota(7));

const mayorYmenor = (num1, num2) => {
    let canPares = 0;
    for (let i = num1; i < num2 ; i++) {
        i%2 == 0 ? canPares++  : '';
        //console.log(i);
    }
    console.log(`La cantidad de pares es: ${canPares}`);
}

mayorYmenor(10,50);

