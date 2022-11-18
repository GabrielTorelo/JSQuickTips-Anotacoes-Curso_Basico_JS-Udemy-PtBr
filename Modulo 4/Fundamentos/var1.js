/* Exemplo do por que não é interessante usar 'var'!
 * Quando usamos 'var', FORA DE UMA FUNÇÃO (FUNCTION), a variável é visivel globalmente!
 * Podendo acarretar inúmeros problemas com isso!
 * Para o 'var' so temos 2 escopos possível, o escopo de nível global (visível na aplicação inteira) e o escopo de uma função (function)
 */

{
  {
    {
      {
        var sera = "Será???"
        console.log(sera)
      }
    }
  }
}

console.log(sera) // Mesmo estando fora do bloco, a variável 'sera' é visível.

function teste(){
    var local = 123
}

teste()
// console.log(local) // Uma variável que está dentro de uma função não é visível fora dela.
