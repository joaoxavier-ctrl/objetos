// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const p = document.querySelectorAll('p');
const arrayP = Array.from(p);

const caracteresTotal = arrayP.reduce((total, paragrafo) => total + paragrafo.innerText.length, 0);

console.log(caracteresTotal);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
