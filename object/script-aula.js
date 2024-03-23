const pessoa = new Object({
    nome: 'João'
})

console.log(pessoa);

const carro = {
    rodas: 4,
    init(valor){
        this.marca = valor;
        return this;
    },
    acelerar(){
        return this.marca + ' acelerou';
    },
    buzinar(){
        return this.marca + ' buzinou';
    }
}

const honda = Object.create(carro).init('honda');

console.log(honda.acelerar());

const ferrari = Object.create(carro).init('Ferrari');

console.log(ferrari.buzinar());

const funcaoAutomovel = {
    acelerar(){
        return 'acelerou';
    },
    buzinar(){
        return 'buzinou';
    },
}

const moto = {
    capacete: true,
}

console.log(moto);

//Object.assign(moto, funcaoAutomovel);

//console.log(moto);

Object.defineProperties(moto, {
    rodas: {
        value: 2,
        configurable: false,
    }
})

console.log(moto);

moto.rodas = 5;
delete moto.rodas;
delete moto.capacete;
console.log(moto);