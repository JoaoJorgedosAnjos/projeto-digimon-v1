const imagens = document.querySelectorAll(".cartao");
const setaAvancar = document.getElementById("seta-avancar");
const setaVoltar = document.getElementById("seta-voltar");
console.log(setaVoltar)

let imagemAtual = 0;

setaAvancar.addEventListener("click", function () {
    if(imagemAtual == imagens.length-1){
        return
    }
    imagemAtual++;

    esconderImagemAberta()
    mostrarImagem()    
    mostrarOuEsconderSetas()
})
setaVoltar.addEventListener("click", function(){
    if(imagemAtual == 0){
        return
    }
    imagemAtual--;

    esconderImagemAberta()
    mostrarImagem()    
    mostrarOuEsconderSetas()
})

function mostrarImagem(){
    imagens[imagemAtual].classList.add("selecionado");
}
function esconderImagemAberta(){
    const imagemAberta = document.querySelector(".selecionado");
    imagemAberta.classList.remove("selecionado")
}

function mostrarOuEsconderSetas(){
    const naoEAPrimeiraImagem = imagemAtual!== 0;
    if(naoEAPrimeiraImagem){
        setaVoltar.classList.remove("opacidade")
    }else{
        setaVoltar.classList.add("opacidade")
    }
    const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length-1;{
    if(chegouNaUltimaImagem){
           setaAvancar.classList.add("opacidade");
        }else{
            setaAvancar.classList.remove("opacidade");
        }
 }
}



