let imagem= document.querySelector(".copao")

function trocaImagem(endereco){
    imagem.src=endereco
}

function trocarCor(cor){
    let setor = document.querySelector(".setorVerde")
    setor.style.backgroundColor=cor
}