function Pessoa(){
    this.idade1 = 0
    this.idade2 = 0

    // Temos 2 possibilidades de "amarrar" o contexto do this \\
    // A 1ª é utilizando o método 'bind()' ao final da função (function)
    setInterval(function(){
        this.idade1++
        console.log(`Idade1: ${this.idade1}`);
    }.bind(this), 1000)

    /* A 2ª é utilizarmos de um artifício tecnológico,
    * criando uma constante 'self' que recebe a palavra-chave
    * 'this' da função ('function') 'Pessoa' e utilizarmos desta
    * constante dentro da função ('function') anônima
    */
    const self = this
    
    setInterval(function(){
        self.idade2++
        console.log(`Idade2: ${self.idade2}`);
    }, 1000)

}

new Pessoa // Instanciando 'Pessoa'