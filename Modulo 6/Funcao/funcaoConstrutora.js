function Carro(velocidadeMaxima = 200, delta = 5){/**
                                                   * Caso não seja passado nenhum parâmetro para as 
                                                   * variáveis 'velocidadeMaxima' e 'delta' elas são
                                                   * setadas pera '200' e '5', respectivamente
                                                   */
    // Atributo privado
    let velocidadeAtual = 0

    // Método público
    this.acelerar = () => { // A palavra-chave 'this', denomina um método com público
        if(velocidadeAtual + delta <= velocidadeMaxima)
            velocidadeAtual += delta
        else
            velocidadeAtual = velocidadeMaxima
    }

    // Método público
    this.getVelocidadeAtual = () => velocidadeAtual /**
                                                     * Método de mostrar a variável 'velocidadeAtual',
                                                     * sem acessa-lá diretamente (atributo privado)
                                                     */
}

const uno = new Carro // Instânciando a função construtora 'Carro' em uno
uno.acelerar() // Chama o método pública 'acelerar()'
// uno.velocidadeAtual = 50 // Não consigo acessar/mudar o valor de um atributo privado
console.log(uno.getVelocidadeAtual()) // Chama o método pública 'getVelocidadeAtual()'

const ferrari = new Carro(350, 20)
setInterval(() => { // Repeti o código presente dentro de seu bloco a cada 1s
    ferrari.acelerar()
    console.log(ferrari.getVelocidadeAtual())
}, 1000);

console.log(typeof Carro)
console.log(typeof ferrari)