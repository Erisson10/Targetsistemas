//4. Percentual de faturamento mensal por estado.
const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

const total = Object.values(faturamento).reduce((acc, val) => acc + val, 0);
const percentuais = Object.fromEntries(
    Object.entries(faturamento).map(([estado, valor]) => [estado, (valor / total) * 100])
);

console.log("Percentual de representação por estado:");
Object.entries(percentuais).forEach(([estado, percentual]) => {
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
});
