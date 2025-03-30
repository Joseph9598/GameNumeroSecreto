
let listaDeNumerosSorteados=[];
let tentativas = 1;
let numeroLimite=10
let numeroSecreto=gerarNumeroAleatorio();
function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10:');  
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto);
    console.log(chute==numeroSecreto);
    if (chute==numeroSecreto){
        exibirTextoNaTela('h1','Você acertou!');
        let palavraTentativa= tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p',`${mensagemTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        exibirTextoNaTela('h1','Você errou!');
        tentativas++;
        limparCampo()
        if (numeroSecreto>chute){
            exibirTextoNaTela('p','O número secreto é maior!');
        }else{
            exibirTextoNaTela('p','O número secreto é menor!');
        }    
        }
}
    function gerarNumeroAleatorio(){
   let numeroEscolhido= parseInt(Math.random()*numeroLimite+1);
   let qunatidadeDeElementosDaLista=listaDeNumerosSorteados.length

   if (qunatidadeDeElementosDaLista==numeroLimite){
    listaDeNumerosSorteados=[]
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}
function limparCampo(){
    chute=document.querySelector('input');
    chute.value='';
}

function reiniciarJogo(){
    exibirMensagemInicial();
    numeroSecreto=gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    document.getElementById('reiniciar').setAttribute('disabled',true)
}
