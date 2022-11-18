/**
 * Sem o uso de uma função factory:
 * 
 * const prod1 = {
 *  nome: '...',
 *  preco: 45
 * }
 * 
 * const prod2 = {
 *  nome: '...',
 *  preco: 1234
 * }
 * 
 * Repare que ao criar vários objetos parecidos, acaba-se tendo uma repetição de codigo.
 * Afim de se resolver isso, podemos criar uma função factory 
 */

// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa()) // Criando um novo objeto

// Factory passando parâmetros
function criarPessoa2(nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}
console.log(criarPessoa2('Gabriel', 'Torelo'))