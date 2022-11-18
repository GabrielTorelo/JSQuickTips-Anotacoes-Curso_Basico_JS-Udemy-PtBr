console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() { // Cria a notação de ponto 'reverse' para as strings
    return this.split('').reverse().join('')
}
console.log('Gabriel'.reverse()) /**
                                  * Chamando o método 'reverse' com a notação de ponto
                                  * que foi criada anteriormente
                                  * 
                                  * A palavra-chave 'this' no protótipo simboliza o que
                                  * está sendo passado, nesse caso a string 'Gabriel'
                                  */

Array.prototype.first = function() {
    return this[0]
}
console.log([1, 2, 3, 4, 5, 6, 7].first())
console.log(['a', 'b', 'c'].first())