/**
 *   # Sempre que for necessário transformar um array em outro, use o método 'map'.
 *   # Sempre que for necessário filtrar um array, use o método 'filter'
 */

const produtos = [
    {
        nome: 'Notebook',
        preco: 2499,
        fragil: true
    },
    {
        nome: 'iPad Pro',
        preco: 4199,
        fragil: true
    },
    {
        nome: 'Copo de Vidro',
        preco: 12.49,
        fragil: true
    },
    {
        nome: 'Copo de Plástico',
        preco: 18.99,
        fragil: false
    }
]

const ehFragil = produtos.filter(produto => produto.fragil === true) /**
                                                                      * O método 'filter', filtra e 
                                                                      * retorna um novo array seguindo a
                                                                      * métrica que foi passada, nesse
                                                                      * caso os 'objetos' que possuem
                                                                      * atributo 'fragil' setado para
                                                                      * 'true'
                                                                      */

console.log(ehFragil)

const nFragil = function (produto){
    return produto.fragil // Não é preciso usar a igualdade boolean ('produto.fragil === true')
}

const preco15 = produto => produto.preco >= 15

console.log(produtos.filter(nFragil).filter(preco15))
console.log(produtos);