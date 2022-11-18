// Par Chave/Valor
const saudacao = 'Olá!' // Contexto léxico 1 // Chave = saudacao; Valor = 'Olá!' // Local onde a variável foi definida fisicamente no código
console.log(saudacao)

function exec(){
    const saudacao = 'Oii' // Contexto léxico 2 // Chave = saudacao; Valor = 'Oii'
    return saudacao
}
console.log(exec())

console.log('') // Quebra de linha

// Objetos são grupos aninhados de pares Chave/Valor
const cliente = {
    nome: 'Gabriel', // Chave = nome; Valor = 'Gabriel'
    idade: 21, // Chave = idade; Valor = 21
    peso: 65, // Chave = peso; Valor = 65
    endereco: {
        logradouro: 'Rua XV de Fevereiro', // Chave = logradouro; Valor = 'Rua XV de Fevereiro'
        numero: 777, // Chave = numero; Valor = 777
        bairro: 'Centro' // Chave = bairro; Valor = 'Centro'
    }
}
console.log(cliente)