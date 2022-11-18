console.log(Math.ceil(6.5)) // Podemos acessar funções de um objeto (nesse caso o Math) com a notação ponto 'Math.ceil(value)'

const obj1 = {}
obj1.nome = 'Bola' // Podemos criar dinamicamente um atributo dentro de um obejeto com a notação ponto
// obj1['nome'] = 'Bola' // Faz a mesma coisa que o código acima! Porem, é mais recomendado utilizar a notação ponto

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome // Famoso método construtor! Deixando a variável 'nome' como pública
    this.exec = function(){ // Instanciando uma função no método construtor
        console.log('Executando...')
    }
}

const obj2 = new Obj('Mesa')
const obj3 = new Obj('Cadeira')
console.log(obj2.nome, obj3.nome)
obj2.exec() // Chamando a função que foi criada (pode ser chamada usando tanto 'obj2' quanto 'obj3')