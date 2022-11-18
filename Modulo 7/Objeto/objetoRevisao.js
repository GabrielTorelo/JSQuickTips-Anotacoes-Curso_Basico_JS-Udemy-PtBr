// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Celular'
produto['marca do produto'] = 'Generica'
produto.preco = 220
console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Gabriel',
        idade: 21,
        endereco: {
            logradouro: 'Rua Xv de Fevereiro',
            numero: 775,
            bairro: 'Bairro do Forum'
        }
    },
    condutores: [{ // Array de Objeto
        nome: 'Raul',
        idade: 56
    },{
        nome: 'Anna',
        idade: 22    
    }],
    calcularValorSeguro: function() {
        // ...
    }
}
console.log(carro);

carro.proprietario.endereco.numero = 777
carro['proprietario']['endereco']['bairro'] = 'Centro'
console.log('\n', carro);

delete carro.proprietario
delete carro.condutores
console.log('\n', carro);

console.log(carro.condutores); /*
                                * Retorna undefined, pois, o atributo 'condutores' foi excluido 
                                * na linha 43. Ao acessar um atributo que não está definido o 
                                * seu retorno é undefined
                                */
console.log(carro.condutores.length); /* A tentar acessar uma propriedade de um atributo que 
                                       * não existe, retornará um erro
                                       */