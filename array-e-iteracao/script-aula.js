/*const carros = ['Ford', 'Fiat', 'Honda'];

const carros1 = carros.forEach((item, index, array) => {
    console.log(item.toUpperCase(), index, array);
});

const li = document.querySelectorAll('li');


//forEach sempre retorna undefined
li.forEach((item) => item.classList.add('ativo'));

const carros2 = ['Ford', 'Fiat', 'Honda'];

//.map retorna object
const carros22 = carros2.map((item, index, array) => {
    console.log(item.toUpperCase(), index, array);
});

console.log(typeof carros1);
console.log(typeof carros22);

const numeros = [2, 4, 5, 6, 7, 123];
const numerosX2 = numeros.map(n => n*2);

console.log(numerosX2);

const aulas = [
    {
      nome: 'HTML 1',
      min: 15
    },
    {
      nome: 'HTML 2',
      min: 10
    },
    {
      nome: 'CSS 1',
      min: 20
    },
    {
      nome: 'JS 1',
      min: 25
    },
  ]
  
  const tempoAulas = aulas.map(aula => aula.min);
  // [15, 10, 20, 25];
  
  const puxarNomes = aula => aula.nome;
  const nomesAulas = aulas.map(puxarNomes);
  // ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']
  */

const aulas = [10, 25, 30];

const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
    console.log(acumulador, item, index);
    return acumulador + item;
}, 0);

console.log(reduceAulas);



  
  

