const sequencia = {
    _valor: 1, /**
                * o '_' antes do nome do atributo, é uma convenção para
                * mostrar que o atributo é privado!
                */
    get valor() {return this._valor++}, // Retorna o valor do atributo '_valor'
    set valor(valor){this._valor = valor} /**
                                           * Atribui o valor da variável 'valor' que foi
                                           * passada por parâmetro ao atributo '_valor'
                                           */
}
console.log(sequencia.valor, sequencia.valor) /**
                                               * Sempre que for chamado o JS automaticamente
                                               * interpreta que o método 'get' está sendo chamado
                                               */
sequencia.valor = 1000 // Chamando o método 'set' e atribuindo o valor '1000' ao atributo '_valor'
console.log(sequencia.valor)