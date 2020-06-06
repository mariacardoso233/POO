//passagem dos números dados pelo utilizador para a função
const getNums = (num1, num2) => {
    let soma = 0;
    for (let i = num1; i <= num2; i++) {
        //Verificação dos números múltiplos de 5 e pares
        if (i % 5 === 0 && i % 2 === 0) {
            console.log(i);
            sum = +i;
        }
    }
}

let num1, num2
do {
    num1 = +prompt("Digite o primeiro número");
} while (num1 < 1 || num1 > 99);

do {
    num2 = +prompt("Digite o segundo número");
} while (num2 < 1 || num2 > 99 || num2 <= num1);

console.log(`O resultado final é de ${getNums(num1, num2)}`);