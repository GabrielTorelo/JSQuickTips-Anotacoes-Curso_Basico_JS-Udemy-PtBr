function area(largura, altura){
    const area = largura * altura
    if(area > 20){ // Não retorna nada
        console.log(`MsgERROR - Valor acima do permitido: ${area}m^2`);
    }else{ // Retorna a area
        return area
    }
}

console.log(area(2, 10)) // Retorna 20
console.log(area(2)) /**
                      * Como foi passado apenas valor para a variável 'largura'
                      * (função não foi tratada/preparada para isso), a constante 
                      * 'area' tentou fazer uma operação entre '20' e 'undefined'
                      * (indefinido), gerando assim um NaN
                      */ 
console.log(area()) /**
                     * Como não foi passado nenhum parâmetro
                     * (função não foi tratada/preparada para isso),
                     * a constante 'area' tentou fazer uma operação 
                     * entre 'undefined' (indefinido) e 'undefined'
                     * (indefinido), gerando assim um NaN
                     */
console.log(area(1, 10, 20, 50)) /**
                                  * Como a função (function) pede como parâmetro apenas 2
                                  * variáveis ('largura' e 'altura'), os valores que foram 
                                  * passados além será ignorados
                                  */
area(20, 10) // Retorna a 'MsgERROR'