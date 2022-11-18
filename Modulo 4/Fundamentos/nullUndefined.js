const a = {name: 'Teste'}
console.log(a)

const b = a // Atibuição por referência, vocês está passando o endereço de memória de 'a' para 'b'
console.log(b)

b.name = 'Oi'  // Tanto 'a' quanto 'b' irão receber a atibuição 'Oi' em name, pois, como 'b' "aponta" para o endereço de 'a', o endereço de b passa a ser o endereço de 'a'
console.log(a, b)

let c = 3
let d = c // Nesse caso, por não se tratar de um objeto e sim de um valor primitivo, 'd' = 'c' copia o valor de c para d, diferente do exemplo acima que um "aponta" para o endereço do outro

d++

console.log(c, d)

console.log('') // Quebra de linha

// vvv Aula vvv
let valor // variavel não inicializada
console.log(valor) // Gera um indefinido (undefined)
//console.log(valor1) // Gera um não definido (not defined)

valor = null // null indica que essa variavel não tem nenhum valor e não está apontando para nenhum endereço de memória
console.log(valor) // Quando quiser "zerar" uma variavel é mais adequado usar null e não undefined
// console.log(valor.toString()) // Da erro, pois, não é possivel acessar e converter para string valores nulos

console.log('') // Quebra de linha

const produto = {} // Objeto vazio
console.log(produto)
console.log(produto.preco) // Gera um undefined, pois, preco não foi definido em produto

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // Deletar um atributo de um objeto
console.log(produto)

console.log('') // Quebra de linha

produto.preco = null // Fazendo uma analogia a um produto sem preço
console.log(!!produto.preco)
console.log(produto)