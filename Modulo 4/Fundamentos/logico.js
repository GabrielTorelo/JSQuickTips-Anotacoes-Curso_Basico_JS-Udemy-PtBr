function compras(trab1, trab2){
    const comprarSorvete = trab1 || trab2 // '||' operador lógico ou 'or'
    const comprarTv50 = trab1 && trab2 // '&&' operador lógico e 'and'
    //const comprarTv32 = !!(trab1 ^ trab2) // '^' operador lógico ou exclusivo 'xor'
    const comprarTv32 = trab1 != trab2 // Como no ou exclusivo 'xor', ambos devem ser diferentes para ser verdadeiro, é possível fazer desta forma
    const manterSaudevel = !comprarSorvete // Operador unário de negação

    return { // Retornando um objeto (object) com as 4 variáveis
        comprarSorvete, 
        comprarTv50, 
        comprarTv32, 
        manterSaudevel
    }
}

console.log('\nVerdadeiro e Verdadeiro')
console.log(compras(true, true))
console.log('') // Quebra de linha

console.log('Verdadeiro e Falso')
console.log(compras(true, false))
console.log('') // Quebra de linha

console.log('Falso e Verdadeiro')
console.log(compras(false, true))
console.log('') // Quebra de linha

console.log('Falso e Falso')
console.log(compras(false, false))
console.log('') // Quebra de linha