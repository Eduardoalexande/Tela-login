let imagem=document.querySelector(".troca")
function troca(){
    if(imagem.style.opacity==0){
        imagem.style.opacity=1
    } else{
        imagem.style.opacity=0
    }
}
setInterval(troca,2000)
