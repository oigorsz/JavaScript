let second = 0
let minute = 0
let hour = 0
let display = document.getElementById("display")
let intervalo
let valores
let res = document.getElementById("res")
let tempo
let controle = true 


function start(){
    if (controle){
        rodar()
        intervalo = setInterval(rodar,1000)
        controle = false
    }
    
}
function pause(){
    clearInterval(intervalo)
    controle = true
}
function reset(){
    clearInterval(intervalo)
    res.innerHTML += `<p>${tempo}</p>`

    if(historico.style.display == "none"){
        historico.style.display = "block"
    } 

    second = 0
    minute = 0
    hour = 0
    display.innerHTML = `00:00:00`
    controle = true
}

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

    tempo = display.innerHTML = `${twoNumber(hour)}:${twoNumber(minute)}:${twoNumber(second)}`
}

function twoNumber(digito){
    if (digito < 10){
        return("0" + digito)
    } else {
        return(digito)
    }
}

function history(){
    if(historico.style.display == "none"){
        historico.style.display = "block"
    } else {
        historico.style.display = "none"
    }
}

function limpar(){
    res.innerHTML = ""
    historico.style.display = "none";
}