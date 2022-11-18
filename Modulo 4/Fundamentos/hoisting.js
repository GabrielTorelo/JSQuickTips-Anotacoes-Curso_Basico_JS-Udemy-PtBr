console.log(`a = ${a}`);
var a = 'Estou aqui em baixo'
console.log(`a = ${a}`); /**
                          * A variável por estar declarada com 'var', sofre um içamento 
                          * de sua declaração, não apresentando erro assim
                          * 
                          * Na pratica ocorre assim:
                          * 
                          *     var a
                          *     console.log(`a = ${a}`);
                          *     a = 'Estou aqui em baixo'
                          *     console.log(`a = ${a}`);
                          * 
                          */

function teste(){ // Também funciona dentro de uma função (function)
    console.log(`a = ${a}`);
    var a = 'Estou dentro da fuction'
    console.log(`a = ${a}`);
}

console.log('') // Quebra de linha

teste();

/** Com 'let' o içamento já não ocorre, gerando assim um erro
 * 
 *      console.log(`a = ${a}`);
 *      let a = 'Estou aqui em baixo'
 *      console.log(`a = ${a}`);
 * 
 */