const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}
minhaFuncao()

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() /**
        * Como as funções armazenam o local na qual foram criadas, 
        * ao chamar/acessar a função 'minhaFuncao()' retornará 'Global'
        */