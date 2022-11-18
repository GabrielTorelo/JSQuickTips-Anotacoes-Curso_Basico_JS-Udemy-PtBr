var numero = 1
{
    var numero = 2 // Como estamos trabalhando com 'var', podemos declarar novamente a variável 'numero' sem problema
    console.log(`Dentro = ${numero}`)
}
console.log(`Fora = ${numero}`) // Gera o mesmo valor que o anterior devido a declaração da variável ter sido com o 'var'