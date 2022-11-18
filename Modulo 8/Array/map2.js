const carrinho1 = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// DESAFIO: Retornar um array apenas com os preços \\
const carrinho2 = carrinho1.map(a =>{
    return JSON.parse(a)
}).map(a =>{
    return a.preco
})

console.log(carrinho2)