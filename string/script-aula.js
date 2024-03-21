const comida = 'Pizza';
const agua = new String('Agua');

console.log(agua.length);

const frase = 'O rato roeu a roupa do rei de roma';

console.log(frase[frase.length - 1]);
console.log(frase.charAt(2));

const linguagem = 'Javascript';

const fraseFinal = frase + linguagem;
const fraseFinal2 = frase.concat(' ',linguagem, '!!');

console.log(fraseFinal);
console.log(fraseFinal2);

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta, 4));
console.log(fruta.startsWith('Ba'));
console.log(fruta.endsWith('nas'));


const transacao1 = 'Deposito do cliente';
const transacao2 = 'Deposito do fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0,8));

console.log(fruta.indexOf('n'));

console.log(fruta.padStart(fruta.length + 3,'.'));

const preco = 'R$ 99,00'
const listaPreco = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPreco.forEach((item) => {
    console.log(item.padStart(listaPreco[listaPreco.length - 1].length + 3, '-'));
})

const frase2 = 'Ta';

console.log(frase2.repeat(3));

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

console.log(listaItens);

const arrayLista = listaItens.split(', ');

console.log(arrayLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');

console.log(htmlNovo);

transacoes.forEach((element) => {
    const seraTaxa = element.descricao.substring(0,4);
    const taxa = '';
    if(seraTaxa === 'Taxa'){
      console.log(seraTaxa);
      
    }
    //console.log(seraTaxa);
  })
