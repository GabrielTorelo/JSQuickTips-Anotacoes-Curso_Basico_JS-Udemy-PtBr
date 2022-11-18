const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    }
}
console.log(JSON.stringify(obj)) /**
                                  * Converte um objeto para o formato JSON
                                  * 
                                  *   # Nota-se que a função 'soma' não foi incluída
                                  *     ao JSON, pois, o JSON é um formato de dados
                                  *     (diferente de algo que é executado)
                                  */

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) /**
                                                     *  // Converte um JSON em um objeto \\
                                                     * 
                                                     *   # Nota-se que o nome do atributo deve
                                                     *     estar entre aspas duplas ("AttrName"),
                                                     *     seguindo de dois ponto (':'), seguido
                                                     *     do valor do atributo.
                                                     * 
                                                     *   # Exemplos de JSON errados:
                                                     *     JSON.parse("{a:1, b:2, c:3}")
                                                     *     JSON.parse("{'a':1, 'b':2, 'c':3}")
                                                     */

console.log(JSON.parse('{"d": 0, "e": "oi", "f": true, "g": {}, "h": []}')) /**
                                                                             * Também é possivel
                                                                             * passar valores 
                                                                             * como strings,
                                                                             * booleanos,
                                                                             * objetos e arrays
                                                                             */