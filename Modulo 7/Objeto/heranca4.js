function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__) /**
                                                      * Quando cria-se um objeto a partir de uma 
                                                      * função construtora, usando o 'new', o protótipo
                                                      * (herença) do objeto automáticamente se torna o
                                                      * prototype da função
                                                      */

MeuObjeto.prototype.nome = 'Anônimo' /**
                                      * Criando a propriedade (atributo) 'nome' no 'prototype' da
                                      * função construtora, ou seja, todos os objetos criados a
                                      * partir da função construtora terão acesso ao atributo 'nome'
                                      * com seu valor 'Anônimo', podendo sobrescrever esse valor
                                      * dentro do próprio objeto criado
                                      */
MeuObjeto.prototype.falar = function() {
    console.log(`Boa noite! Meu nome é ${this.nome}!`)
}

obj1.falar() /**
              * Como não existe o atributo 'nome' dentro do objeto 'obj1', é
              * procurado se existe esse atributo na função construtora pai,
              * nesse caso existe e o seu valor é 'Anônimo'
              */

obj2.nome = 'Gabriel' // Criando o atributo 'nome' dentro do objeto 'obj2'
obj2.falar() /**
              * Nesse caso, como foi criado o atributo 'nome' dentro
              * do objeto 'obj2', o valor do atributo que anteriormente
              * era 'Anônimo' é sobrescrito para 'Gabriel'
              */

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // Outra forma de alterar o protótipo (herença) do objeto
obj3.nome = 'obj3'
obj3.falar()

// Resumindo TUDO
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) // Object.prototype.__proto__ !== undefined