class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) { /**
                                      * O operador '...' indica que serão recebidos vários
                                      * parametros, os contatenando em um array
                                      */
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })

        return `R$ ${valorConsolidado.toFixed(2)}`
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(2, 2022)
contas.addLancamentos(salario, contaDeLuz) /**
                                            * Posso passar vários parâmetros, pois, a função
                                            * 'addLancamentos' aceita varios parâmetros, os
                                            * concatenando em um array
                                            */
console.log(contas.sumario())