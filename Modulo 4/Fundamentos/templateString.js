const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const templateString = `
    Olá
    ${nome}!
    ` // Interpolação da variável nome na Template String (feita pelo ${var})
console.log(concatenacao)
console.log(templateString)

// expressões
console.log(`1 + 1 = ${1 + 1}`) // É possivel fazer operaçãoes dentro de uma interpolação

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`);