const quaseArray = {
    0: 'Rafael',
    1: 'Anna',
    2: 'Bia'
}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function() {
        return Object.values(this)
    },
    enumerable: false
}) // O método 'toString' irá simular a impressão como um array
console.log(quaseArray[0])

const meuArray = ['Rafael', 'Anna', 'Bia']
console.log(meuArray)

console.log(quaseArray.toString(), meuArray)