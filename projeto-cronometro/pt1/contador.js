//Declarando as variáveis
let second = 0
let minute = 0
let hour = 0
let intervalo 
let display = document.getElementById("display")
let tempo
let tempos = document.getElementById("tempos")

//Clicou no botão start
function start(){
    rodar()
    intervalo = setInterval(rodar,1000)
}

//Clicou no botão pause
function pause(){
    clearInterval(intervalo)
}

//Clicou no botão reset
function reset(){
    clearInterval(intervalo)
    tempos.innerHTML += `<p>${tempo}</p>`

    second = 0
    minute = 0
    hour = 0
    display.innerHTML = `00:00:00`
    
}

//Sistema de Contagem
function rodar(){
    second++

    if (second == 60){
        second = 0
        minute++
    }
    if (minute == 60){
        minute = 0
        hour++
    }
    tempo = display.innerHTML = `${twoNumber(hour)}: ${twoNumber(minute)}: ${twoNumber(second)}`
}


//Formata os números
function twoNumber(digito){
    if (digito < 10){
        return("0"+digito)
    }
    else{
        return(digito)
    }
    
}

function history(){
    if (tempos.style.display == "none"){
        tempos.style.display = "block"
    } else {
        tempos.style.display = "none"
    }
}

function clean(){
   window.location.href = "index.html"
}

