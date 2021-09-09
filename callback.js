function prepararBolo(callbackMassaPronta, callbackBoloPronto){
    console.log("Batendo a massa...");
    console.log("Massa indo ao forno...");
    callbackMassaPronta();
    console.log("Preparando recheio...");
    console.log("Receio pronto...");
    callbackBoloPronto();
}

function meuBoloEstaPronto(){
    console.log("Bolo pronto")
}

prepararBolo(() => console.log("Massa pronta quadrada"), meuBoloEstaPronto);
prepararBolo(() => console.log("Massa pronta redonda"), meuBoloEstaPronto);


// setTimeout - utiliza uma funcao anonima para fazer esperar o tempo em milisegundos
setTimeout(() => console.log('Executei'), 3000);

// setInterval
setInterval(() => console.log("Passou 1 segundo"), 1000);





