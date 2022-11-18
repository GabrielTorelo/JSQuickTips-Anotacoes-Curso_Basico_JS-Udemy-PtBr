const peso1 = 1.0
const peso2 = Number("2.0")

console.log('Peso1: '+peso1, '\nPeso2: '+peso2)
console.log('\nPeso1 é Inteiro: '+Number.isInteger(peso1))
console.log('Peso2 é Inteiro: '+Number.isInteger(peso2))

const avaliacao1 = 9.585
const avaliacao2 = 6.852

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log('\nMedia do Aluno: '+media.toFixed(2))
console.log('Media convertida em String: '+media.toString())
console.log('Media convertida em String Binária: '+media.toString(2)) // Converter para Binário
console.log('Tipo da var. Media: '+typeof media)