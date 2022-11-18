class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar() /**
            * Em uma classe ('class') a palavra-chave 'this' pode variar,
            * de tal forma que a variável passada por parâmetro (no nosso
            * caso a var 'nome') pode vir a receber indefinido ('undefined')
            */

const CriarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = CriarPessoa('Gabriel')
p2.falar() /**
            * Isso já não ocorre em uma função factory, pois,
            * a função factory tem ciência do contexto léxico
            * no qual foi declarada
            */