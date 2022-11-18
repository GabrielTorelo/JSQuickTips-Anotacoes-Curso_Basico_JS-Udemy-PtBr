function soBoaNoticia(nota){
    if(nota >= 7){ // 'SE' (if) a expressão for verdadeira o bloco relacionado ao 'if' será executado
        console.log(`Aprovado com nota ${nota}`) // Só executa se 'nota >= 7' for verdadeiro
    }
}

soBoaNoticia(7) // Verdadeiro
soBoaNoticia(5) // Falso

const seForVerdadeiroEuFalo = valor => {
    if(valor){ // Qualquer valor que seja passado, o JS irá converter para boolean e analisar de é verdadeiro ou falso
        console.log(`É verdade!! ${valor}`)
    }
}
seForVerdadeiroEuFalo(true) // Verdadeiro
seForVerdadeiroEuFalo(1) // Verdadeiro
seForVerdadeiroEuFalo(-1) // Verdadeiro
seForVerdadeiroEuFalo(' ') // Verdadeiro
seForVerdadeiroEuFalo('Oi') // Verdadeiro
seForVerdadeiroEuFalo([]) // Verdadeiro
seForVerdadeiroEuFalo([1, 2]) // Verdadeiro
seForVerdadeiroEuFalo({}) // Verdadeiro
seForVerdadeiroEuFalo() // Falso
seForVerdadeiroEuFalo(null) // Falso
seForVerdadeiroEuFalo(undefined) // Falso
seForVerdadeiroEuFalo(NaN) // Falso
seForVerdadeiroEuFalo('') // Falso
seForVerdadeiroEuFalo(0) // Falso
seForVerdadeiroEuFalo(false) // Falso

const seForVerdadeiroEuFaloReturn = valor => valor ? console.log(`É verdade!! Return: ${valor}`) : 0
seForVerdadeiroEuFaloReturn(true)
seForVerdadeiroEuFaloReturn(false)