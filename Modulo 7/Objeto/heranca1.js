const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    VelMax: 200
}

console.log(ferrari.prototype)
console.log(ferrari.__proto__) // A propriedade '__proto__' acessa o protótipo do objeto
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)