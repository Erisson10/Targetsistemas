//2. Sequência de Fibonacci e verificação de número pertencente.
function fibonacciCheck(num) {
    let a = 0, b = 1;

    while (a <= num) {
        if (a === num) {
            return `O número ${num} pertence à sequência de Fibonacci.`;
        }
        let temp = a;
        a = b;
        b = temp + b;
    }

    return `O número ${num} não pertence à sequência de Fibonacci.`;
}

// Exemplo de uso
const numero = parseInt(prompt("Digite um número:"));
console.log(fibonacciCheck(numero));


