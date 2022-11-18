function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco()) /**
                         * Retorna não número ('NaN'), pois, no contexto global as
                         * variáveis 'preco' e 'desc' não estão definidos
                         * 
                         * Podemos seta-las desta forma, porem, não recomendado:
                         *      global.preco = 20
                         *      global.desc = 0.1
                         * 
                         * Podemos também acessar a função 'getPreco()' passando
                         * o objeto ('object') 'produto':
                         *      console.log(produto.getPreco())
                         */

const carro = {
    preco: 49990,
    desc: 0.20
}

console.log(getPreco.call(carro)) // O método 'call(contexto)' chama uma função
console.log(getPreco.apply(carro)) /**
                                    * O método 'apply(contexto)' faz a mesma coisa que
                                    * o método 'call(contexto)'
                                    */

// A grande diferença entre os métodos 'call(var)' e 'apply(var)', é o modo de passagem dos parâmetros
console.log(getPreco.call(carro, 0.15, '€')); /**
                                               * Passagem de parâmetro com o método 'call'
                                               * funcão.call(contexto, param1, param2, param2)
                                               */

console.log(getPreco.apply(carro, [0.13, '$'])); /**
                                               * No método 'apply(contexto)' é necessario 
                                               * passar os parâmetros em um array
                                               * 
                                               * funcão.apply(contexto, [param1, param2, param2])
                                               */ 