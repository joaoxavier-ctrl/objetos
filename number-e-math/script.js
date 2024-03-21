// Retorne um número aleatório
// entre 1050 e 2000

let aleatório = (Math.random() * (2000 - 1050 + 1)) + 1050;

console.log(aleatório.toFixed());

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
let somenteNumeros = numeros.split(', ').map(Number);;
console.log(somenteNumeros);

const maiorNumero = Math.max(...somenteNumeros);
console.log(maiorNumero);


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

/*listaPrecos.forEach((element) => {
  element = element.substring(3);
  element = element.replace(/[ ]+/g, '');
  element = element.replace(/[,]+/g,'.');
  element = Number(element);
  console.log(element);
});*/

function limparPreco(preco){
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;

listaPrecos.forEach((preco) => {
  soma += limparPreco(preco);
})

console.log(soma);

limparPreco(listaPrecos[1]);

console.log(listaPrecos[1]);

console.log(limparPreco(listaPrecos[1]));