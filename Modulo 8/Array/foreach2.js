// Criando um novo método ('forEach2'), na qual fará a mesma coisa que um método 'forEach' \\
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Anna', 'Alonso', 'Pedro', 'Bruno']

aprovados.forEach2(function(nome, indice, array, undefined){
    console.log(`${indice + 1}) ${nome} => [${array}] | ${undefined}`)
})