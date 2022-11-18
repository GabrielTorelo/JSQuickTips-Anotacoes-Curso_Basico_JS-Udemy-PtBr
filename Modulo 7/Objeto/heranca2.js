// Cadeia de protótipos (prototype chain)
const avo = {
    attr1: 'A'
}

const pai = {
    __proto__: avo,
    attr2: 'B'
}

const filho = {
    __proto__: pai,
    attr3: 'C'
}

console.log(filho.attr1) /**
                          * Como não existe o atributo 'attr1' no objeto 'filho',
                          * o JS procura o atributo em seu objeto pai, como no
                          * objeto 'pai' também não foi encontrado o atributo
                          * 'attr1', o JS procura o atributo no objeto pai do objeto
                          * 'pai' (nesse caso o objeto 'avo'), como foi encontrado o
                          * atributo 'attr1' no objeto 'avo', é retornado o seu valor
                          * ('A')
                          */

Object.prototype.attr0 = 'X' // NÃO É RECOMENDADO FAZER ISSO!!!
console.log(filho.attr0) /**
                          * Como não foi encontrado em toda herança estabelecida, foi procurado
                          * o valor do atributo 'attr0' na propriedade 'Object.prototype', local
                          * final na qual todos os objetos apontam
                          */

pai.attr3 = 'D'
console.log(pai)
console.log(filho.attr3) /**
                          * Retorna o valor 'C', pois, como a atributo 'attr3' existe
                          * dentro do objeto 'filho', a busca pelo atributo em seu
                          * objeto pai não foi necessária
                          */

console.log('') // Quebra de linha

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax)
            this.velAtual += delta
        else
            this.velAtual = this.velMax
    },
    status() {
        return `Está a ${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing (sombreamento)
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` /**
                                                    * A palavra-chave super é usada para acessar um
                                                    * atributo/função/... do objeto pai do objeto 
                                                    * atual
                                                    */
    }
}

Object.setPrototypeOf(volvo, carro) // Estabelece a relação de herença (protótipo)
Object.setPrototypeOf(ferrari, carro) //                ||

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())