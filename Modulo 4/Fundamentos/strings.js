const escola = "Cod3r"

console.log(escola.charAt(4)) // Apresenta o caractere da posição 4
console.log(escola.charAt(5)) // Não gera erro, porem, apresenta ""vazio"" na tela
console.log(escola.charCodeAt(3)) // Apresenta o caractere na tabela unicode
console.log(escola.indexOf('3')) // Apresenta em qual índice (posição) está o caractere 3
console.log(escola.indexOf('a')) // Quando não encontra o caractere retorna -1

console.log(escola.substring(3)) // Apresenta a string, a partir da posição informada
console.log(escola.substring(0, 3)) // Mostra a string presente entre as posições 0 e 2 (Não inclui a posição 3, pois, ela é a definição de parada). É o mesmo que dizer: Comece no índice 0 e me retorne 3 caracteres

console.log('Escola '.concat(escola).concat('!')) // Concatena Strings
console.log('Escola ' + escola + '!') // Concatena da mesma forma
console.log(escola.replace(3, 'e')) // Substitui o caractere passado (nesse caso o 3), pelo caractere informado (nesse caso o e)
console.log(escola.replace(/\d/, 'e')) // Substitui todos os digitos da String pela letra e (/\d/ => Regex)
console.log(escola.replace(/\w/g, 'e')) // Substitui todas as letras e digitos da String pela letra e (/\w/ => Regex para todas as letras e digitos, o g significa global)

console.log('Anna, Maria, Pedro'.split(',')) // split transforma a String em um Array, para isso vc tem que definir um separador (nesse caso a ',')
console.log('Anna, Maria, Pedro'.split(/,/)) // split usando Regex