const pessoa = {
    saudacao: 'Bom dia!',
    falar() { // É possível criar funções dentro de um objeto desta forma
        console.log(this.saudacao) /**
                                    * A palavra-chave 'this' é necessaria nesse contexto, pois, 
                                    * a função 'falar' necessita acessar um atributo do objeto 
                                    * pessoa
                                    */
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: Funcional e Orientação a Objeto

const falarDePessoal = pessoa.falar.bind(pessoa) /**
                                                  * O método 'bind(object)' cria uma nova função, que
                                                  * define a sua palavra-chave 'this' para o objeto
                                                  * (object) fornecido
                                                  * 
                                                  * Podemos dizer que o método 'bind()' está amarrando
                                                  * a função ('function') 'falarDePessoal' com o objeto
                                                  * ('object') 'pessoa'
                                                  */
falarDePessoal()