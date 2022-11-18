const imprimirResultado = nota => {
    if (nota >= 7) {
        console.log('Aprovado!')
    }
    else{
        console.log('Reprovado!')
    }

    /**
     *     // POSSO FAZER ASSIM TAMBÉM: \\
     * 
     *     if (nota >= 7)
     *          console.log('Aprovado!')
     *     else
     *          console.log('Reprovado!')
     * 
     * Pode ser feito sem as chaves '{}', pois, temos apenas 1 linha de código para cada condicional
     */
}

imprimirResultado(5) // Falso
imprimirResultado(7) // Verdadeiro

imprimirResultado('Oi!') // cuidado!!! // Como 'Oi!' é diferente '!=' de '7', retorna falso
/**
 * Para resolvermos o problema, podemos usar um condicional 
 * para analisar se a nota passada é um número ou não. Para
 * isso, vamos utilizar uma função do JS 'isNaN(var)' negada
 * 
 *      if(!isNaN(nota)){
 *          if (nota >= 7) {
 *              console.log('Aprovado!')
 *          }
 *          else{
 *              console.log('Reprovado!')
 *          }
 *      }
 *      else{
 *          console.log(`Não é um número! Na verdade é ${typeof nota}`);
 *      }
 */