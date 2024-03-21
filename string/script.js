// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes.forEach((element) => {
  const numeroLimpo = +element.valor.replace('R$ ', '');
  if(element.descricao.slice(0,4) === 'Taxa'){
    taxaTotal += numeroLimpo;
    }else {
      recebimentoTotal += numeroLimpo;
    }
});

console.log(taxaTotal);
console.log(recebimentoTotal);



//console.log(transacoes[3])

// Retorne uma array com a lista abaixo

const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';');


// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;


const span = 'span';

novoHtml = html.replace(/span+/g, 'a');

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

UltChar = frase.charAt(frase.length - 1);

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];


let i = 0
transacoes2.forEach((element) => {
  element = element.toLowerCase();
  element = element.trim();
  element = element.slice(0,4);
  if(element === 'taxa'){
    i++;
  }
});

console.log(`Total de taxas = ${i}`);


