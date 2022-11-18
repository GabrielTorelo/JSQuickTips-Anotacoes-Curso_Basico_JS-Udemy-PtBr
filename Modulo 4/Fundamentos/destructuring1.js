// Recurso novo do ES2015

const pessoa = {
    nome: 'Gabriel',
    idade: 21,
    endereco: {
        logradouro: 'Rua XV de Fevereiro',
        numero: 777,
        bairro: 'Centro'
    }
}

const {nome, idade} = pessoa // Tirando do objeto 'pessoa' os atributos 'nome' e 'idade'
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // Tirando do objeto 'pessoa' os atributos 'nome' e 'idade', mudando o nome das variáveis para 'n' e 'i'
console.log(n, i)

const {sobrenome, bomHumor} = pessoa // Tirando do objeto 'pessoa' atributos que não existem, gerando assim indefinido (undefined)
console.log(sobrenome, bomHumor)

const {sobrenome2 = "Sem sobrenome |", bomHumor2 = "Sim"} = pessoa // Tirando do objeto 'pessoa' atributos que não existem, porém, realizando um tratamento caso ele não exista
console.log(sobrenome2, bomHumor2)

const {endereco: {logradouro, numero, bairro}} = pessoa // Tirando do objeto 'endereco', que está dentro do objeto 'pessoa', os atributos 'logradouro', 'numero' e 'bairro'
console.log(`${logradouro}, ${numero} - ${bairro}`)

/** Situação que irá gerar um erro!
 * 
 *      const {conta: {num, agencia}} = pessoa
 *      console.log(num, agencia)
 * 
 *  O erro ocorre, pois, o objeto 'conta' não existe dentro do objeto 'pessoa',
 *  da mesma forma que os atributos 'num' e 'agencia' não existem
 */