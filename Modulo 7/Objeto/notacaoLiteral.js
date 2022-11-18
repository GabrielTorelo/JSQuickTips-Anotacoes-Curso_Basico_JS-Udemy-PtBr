const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} /**
                                 * Como declarava as constantes 'a', 'b' e 'c' 
                                 * antes do ES2015 (com duplicidade)
                                 */
const obj2 = {a, b, c} // Como são declaradas as constantes 'a', 'b' e 'c' atualmente
console.log(obj1, obj2)

const nomeAtributo = 'nota'
const valorAtributo = 7.87

const obj3 = {}
obj3[nomeAtributo] = valorAtributo /**
                                    * Como era declarado um atributo e atribuido valor a ele
                                    * antes do ES2015
                                    */
const obj4 = {[nomeAtributo]: valorAtributo} // Como é declarado atualmente
console.log(obj3, obj4)

const obj5 = {
    funcao1: function() { // Forma antiga, padrão chave:valor
        // ...
    },
    funcao2() {// Forma nova de declarar uma função
        // ...
    }
}
console.log(obj5)