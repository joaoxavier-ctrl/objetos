const perimetro = new Function('lado', 'return lado * 4');

function somar(n1, n2){
    return n1 + n2;
}

console.log(somar(3,4))

console.log(somar.name);

function darOi(nome){
    console.log('Oi para você', nome);
}

darOi.call({}, 'João');

function Dom(seletor){
    this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function(classe){
    this.element.classList.add(classe);
}

const ul = new Dom('ul');

const li = {
    element: document.querySelector('li'),
}

ul.ativo('ativo');

console.log(ul);

const frutas = ['Uva', 'Maçã', 'Banana'];

Array.prototype.mostrarThis = function(){
    console.log(this);
}