// EX 1
console.log('=-=-= EX 1 =-=-=')

function operacoes (num1, num2){
    console.log(`SOMA: ${num1 + num2}`)
    console.log(`SUBTRAÇÃO: ${num1 - num2}`)
    console.log(`MULTIPLICAÇÃO: ${num1 * num2}`)
    console.log(`DIVISÃO: ${num1 / num2}`)
}
operacoes(3, 1)

console.log('=-=-=-=--=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 2
console.log('=-=-= EX 2 =-=-=')

function triangulos (n1, n2, n3){
    if(n1 === n2 && n2 === n3){
        return `O triângulo é equilátero! L1: ${n1} | L2: ${n2} | L3: ${n3}`
    }
    else if(n1 === n2 || n1 === n3 || n2 === n3){
        return `O triângulo é isósceles! L1: ${n1} | L2: ${n2} | L3: ${n3}`
    }
    else{
        return `O triângulo é escaleno! L1: ${n1} | L2: ${n2} | L3: ${n3}`
    }
}
console.log(triangulos(3,3,3)); console.log(triangulos(2,3,2)); console.log(triangulos(1,2,3));

console.log('=-=-=-=--=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 3
console.log('=-=-= EX 3 =-=-=')

const baseElevadaExpoente = (base, expoente) => Math.pow(base, expoente)
console.log(baseElevadaExpoente(2, 2))

console.log('=-=-=-=--=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 4
console.log('=-=-= EX 4 =-=-=')

function divisão (dividendo, divisor){
    let result = dividendo / divisor
    console.log(`O resultado é: ${result}`)
    result = dividendo % divisor
    console.log(`O resto é: ${result}`)
}
divisão(5, 4)

console.log('=-=-=-=--=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 5
console.log('=-=-= EX 5 =-=-=')

function resolveNum (numero){
    const arrumado = numero.toFixed(2).toString()
    return 'R$'.concat(arrumado.replace('.', ','))
}
const param1 = (0.1 + 0.2)
console.log(resolveNum(param1))

console.log('=-=-=-=--=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 6
console.log('=-=-= EX 6 =-=-=')

const jurosS = (capInicial, taxJuros, tempAplic) => `Juros Simples: R$ ${(capInicial + (capInicial * taxJuros * tempAplic)).toFixed(2)}`
const jurosC = (capInicial, taxJuros, tempAplic) => `Juros Compostos: R$ ${(capInicial * (1 + taxJuros) ** tempAplic).toFixed(2)}` 

function juros (capInicial, taxJuros, tempAplic){
    return jurosS(capInicial, taxJuros, tempAplic).concat('\n' + jurosC(capInicial, taxJuros, tempAplic))
}
console.log(juros(100, 0.1, 2))

console.log('=-=-=-=--=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 7
console.log('=-=-= EX 7 =-=-=')

function bhaskara (ax2, bx, c){
    const delta = (bx ** 2) - 4 * ax2 * c

    if(delta < 0){
        return 'Delta é negativo | Delta: '.concat(delta)
    }
    else{
        let result = []

        result.push((-bx + Math.sqrt(delta)) / (2 * ax2))
        result.push((-bx - Math.sqrt(delta)) / (2 * ax2))

        return result
    }
}
console.log(bhaskara(3, -5, 2))

console.log('=-=-=-=--=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 8 /* NÃO CHEGUEI AO RESULTADO ESPERADO!!!
console.log('=-=-= EX 8 =-=-=')

function CalcRecord (jogos){
    const partida = jogos.split(' ')
    let record = 0
    let posPior = Math.min.apply(null, partida)

    for(let i in partida){
        if(partida[i] == posPior)
            posPior = ++i
        if(partida[i] < partida[++i])
            record++
    }

    let recorde = [record, posPior]
    return recorde
}

console.log(CalcRecord("10 20 20 8 25 3 0 30 1"))

console.log('=-=-=-=--=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 9
console.log('=-=-= EX 9 =-=-=')

function calcNota (nome, nota){
    if(nota < 40){
        if(nota < 38){
            return `O aluno ${nome} foi reprovado! Nota: ${nota}`
        }
        else{
            nota = 40
            return `O aluno ${nome} foi aprovado! Nota: ${nota}`
        }        
    }
    else{
        if(!(nota % 5))
            return `O aluno ${nome} foi aprovado! Nota: ${nota}`
        else if (((Math.ceil(nota/5)*5) - nota) < 3)
            return `O aluno ${nome} foi aprovado! Nota: ${Math.ceil(nota/5)*5}`
        else
            return `O aluno ${nome} foi aprovado! Nota: ${nota}`
    }
}
console.log(calcNota('Gabriel', 88));
console.log(calcNota('João', 53));
console.log(calcNota('Jose', 37));

console.log('=-=-=-=--=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 10
console.log('=-=-= EX 10 =-=-=')

const verifica = (num = 3) => !(num % 3)
console.log(verifica(6))
console.log(verifica(2))

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 11
console.log('=-=-= EX 11 =-=-=')

function anoBissexto(ano = 0) {
    if(isNaN(ano)){
        console.log(`O ano '${ano}' é inválido!`)
        return false
    }
    else if(!(ano % 400)){
        console.log(`O ano '${ano}' é ano bissexto!`)
        return true
    }
    else if (!(ano % 100)){
        console.log(`O ano '${ano}' é ano bissexto!`)
        return true
    }
    else if (!(ano % 4)){
        console.log(`O ano '${ano}' é ano bissexto!`)
        return true
    }
    else{
        console.log(`O ano '${ano}' não é ano bissexto!`)
        return false
    }
}
console.log(anoBissexto(2022))
console.log(anoBissexto(2024))
console.log(anoBissexto('oi'))

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 12
console.log('=-=-= EX 12 =-=-=')

const calcFatorial = (num = 0) => {
    let result = 1;

    while(num >= 1){
        result *= num
        num--
    }

    return result
}
console.log(calcFatorial(13))

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 13
console.log('=-=-= EX 13 =-=-=')

const diaDaSemana = (dia) => {
    let veriFimDeSemana = null

    if((!(dia % 6) || !(dia % 7)) && dia !== 0 && dia <= 31)
        veriFimDeSemana = true
    else if(((dia % 6) || (dia % 7)) && dia <= 31)
        veriFimDeSemana = false

    switch (veriFimDeSemana){
        case true:
            return `O dia ${dia} é um fim de semana!`
        case false:   
            return `O dia ${dia} é um dia útil!`
        default:
            return `O dia '${dia}' é inválido!`
    }
}
console.log(diaDaSemana(30))

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 14
console.log('=-=-= EX 14 =-=-=')

const nomeFruta = function(fruta){
    switch(fruta){
        case 'maçã':
            console.log(`Fruta: ${fruta} - Não vendemos esta fruta aqui!`)
            break
        case 'kiwi':
            console.log(`Fruta: ${fruta} - Estamos com escassez de kiwis!`)
            break
        case 'melancia':
            console.log(`Fruta: ${fruta} - Aqui está, são 3 reais o quilo!`)
            break
        default:
            console.log('Erro, produto não encontrado!');
    }
}
nomeFruta('maçã')
nomeFruta('laranja')

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 15
console.log('=-=-= EX 15 =-=-=')

const revenda = (carro) => {
    switch(carro){
        case 'hatch':
            console.log('Compra efetuada com sucesso!')
            break
        case 'sedans':
            console.log('Tem certeza que não prefere este modelo?')
            break
        case 'motocicletas':
            console.log('Tem certeza que não prefere este modelo?')
            break
        case 'caminhonetes':
            console.log('Tem certeza que não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui!')
    }
}
revenda('hatch')
revenda('suv')

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 16
console.log('=-=-= EX 16 =-=-=')

function calculadora(param1, op, param2){
    let result = 0

    switch(op){
        case '+':
            result = param1 + param2
            return `O resultado é: ${result}`
        case '-':
            result = param1 - param2
            return `O resultado é: ${result}`
        case '*':
            result = param1 * param2
            return `O resultado é: ${result}`
        case '/':
            result = param1 / param2
            return `O resultado é: ${result}` 
        default:
            return `Operação inválida!`
    }
}
console.log(calculadora(2, '+', 3))
console.log(calculadora(2, 'a', 3))

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 17
console.log('=-=-= EX 17 =-=-=')

function reajusteSal(plano, atualSal){
    switch(plano){
        case 'A':
            atualSal += atualSal * 0.1
            console.log('Salario após o reajuste: R$ '.concat(atualSal))
            break
        case 'B':
            atualSal += atualSal * 0.15
            console.log('Salario após o reajuste: R$ '.concat(atualSal))
            break
        case 'C':
            atualSal += atualSal * 0.2
            console.log('Salario após o reajuste: R$ '.concat(atualSal))
            break
        default:
            console.log('Plano informado inválido!')
    }
}
reajusteSal('A', 1000)
reajusteSal('X', 1000)

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 18
console.log('=-=-= EX 18 =-=-=')

const escreveExtenso = numero => {
    switch(numero){
        case 1:
            return '1 - Um'
        case 2:
            return '2 - Dois'
        case 3:
            return '3 - Três'
        case 4:
            return '4 - Quatro'
        case 5:
            return '5 - Cinco'
        case 6:
            return '6 - Seis'
        case 7:
            return '7 - Sete'
        case 8:
            return '8 - Oito'
        case 9:
            return '9 - Nove'
        case 10:
            return '10 - Dez'
        default:
            return 'Número fora do intervalo!'
    }
}
console.log(escreveExtenso(5))
console.log(escreveExtenso(20))


console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 19
console.log('=-=-= EX 19 =-=-=')

function cardapio(cod, qtd){
    let valPagar = 0;

    switch(cod){
        case 100:
            valPagar = 3.00 * qtd
            return valPagar
        case 200:
            valPagar = 4.00 * qtd
            return valPagar
        case 300:
            valPagar = 5.50 * qtd
            return valPagar
        case 400:
            valPagar = 7.50 * qtd
            return valPagar
        case 500:
            valPagar = 3.50 * qtd
            return valPagar
        case 600:
            valPagar = 2.80 * qtd
            return valPagar
    }
}
console.log('Valor a pagar: R$ '.concat(cardapio(300, 2)))

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 20
console.log('=-=-= EX 20 =-=-=')

const minCedulas = valor => {
    let cedulas = [0, 0, 0, 0, 0] // [100, 50, 10, 5, 1]
    let notasUsadas = ''
    let incrementa = 0

    for(let i = 0; valor != 0; i++){
        if(valor >= 100){
            cedulas.splice(0, 1, cedulas[0]+1)
            valor -= 100
        }
        else if(valor >= 50){
            cedulas.splice(1, 1, cedulas[1]+1)
            valor -= 50
        }
        else if(valor >= 10){
            cedulas.splice(2, 1, cedulas[2]+1)
            valor -= 10
        }
        else if(valor >= 5){
            cedulas.splice(3, 1, cedulas[3]+1)
            valor -= 5
        }
        else if(valor >= 1){
            cedulas.splice(4, 1, cedulas[4]+1)
            valor -= 1
        }
    }

    for(let j in cedulas){
        if(cedulas[j] != 0){
            switch(incrementa){
                case 0:
                    notasUsadas += `${cedulas[j]} nota(s) de R$ 100 | `
                    break
                case 1:
                    notasUsadas += `${cedulas[j]} nota(s) de R$ 50 | `
                    break
                case 2:
                    notasUsadas += `${cedulas[j]} nota(s) de R$ 10 | `
                    break
                case 3:
                    notasUsadas += `${cedulas[j]} nota(s) de R$ 5 | `
                    break
                case 4:
                    notasUsadas += `${cedulas[j]} nota(s) de R$ 1`
                    break
            }
        }
        incrementa++
    }

    return notasUsadas
}
console.log(minCedulas(1649))

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 21
console.log('=-=-= EX 21 =-=-=')

function convenioSaude(idade){
    let valorPagar = 100

    if(idade < 10)
        valorPagar += 80
    else if(idade >= 10 && idade <= 30)
        valorPagar += 50
    else if(idade > 30 && idade <= 60)
        valorPagar += 95
    else
        valorPagar += 130

    return valorPagar
}
console.log(`Valor a ser pago: R$ ${convenioSaude(21)}`);

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 22
console.log('=-=-= EX 22 =-=-=')

const associacao = (mes, anuidade) => {
    let valPagar = 0
    
    if(mes > 0 && mes < 13){
        let atraso = mes - 1
        valPagar = (anuidade * ((1 + 0.05)**atraso)).toFixed(2)
        return `O valor a ser pago é: R$ ${valPagar}`
    }
    else{
        return 'Mês inválido!'
    }
}
console.log(associacao(10, 165))
console.log(associacao(14, 165))

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 23
console.log('=-=-= EX 23 =-=-=')

function media(cod, n1, n2 ,n3){
    let notas = [n1, n2, n3]
    let maiorNota = Math.max.apply(null, notas)
    let media = 0

    for(let i in notas){
        if(notas[i] == maiorNota){
            media += notas[i]*4
        }
        else
            media += notas[i]*3
    }
    media /= 10

    return `Cod. Aluno: ${cod} | Nota 1: ${n1} | Nota 2: ${n2} | Nota 3: ${n3} | Media: ${media} | Situação: ${media <= 5 ? 'APROVADO' : 'REPROVADO'}`
}
console.log(media(1, 8, 5, 3))
console.log(media(2, 4, 5, 3))

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 24
console.log('=-=-= EX 24 =-=-=')

{
    let i = 0
    
    while(i < 11){
        console.log(' Hello World!');
        i++;
    }   
}

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 25
console.log('=-=-= EX 25 =-=-=')

{
    for(let i = 1; i <= 50; i++){
        console.log(i)
    }
}

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 26
console.log('=-=-= EX 26 =-=-=')

{
    for(let i = 1; i <= 100; i++){
        if(!(i % 2))
            console.log(i)
    }
}

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 27
console.log('=-=-= EX 27 =-=-=')

function taxaCresCrian(altCrian1, taxCrian1, altCrian2, taxCrian2){
    let anos = 0

    if(altCrian1 > altCrian2){
        if(taxCrian1 < taxCrian2){
            while(altCrian1 > altCrian2){
                altCrian1 += taxCrian1
                altCrian2 += taxCrian2
                anos++
            }
            return `A criança menor ultrapassará a criança maior em ${anos} ano(s).`
        }
        else{
            return 'A criança menor não ultrapassará a criança maior.'
        }
    }
    else if(altCrian2 > altCrian1){
        if(taxCrian2 < taxCrian1){
            while(altCrian2 > altCrian1){
                altCrian1 += taxCrian1
                altCrian2 += taxCrian2
                anos++
            }
            return `A criança menor ultrapassará a criança maior em ${anos} ano(s).`
        }
        else{
            return 'A criança menor não ultrapassará a criança maior.'
        }
    }
    else{
        return `As crianças tem alturas iguais! Altura: ${altCrian1} cm.`
    }
    
}
console.log(taxaCresCrian(139, 13, 136, 14))

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 28
console.log('=-=-= EX 28 =-=-=')

{
    let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    let pares = 0;
    let impares = 0;

    for(let i in vetor){
        if(!(vetor[i]%2))
            pares++
        else
            impares++
    }
    console.log(`O vetor possui ${pares} pares e ${impares} impares`);
}

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 29
console.log('=-=-= EX 29 =-=-=')

{
    let vetor = [8, 34, 20, 26, 39, 10, 33, 14, 36, 13] // 4 no intervalo de [10,20] e 6 fora do intervalo de [10,20]
    let noIntervalo = 0;
    let foraIntervalo = 0;

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i] <= 20)
            noIntervalo++
        else
            foraIntervalo++
    }
    console.log(`${noIntervalo} estão dentro do intervalo e ${foraIntervalo} estão fora do intervalo`);
}

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 30
console.log('=-=-= EX 30 =-=-=')

{
    let vetor = [33, 3, 7, 27, 45, 29, 19, 28, 39, 14]
    let maior = vetor[0]
    let menor = vetor[0]

    let maiorMaisFacil = Math.max.apply(null, vetor)
    let menorMaisFacil = Math.min.apply(null, vetor)

    for(i in vetor){
        if(maior < vetor[i])
            maior = vetor[i]
        if(menor > vetor[i])
            menor = vetor[i]
    }
    console.log(`O maior valor do vetor é ${maior} | O menor valor do vetor é ${menor}`);
    console.log(maiorMaisFacil);
    console.log(menorMaisFacil);
}

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 31
console.log('=-=-= EX 31 =-=-=')

{
    let vetor = [3, 6, 7, -16, 21, 31, 33, -40, -41, 42]
    let negativos = 0

    for(let i in vetor){
        if(vetor[i] < 0)
            negativos++
    }
    console.log(`Temos ${negativos} números negativos no vetor`);
}

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 32
console.log('=-=-= EX 32 =-=-=')

{
    let vetor = [4, 31, 17, 5, 45, 9, 36, 22, 6, 28]
    let soma = 0

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }
    
    console.log(`A média aritmética do vetor é ${soma / vetor.length}`);
}

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 33
console.log('=-=-= EX 33 =-=-=')

{
    let vetorInteiro = [1, 6, 7, 15]
    let vetorString = ['4', '14', '19', '22']
    let vetorDouble = [1.3, 4.2, 8.4, 9.78]

    console.log(vetorInteiro.concat(vetorString).concat(vetorDouble))
}

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha


// EX 34
console.log('=-=-= EX 34 =-=-=')

{
    function testaStrings(strg1, strg2, op){
        let string1 = ''
        let string2 = ''
        let str1 = ''
        let str2 = ''
        let contido = false;

        if(op === 1)
            [str1, str2] = [strg1, strg2]
        else if(op === 2)
            [str1, str2] = [strg2, strg1]
        else
            return `Operação inválida!`

        for(let i = 0; i < str1.length; i++){
            string1 = str1[i].toUpperCase()

            for(let j = 0; j < str2.length; j++){
                string2 = str2[j].toUpperCase()
                if(string1 === string2){
                    contido = true
                    break
                }
                else
                    contido = false
            }
            if(!contido)
                return contido
        }
        return contido
    }

    function stringsIguais(strg1, strg2){
        let contido = false;

        contido = testaStrings(strg1, strg2, 1)
        if(contido)
            contido = testaStrings(strg1, strg2, 2)
        else
            return contido
        return contido 
    }

    console.log(stringsIguais('abcddab', 'dcbaaada'))
}

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 35
console.log('=-=-= EX 35 =-=-=')

{
    let vetorPilha = [1, 2, 3, 4, 5]
    let vetorAdiciona = [6, 7, 8, 9, 10]
    let vetTamanho = vetorAdiciona.length

    for (let i = 0; i < vetTamanho; i++) {
        vetorPilha.push(vetorAdiciona.shift())
    }

    console.log(vetorAdiciona);
    console.log(vetorPilha);
}

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 36
console.log('=-=-= EX 36 =-=-=')

{
    let vetor = [2, 4, 21, 23, 24, 25, 26, 28, 33, 35]

    function multVetor(vetorNum, num1){
        
        for(let i in vetor){
            vetorNum[i] *= num1

            if (vetorNum[i] > 5){
                vetorNum[i] = multVetorMaiorQ5(vetorNum[i], num1)      
            }
        }

        return `[${vetor}]`
    }

    const multVetorMaiorQ5 = (numVetor, num1) => numVetor * num1

    console.log(multVetor(vetor, 2))
}

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 37
console.log('=-=-= EX 37 =-=-=')

{
    const progressaoAritmetica = (numTer, primTer, razao) => {
        let result = []
        let soma = 0
        let contador = numTer
        numTer = 0
        while(contador != 0){
            let op = primTer + ((numTer) * razao)
            result.push(op)
            soma += op
            numTer++
            contador--
        }
        return `Progressão Aritmética (PA) -> Termos: ${result} | Soma: ${soma}`
    }

    function progressaoGeometrica(numTer, primTer, razao){
        let result = []
        let soma = 0
        let contador = numTer
        numTer = 1
        while(contador != 0){
            let op = primTer * razao**(numTer - 1)
            result.push(op)
            soma += op
            numTer++
            contador--
        }
        return `Progressão Geométrica (PG) -> Termos: ${result} | Soma: ${soma}`
    }

    console.log(progressaoAritmetica(10, 1, 2)) // (NumeroDeTermos, PrimeiroTermo, Razão)
    console.log(progressaoGeometrica(10, 1, 2)) //                  ||
}

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 38
console.log('=-=-= EX 38 =-=-=')

function impares(inicio = 0, fim = 100){
    let impar = [] 

    if(inicio > fim)
        [inicio, fim] = [fim, inicio]

    for(inicio; inicio <= fim; inicio++){
        if(inicio % 2){
            impar.push(inicio)
        }
    }
    console.log(impar)
}
impares(5, 25)
impares()

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 39
console.log('=-=-= EX 39 =-=-=')

{
    let vetorA = [2, 8, 9, 10, 6, 7, 6, 3, 9, 5]
    let vetorB = [10, 3, 7, 1, 2, 8, 5, 2, 6, 3]

    function trocarVetor(vet1, vet2){

        [vet1, vet2] = [vet2, vet1]
        console.log(`VetorA: ${vet1}`)
        console.log(`VetorB: ${vet2}`)
    }
    console.log(`!Antes!`)
    console.log(`VetorA: ${vetorA}`)
    console.log(`VetorB: ${vetorB}`)
    console.log(`\n!Depois!`)
    trocarVetor(vetorA, vetorB)
}

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// EX 40
console.log('=-=-= EX 40 =-=-=')

{
    let vetor = [8.62, 8.85, 8.07, 9.01, 3.29, -1.42, 11.5, 9.16, 9.89, 6.21]

    function conceitoAlunos(vetor1){
        let array = []
        let error = false

        for(let i in vetor1){
            if(vetor1[i] < 0.0 || vetor1[i] > 10.0){
                vetor1[i] = '----'
                array[i] = '-'
                error = true
            }
            else if(vetor1[i] >= 0.0 && vetor1[i] <= 4.9)
                array[i] = 'D'
            else if(vetor1[i] >= 5.0 && vetor1[i] <= 6.9)
                array[i] = 'C'
            else if(vetor1[i] >= 7.0 && vetor1[i] <= 8.9)
                array[i] = 'B'
            else
                array[i] = 'A'
            console.log(`Aluno: ${i} | Nota: ${vetor1[i]} | Conceito: ${array[i]}`)
        }
        console.log(error == true ? '\n*Alguma(s) nota(s) retornou(aram) erro, à(s) corrija e tente novamente!\n**Estão aprovados os alunos com conceitos A, B e C!' : '\n*Estão aprovados os alunos com conceitos A, B e C!');
        
    }
    conceitoAlunos(vetor)
}

console.log('=-=-=-=-=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha