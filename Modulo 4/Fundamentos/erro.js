function tratarErroELancar(erro){
    /**
     *          // Como throw você pode emitir qualquer mensagem no console \\
     * 
     * throw new Error('Ocorreu um erro...') // Emite no console 'Ocorreu um erro...'
     * throw 10
     * throw true
     * throw 'mensagem'
     */

    throw{
        id: erro.id,
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado (obj){
    try { // Captura de erro! // A partir do momento em que um erro for gerado a execução cai no catch, ou seja, o erro é capturado 
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // Ao encontrar um erro o 'catch' é chamado
        tratarErroELancar(e)
    } finally{ // Independentemente de encontrar um erro o 'finally' será chamado ao final do 'try'
        console.log('\nOcorreu um erro durante a execução.\nO erro foi reportado a equipe de programação!')
    }
}

const obj = {nome: 'Gabriel'}
imprimirNomeGritado(obj) /**
                          * Gera um erro de indefinido (undefined), pois, na função (function)
                          * foi passado 'obj.name', o correto seria 'obj.nome'
                          */