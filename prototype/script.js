// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`;
}

const joao = new Pessoa('João', 'Xavier', 23);

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
const lista = document.querySelectorAll('li');
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;             //HTMLLIElement
li.click;       //function
li.innerText;   //String
li.value;       //Number  
li.hidden;      //Boolen
li.offsetLeft;  //Number
li.click();     //li.click() é undefined, caso passar constructor.name, gera erro

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String -> retorna "Boolean" -> "Boolean" é String