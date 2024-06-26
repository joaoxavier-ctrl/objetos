// Crie uma função que verifique
// corretamente o tipo de dado
const frutas = ['Banana', 'Uva'];

function tipoDado(dado){ 
    return Object.prototype.toString.call(dado);
}

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {
    lados: 4,
}

Object.freeze(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
  }

  Object.seal(configuracao);
  
  // Liste o nome de todas
  // as propriedades do
  // protótipo de String e Array

  console.log(Object.getOwnPropertyNames(String.prototype));
  console.log(Object.getOwnPropertyNames(Array.prototype));
  