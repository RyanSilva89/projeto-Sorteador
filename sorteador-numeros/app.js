function sortear(){
    let quantidade=parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

let sorteados= [];
let numero;
for (let i = 0; i< quantidade; i++){
numero=obterNumeroAleatorio(de,ate);
while(sorteados.includes(numero)){
    numero=obterNumeroAleatorio(de,ate);
    alert("Tentando escolher um número inédito");
    if(de<=ate){
alert("o campo Do número deve ser inferior ao até o número");
return
}

if(quantidade>(ate- de + 1 )){
    alert('O campo "Quantidade" deve ser menor ou igual ao intervalo informa no campo "Do número " e "até o número".Verifique!');
}
}
sorteados.push(numero);
}

let resultado = document.getElementById('resultado');
resultado.innerHTML=  ` <label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
alterarStatusBotao();
}
function obterNumeroAleatorio(min,max){
return  Math.floor(Math.random() * (max - min + 1) + min);
}
function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
    }else{
        botao.classList.add('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
}
function reiniciar(){
    document.getElementById('quantidade').value='';
    document.getElementById('de').value='';
    document.getElementById('ate').value='';
    document.getElementById('resultado').innerHTML= ' <label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}




