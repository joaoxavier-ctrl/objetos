function Carro(marcaAtribuida, precoAtribuido){
    this.marca = 'Marca';
    this.preco = 2000;
}

const honda = new Carro('Honda', 3000);

const fiat = new Carro('Fiat', 4000);

function Carro2(marcaAtribuida, precoInicial){
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marcaAtribuida;
    this.preco = precoFinal;
}

const mazda = new Carro2('Mazda', 5000);
