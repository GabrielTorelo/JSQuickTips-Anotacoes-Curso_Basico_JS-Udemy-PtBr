// Desafio da troca => Trocar o valor da variavel, sendo que A ao final deve ter o valor de B inicial
// e B final deve conter o valor de A inicial;

let a = 7;
let b = 94;

console.log("Valor de A é: "+a);
console.log("Valor de B é: "+b);

// Forma tradicional de se resolver
// let aux = a; 
// a = b;
// b = aux;

// Forma mais simples com JS
[a, b] = [b, a];

console.log("\nTrocando os valores em A e B!\n");

console.log("Valor de A agora é: "+a);
console.log("Valor de B agora é: "+b);