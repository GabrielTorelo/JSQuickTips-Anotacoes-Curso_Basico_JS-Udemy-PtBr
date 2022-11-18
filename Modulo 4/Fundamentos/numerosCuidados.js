console.log(7 / 0) // Gera um valor infinito, JS tem suporte a infinito! (Infinity)
console.log('10' / 2) // JS possibilita fazer essa operação, pois, identifica que o 10(String) é um número
console.log('3' + 2) // Não somou e sim concatenou, pois, String tem prioridade (o sinal de '+' é o sinal de união)
console.log('Show!' * 2) // Não é possivel repetir a String "Show" desta forma, pois, Show não é um número
console.log(0.1 + 0.7) // Essa operação gera uma imprecisão, devido o JS seguir as especificações do IEEE, para fins de otimização
// console.log(10.toString()) // Não é possivel transformar número literal em String
const a = (10.345).toFixed(2) // Assim é possivel transformar um número em String
console.log(typeof a) // a é do tipo String
console.log(a)