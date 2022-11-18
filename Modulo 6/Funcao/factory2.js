function criarProduto(nome, preco){
    return {
        nome, // Posso também colocar 'nome: nome', porém é irrelevante, pois, já subentende que nome recebe 'nome: nome'
        preco, // A mesma coisa com o preco, podemos usar 'preco: preco'
        desconto: 0.40
    }
}
console.log(criarProduto('TV-32', 1500))
console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))