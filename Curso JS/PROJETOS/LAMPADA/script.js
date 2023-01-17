
var bloco = window.document.getElementById("bloco")
bloco.addEventListener('click',clicar)
bloco.addEventListener('mouseenter', entrar)
bloco.addEventListener('mouseout', sair)

function clicar(){
    bloco.style.background = "yellow"
    
}
function ligar(){
    bloco.style.background = "yellow"
}

function desligar(){
    bloco.style.background = "gray"
}


