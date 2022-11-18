
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
/**
 *                     // ARROW FUNCTION \\
 * 
 *               'nota' = nome do parametro;
 *               '=>' = arrow function;
 *               'nota >= 7' = expessão relacional;
 *               '?' = Atalho para a instrução 'if'
 *               ':' = Atalho para a instrução 'else'
 */

console.log(resultado(7.1))
console.log(resultado(6.1))