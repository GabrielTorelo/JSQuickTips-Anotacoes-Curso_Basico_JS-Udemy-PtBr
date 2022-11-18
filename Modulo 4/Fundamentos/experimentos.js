// ENTENDA O RUNTIME QUE VOCÊ ESTÁ TRABALHANDO, SEMPRE!!! \\

let a = 3 // Criando uma variável local
console.log(a)

global.b = 123
console.log(global.b)

// Criando variáveis no contexto global do node \\
this.c = 456
this.d = false
this.e = 'teste'

console.log(this.c) // Retornando o valor da variável 'c' que está dentro do contexto global do node
console.log(module.exports.c) // Retorna exatamente o mesmo resultado que utilizando 'this.var'
console.log(module.exports == this); // Retorna verdadeiro (true), pois, 'this' é exatamento o 'module.exports'
console.log(module.exports);

// Criando uma variável louca (sem var e let!)
abc = 3 // NÃO FAZER ISSO, pois, você está criando uma variável no escopo global do node
console.log(global.abc)

// module.exports = {e: 456, f: false, g: 'Teste'}