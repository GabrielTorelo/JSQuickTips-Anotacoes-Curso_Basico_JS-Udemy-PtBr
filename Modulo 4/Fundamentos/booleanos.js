let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

console.log('') // Quebra de linha

isAtivo = 1 
console.log(isAtivo) // Como no JS as variaveis são dinamicas, não irá exibir True e sim o número 1
console.log(typeof isAtivo) // Tipo number

console.log('') // Quebra de linha

isAtivo = Boolean(1) // Desta forma, especificamos para o JS que queremos uma variavel do tipo boolean, passando o valor 1 (true)
console.log(isAtivo)
console.log(typeof isAtivo) // Tipo boolean

console.log('') // Quebra de linha

isAtivo = 1
console.log(!isAtivo) // Negando o isAtivo (gerando Falso)
console.log(!!isAtivo) // Negando e negação do isAtivo (gerando Verdadeiro), muito usado para saber se algo é verdadeiro

console.log('') // Quebra de linha

console.log('São Verdadeiros os Seguintes:')
console.log(`!!3: ${!!3}`)
console.log(`!!-3: ${!!3}`)
console.log(`!!' ': ${!!' '}`)
console.log(`!!'texto': ${!!'texto'}`)
console.log(`!![]: ${!![]}`)
console.log(`!!Infinity: ${!!Infinity}`)
console.log(`!!(isAtivo = true): ${!!(isAtivo = true)}`)
console.log(`!!('' || null || 0 || ' ' || false): ${!!('' || null || 0 || ' ' || false)}`)

console.log('') // Quebra de linha

console.log('São Falsos os Seguintes:')
console.log(`!!0: ${!!0}`)
console.log(`!!'': ${!!''}`)
console.log(`!!null: ${!!null}`)
console.log(`!!NaN: ${!!NaN}`)
console.log(`!!undefined: ${!!undefined}`)
console.log(`!!(isAtivo = true): ${!!(isAtivo = false)}`)

console.log('') // Quebra de linha

let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Gabriel'
console.log(nome || 'Desconhecido')