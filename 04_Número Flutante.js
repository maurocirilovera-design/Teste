let numero = 3.14659;
// EXIBIR TODAS AS CASAS DECIMAIS
console.log(`Exibir todas as casas decimais: ${numero}`);
// EXIBIR SOMENTE DUAS CASAS DECIMAIS (equivalente ao :.2f)
console.log(`Exibir duas casas decimais: ${numero.toFixed(2)}`);
// EXIBIR DE OUTRA FORMA DUAS CASAS DECIMAIS (Arredondamento manual)
let numero_arredondado = Math.round(numero * 100) / 100;
console.log(`Exibir duas casas decimais: ${numero_arredondado}`);
// EXIBIR DUAS CASAS DECIMAIS SEM ARREDONDAMENTO (Truncar)
console.log(`Exibir duas casas decimais sem arredondamento: ${Math.floor(numero * 100) / 100}`);