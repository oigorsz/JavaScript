function contar(){
    var ini = document.getElementById("txtini")
    var fim = document.getElementById("txtfim")
    var pas = document.getElementById("txtpas")
    if (ini.value == "" || fim.value == ""|| pas.value == ""){
        res.innerHTML("Impossível Contar")
    } else {
        res.innerHTML = "Contando: <br> "
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if(p <= 0){
            window.alert("Passo inválido ! Considerando PASSO = 1")
            p = 1
        }

        if(i < f){
            for(var c = i; c <= f; c +=p ){//contagem crescente 
                res.innerHTML += `${c} \u{1F449} `//adicionar emoji
            }
        } else{
            for (var c = i; c >= f; c -=p){//contagem decrescente
                res.innerHTML += `${c} \u{1F449} `

            }

        }
        res.innerHTML += `\u{1F3C1}`
    }
   

}