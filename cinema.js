let catalogo = [
    {
        codigo: 1,
        titulo: 'A Hora do Rush',
        anoDeLancamento: 1998,
        duracao: 1.7,
        emCartaz: false,
        faturamento: 1000
    },
    {
        codigo: 2,
        titulo: 'Velozes e Furiosos 9',
        anoDeLancamento: 2021,
        duracao: 2.5,
        emCartaz: true,
        faturamento: 2000
    },
    {
        codigo: 3,
        titulo: 'Homem Aranha',
        anoDeLancamento: 2021,
        duracao: 2.5,
        emCartaz: true,
        faturamento: 500
    },
    

];

function adicionarFilme(codigo, titulo, anoDeLancamento, duracao, filmeEstaEmCartaz, faturamento){
    catalogo.push({
        codigo, //como utilizamos o mesmo nome, pode ser só "codigo"
        titulo: titulo,
        anoDeLancamento: anoDeLancamento,
        duracao,
        emCartaz: filmeEstaEmCartaz,
        faturamento
    });
    console.log('Filme adicionado');
    console.log(catalogo);
    console.log("______________________________");
}

function buscarFilme(codigoBusca){
// Receber como parâmetro o código do filme
//buscar no array do catalogo o filme pelo seu código - usar o array.find
//console.log(filmeEncntrado)
console.log("INICIANDO BUSCA")
const indice = codigoBusca-1;
const catalogoDisponivel = catalogo.length
const objetoCodigo = []
const objetoNome = []

let validacao = (codigoBusca <= catalogoDisponivel) && (codigoBusca > 0) ? (objetoCodigo.push(catalogo[indice].codigo), objetoNome.push(catalogo[indice].titulo)) : console.log("Filme não encontrado");


const achei = objetoCodigo.find(function(codigoBusca){
    if(validacao && codigoBusca == objetoCodigo){
        console.log("Encontrei o Filme: " + objetoNome)
        console.log("______________________________");
        return objetoNome
    }
})
return achei

}

function alterarStatusEmCartaz(codigoBusca){
    //receber como parametro o codigo do filme
    //Encontrar o filme no catáogo pelo código
    //alterar o status emCartaz para seu inverso
    //atualizar o array de catalogo com o filme alterado

console.log("VALIDANDO ALTERACAO");
let codigoValidado = (buscarFilme(codigoBusca))-1;

if((codigoValidado >= 0) && (codigoBusca <= catalogo.length) && (catalogo[codigoValidado].emCartaz == true)){
    catalogo[codigoValidado].emCartaz = false
    console.log("ALTERANDO O STATUS DO FILME: "+ catalogo[codigoValidado].titulo)
    return console.log(catalogo)
}else if((codigoValidado >= 0) && (codigoBusca <= catalogo.length) && (!catalogo[codigoValidado].emCartaz)){
    catalogo[codigoValidado].emCartaz = true
    console.log("ALTERANDO O STATUS DO FILME: "+ catalogo[codigoValidado].titulo)   
    return console.log(catalogo) 
}console.log("FILME NÃO ENCONTRADO");


}

function listarTodosFilmes(){
    catalogo.forEach((item, index) => console.log(item.titulo + ', ' + item.anoDeLancamento + '. Duração: ' + item.duracao));
}

function listarFilmesLongos(){
    let longos = catalogo.filter((item) => item.duracao > 2 );
    longos.forEach((item) => console.log(item.titulo + ', ' + item.anoDeLancamento + '. Duração: ' + item.duracao));
}

function listarTodosFilmes2(){
    let filmesResumo = catalogo.map((item) => {
        return{
            // codigo: item.codigo,
            // titulo: this.titulo,
            // anoDeLancamento: this.anoDeLancamento,
            // emCartaz:this.emCartaz,
            // duracao: this.duracao,
            // resumo: item.titulo + ', ' + item.anoDeLancamento + '. Duração: ' + item.duracao
            //OU
            resumo: item.titulo + ', ' + item.anoDeLancamento + '. Duração: ' + item.duracao,
            ...item
        }
    });

    //filmesResumo.forEach(item => console.log(item.resumo));
    console.log(filmesResumo)
}

function buscarfilmepeloCodigo(codigo){
    //let filme = catalogo.find(item => item.codigo === codigo);
    //let {titulo} = filme;
    //ou
    let {titulo} = catalogo.find(item => item.codigo === codigo);
    console.log(titulo);
}

//adicionar ao catalogo um item de faturamento.
 //utilizar o metodo reduce do array para calcular o total de faturamento dos filmes
    //para terça (ideal - uma linha)
function calcularFaturamento(){
    console.log(catalogo.reduce((a,b) => ({faturamento: a.faturamento + b.faturamento})))
}

//para nao precisar usar o module varias vezes, é possivel criar um objeto
module.exports = {
    adicionarFilme,
    buscarFilme,
    alterarStatusEmCartaz,
    listarTodosFilmes,
    listarFilmesLongos,
    listarTodosFilmes2,
    buscarfilmepeloCodigo,
    calcularFaturamento
}

