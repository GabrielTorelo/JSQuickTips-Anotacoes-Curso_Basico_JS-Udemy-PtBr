//Para declarar uma variavel, você precisa seguir: let + identificador = valor;
let produto = "Ração";
let preco = 19.90;
let desconto = 0.4;
let precoDesconto = preco*(1-desconto);

console.log("Produto: "+produto);
console.log("\nDesconto de 40% para associados!\n");
console.log("Valor sem desconto: "+preco);
console.log("Valor com desconto: "+precoDesconto);