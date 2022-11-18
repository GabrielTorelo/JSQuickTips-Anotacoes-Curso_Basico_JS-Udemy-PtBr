const prod1 = {} // Objeto no JS é uma combinação de Chave e Valor (ou seja, você tem um nome/identificador e passa um valor pra ele)
prod1.nome = 'Celular Ultra Mega' // Como o objeto foi definido com vazio, vamos atribuir valores a ele, nessa caso o 'nome' é o identificador e o 'Celular Ultra Mega' é o valor atribuido ao nome
prod1.preco = 4998.90
prod1['Desconto camarada'] = 0.40 // Evitar atributos com espaço!

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 130.00,
    obj: {// É possivel ter vários objetos dentro de um mesmo!
        pix: true,
        obj: {
            confirmado: true
        }
    }
}
prod2['Desconto camarada'] = 0.40 // Evitar atributos com espaço!

console.log(prod2)