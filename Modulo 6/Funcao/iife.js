// IIFE - Immediately Invoked Function Expression

/**
 * 
 * Sua sintaxe é a seguinte:
 * 
 *      (function () {
 *          ...
 *      })()     // "(função)"'()' - Dentro do primeiro parênteses "(função)" você define a função! 
 *                                   O segundo parênteses '()' é a chamada dessa função!
 */

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})() // O parênteses no final é para chamar a função que foi criada