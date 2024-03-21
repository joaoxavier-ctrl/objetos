console.log(Number.isNaN(NaN));
console.log(Number.isInteger(10.4534));

console.log(parseFloat('312532.245'));
console.log(parseFloat('123,34'));
console.log(parseFloat('100 reais'));
console.log(parseFloat('100.23 reais'));
console.log(parseInt('100.23 reais'));

const preco = 2.99;
const preco2 = 3;
console.log(preco.toFixed());
console.log(preco2.toFixed(2));

let valor = 48.49;

valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

console.log(valor);

console.log(Math.PI);