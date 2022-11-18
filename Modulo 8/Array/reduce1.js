/**
 * O método 'reduce' executa uma função expecifica para cada elemento
 * presente no array, resultando assim num único valor de retorno.
 */

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}) /**
    * Neste exemplo, o método 'reduce' realiza a soma de todos os itens do array
    * (notas dos alunos).
    * 
    *    # Como não foi passado nenhum 'valor inicial' para o método 'reduce',
    *      o mesmo foi definido para nulo.
    * 
    *    # É possível também definir um 'valor inicial' para o método 'reduce':
    *           reduce('função de callback', valorInicial)
    */

console.log(resultado)