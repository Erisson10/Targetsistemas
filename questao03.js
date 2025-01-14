//3. Análise do faturamento diário.
const faturamentoDiario = {
    "dia1": 100.0,
    "dia2": 200.0,
    "dia3": 0.0,
    "dia4": 300.0,
    "dia5": 0.0,
    "dia6": 150.0
};

function analisarFaturamento(faturamento) {
    const valores = Object.values(faturamento).filter(v => v > 0);
    const menor = Math.min(...valores);
    const maior = Math.max(...valores);
    const media = valores.reduce((acc, val) => acc + val, 0) / valores.length;
    const diasAcimaMedia = valores.filter(v => v > media).length;

    return { menor, maior, diasAcimaMedia };
}

const { menor, maior, diasAcimaMedia } = analisarFaturamento(faturamentoDiario);

console.log(`Menor faturamento: ${menor}`);
console.log(`Maior faturamento: ${maior}`);
console.log(`Dias acima da média: ${diasAcimaMedia}`);


