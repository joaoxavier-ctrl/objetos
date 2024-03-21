function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
  }
  
  Pessoa.prototype.andar = function(){
    return this.nome + ' pessoa andou';
  }
  
  Pessoa.prototype.nadar = function(){
    return this.nome + ' pessoa nadou';
  }
  
  const joao = new Pessoa('João', 23);
  
  //console.log(Pessoa.prototype);
  //console.log(joao.prototype);
  
  const pais = 'Brasil';
  const cidade = new String('São Paulo');
  
  const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];
  
  const lista = document.querySelectorAll('li');
  
  const listaArray1 = Array.prototype.slice.call(lista);
  const listaArray2 = Array.from(lista);
  
  const carro = {
    marca: 'Ford',
    preco: 2000,
    andar(){
      return true;
    }
  }
  