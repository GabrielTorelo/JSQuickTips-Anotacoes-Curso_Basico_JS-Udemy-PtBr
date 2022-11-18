// PI = 3.14
// Formula para calcular a área da circunferência Pi * raio * raio

const raio = 10;
//const PI = 3.14; // Valor do Pi literal
const PI = Math.PI; // Valor do Pi do JS, função Math nativa do JS
let area = PI * Math.pow(raio, 2); // "pow" é o modo na qual se faz exponenciação no JS, função Math nativa do JS => Math.pow(Variavel, Expoente)

console.log("Valor do Raio: "+raio);
console.log("Valor do PI: "+PI);
console.log("Área da circunferência é: "+area+"m^2");

area = area*2;

console.log("\nO dobro da Área é: "+area);