function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até breve', 456)
console.log(aula1, aula2)

// simulando o new \\
function novo(f, ...params) { /**
                               * O operador '...' indica que serão recebidos vários
                               * parametros, os contatenando em um array
                               */
    const obj = {}
    obj.__proto__ = f.prototype /**
                                 * Associando o protótipo do objeto 'obj' ao
                                 * 'prototype' da função passada por parâmetro
                                 * 
                                 *   # O mesmo ocorre quando usamos a palavra-chave
                                 *   'new' de uma função construtora
                                 */
    f.apply(obj, params) /**
                          * Executa a função 'f', passando por parâmetro o objeto 'obj'
                          * que acabou de ser criado e os parametros que foram recebidos
                          * pela função 'novo'
                          */

    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)
console.log(aula3, aula4)