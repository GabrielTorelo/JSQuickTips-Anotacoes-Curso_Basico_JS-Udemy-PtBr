// Usando a notação literal
const obj1 = {
    // ...
}
console.log(obj1)

console.log('') // Quebra de linha

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => (preco * (1 - desc)).toFixed(2)
}

const p1 = new Produto('Caneta', 5, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.nome.concat(': ').concat(p1.getPrecoComDesconto()), p2.nome.concat(': ').concat(p2.getPrecoComDesconto()))

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Gabriel', 5000, 0)
const f2 = criarFuncionario('Jose', 3000, 18)
console.log(f1.nome.concat(': ').concat(f1.getSalario()), f2.nome.concat(': ').concat(f2.getSalario()));

// Object.create
const filha = Object.create(null)
filha.nome = 'Anna'
console.log(filha);

// Uma função famosa que retorna um Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info);