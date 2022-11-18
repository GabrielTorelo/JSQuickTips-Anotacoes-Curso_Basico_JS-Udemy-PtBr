var produto = "Caneta";
var quantidade = 10;
let valor = 6.4; //let é a forma mais usual, NUNCA USAR VAR!!!
let imposto = 1.5;
let valFinal = valor+imposto;

console.log("Produto: "+produto);
// console.log(10); // Valor literal
console.log("Quantidade: "+quantidade);
console.log("Valor: "+valor);
console.log("Imposto: "+imposto);
console.log("Valor de Venda: "+valFinal);

produto = produto+" BIC";
quantidade = quantidade*2;
valor = valor/2;
valFinal = valor+imposto;

console.log("\nProduto parecido: "+produto);
console.log("Quantidade: "+quantidade);
console.log("Valor: "+valor);
console.log("Imposto: "+imposto);
console.log("Valor de Venda: "+valFinal);