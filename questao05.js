//5. Inverter caracteres de uma string sem usar reverse.
function inverterString(s) {
    let invertida = "";
    for (let i = s.length - 1; i >= 0; i--) {
        invertida += s[i];
    }
    return invertida;
}

// Exemplo de uso
const string = prompt("Digite uma string:");
console.log("String invertida:", inverterString(string));
