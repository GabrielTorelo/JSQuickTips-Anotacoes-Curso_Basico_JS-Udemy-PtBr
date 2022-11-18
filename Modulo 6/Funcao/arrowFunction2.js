/**
 * Em arrow function a palavra-chave 'this' não varia 
 * de acordo com quem o está chamando
 * 
 *  # Grande vantagem do uso de arrow function
 */

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa