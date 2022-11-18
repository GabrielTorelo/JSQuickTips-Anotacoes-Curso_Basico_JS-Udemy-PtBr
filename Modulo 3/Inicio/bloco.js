{
    console.log("Passo #01");
    console.log("Passo #02");
    console.log("Passo #03");
}

{
    console.log("Passo #04");
    console.log("Passo #05");
}

{
    ;
    ;
    ;
    // isso gera um erro;

    {
        {
            {
                console.log("Posso fazer isso tranquilamente!");
            }
        }
    }
}

console.log("Fim!");