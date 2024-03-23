// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const p = document.querySelectorAll('p');
const arrayP = Array.from(p);

const caracteresTotal = arrayP.reduce((total, paragrafo) => total + paragrafo.innerText.length, 0);

console.log(caracteresTotal);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function novoElementos(tag, classe, conteudo){
  const elemento = document.createElement(tag);
  elemento.classList.add(classe);
  elemento.innerHTML = conteudo;
  return elemento;
}

console.log(novoElementos('ul', 'ativo', 'ablablublé'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

function elementoEspecifico(conteudo){
  const elementoEspecifico = document.createElement('h1');
  elementoEspecifico.classList.add('titulo');
  elementoEspecifico.innerHTML = conteudo;
  return elementoEspecifico;
}

console.log(elementoEspecifico('ehuasnda'));