function aoQuadrado(numero){
    return numero*numero
}

const numero = 5
const resultadoQuadrado = aoQuadrado(numero);

console.log('O quadrado de: ' + numero + ' é ' + resultadoQuadrado);

function aoCubo(numero){
    return numero*numero*numero
}

const resultadoCubo = aoCubo(numero);
console.log('O cubo de: '+ numero + ' é ' + resultadoCubo);

const num = Math.pow(3,2) // pow - power (potencia) - (numero, potencia)
console.log(num)

console.log('______________________________')

//Objeto literal

const veiculo = {
    rodas: 4,
    lugares: [true, true, true, true, true],
    marca: 'Volkswagen',
    modelo: 'Gol',
    cor:"#FFF"
}

console.log(veiculo)

const celular = {
    marca:  'apple',
    sistemaOperacional: 'iOS',
    modelo: 'XR',
    cor: '#000',
    capacidade: 128
}

console.log(celular);

const livro = require("./livraria.json");

console.log(livro[1].preco)
console.log(livro[1].ano)
console.log(livro[0].editora)

console.log('_________________________');

//Arrow

const aoQuadradoArrow = (numero) => numero*numero;
console.log(aoQuadradoArrow(3))

const aoCuboArrow = (numero) => {
    console.group("O resultado está sendo computado...");
    let resultado = numero*numero*numero
    return resultado
};
console.log(aoCuboArrow(3));

const aPotencia = (numero, potencia) =>{
    let resultado = 1;
    for(let i = 0; i<potencia; i++){
        resultado = resultado * numero
    }
    return resultado
}

console.log(aPotencia(2,3))

console.log("_______________________")

//if ternario

idade = Math.floor(Math.random()*99); //math.ceil - arredonda pra cima
console.log(idade);

idade < 18 ? console.log("Não Pode Beber") : console.log("Pode Beber")
