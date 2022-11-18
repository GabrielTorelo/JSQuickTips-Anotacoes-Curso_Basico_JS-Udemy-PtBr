// Função criada com o método normal \\
let dobro = function(a){
    return 2 * a
}

// Função criada com o método arrow \\
dobro = a => { /**
                * 'a' é o parâmetro na qual a função espera receber
                * '=>' é o símbolo da arrow function
                */
    return 2 * a // Retorno da função
}

dobro = a => 2 * a  /**
                     * Reduzindo ainda mais a arrow function
                     * 
                     *  # 'dobro' é o nome da variável na qual está sendo armazenada
                     *    a função ('function')
                     *  # 'a' é o parâmetro na qual a função espera receber
                     *  # '=>' é o símbolo da arrow function
                     *  # '2 * a' é o retorno da função
                     * 
                     */

console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá' // Função sem parâmetro
ola = _ => 'Olá' // Também podemos escrever uma função (function) sem parâmetro desta forma
console.log(ola())