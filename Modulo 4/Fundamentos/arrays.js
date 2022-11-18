const valores = [7.7, 8.5, 9.4, 10]
console.log(valores[0], valores[3], valores[1])
console.log(valores[4]) // Retorna indefinido, pois, não foi definido nenhum dado na posição 5

valores[4] = 20
console.log(valores[4])

valores.push({id: 3}, 5, "oi", 10, true) // É possivel criar Arrays com caracteres do tipo String, Number, Boolean, ao mesmo tempo sem problemas (Array no JS é heterogêneo)
console.log(`O Array tem tamanho: ${valores.length}`) // Tamanho do Array

console.log('') // Quebra de linha

console.log(valores)

console.log('') // Quebra de linha

// Percorrer um Array
for (let index = 0; index < valores.length; index++) {
    const element = valores[index];
    console.log(element)
}

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)