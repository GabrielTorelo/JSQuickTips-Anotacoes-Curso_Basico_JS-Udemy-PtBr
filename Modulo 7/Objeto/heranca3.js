const pai = {
    nome: 'Pedro',
    corCabelo: 'Preto',
    idade: 46
}

const filha1 = Object.create(pai) // Cria o objeto 'filha1' como herança (protótipo) do objeto 'pai'
filha1.nome = 'Anna' // Alterando o atributo 'nome' do objeto 'filha1'
console.log(filha1)
console.log(filha1.nome, filha1.corCabelo)

const filha2 = Object.create(pai, { /**
                                     * Cria o objeto 'filha2' como herança (protótipo) do objeto
                                     * 'pai', estabelecendo novos valores e propriedades para os
                                     * atributos 'nome' e 'corCabelo'
                                     */
    nome: {value: 'Bia', writable: false, enumerable: true},
    corCabelo: {value: 'Loiro', writable: true, enumerable: true}
})
console.log(filha2)
filha2.nome = 'Joana' /**
                       * Como a descrição 'writable' está setada como falso ('false'),
                       * não se pode alterar valor do atributo 'nome' do objeto 'filha2'.
                       * Em outras palavras, o atributo 'nome' está "congelado" (freeze)
                       */
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1), Object.keys(filha2))

console.log('') // Quebra de linha

for(let element in filha2){
    
    filha2.hasOwnProperty(element) ?
        console.log(element) :
            console.log(`'${element}' foi recebido por herança!`)
            /**
             * Analisa se a propriedade (atributo) pertence ao objeto,
             * ou se a propriedade (atributo) foi herdada pelo objeto
             * pai
             * 
             *       O condicional '?' faz a função do 'if', 
             *     já o condicional ':' faz a função do 'else'
             * 
             */
}