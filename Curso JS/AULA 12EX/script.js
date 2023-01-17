function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var aviso = window.document.getElementById("aviso")
    aviso.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`
    
    
    if (hora >= 0 && hora <= 12){
        msg.innerHTML = `Bom dia !`
        img.src = "fotodia3.png"
        document.body.style.background = "#FDE37B"
    }  else if(hora > 12 && hora <= 18){
        msg.innerHTML = `Boa Tarde !`
        img.src = "fototarde2.png"
        document.body.style.background = "#644D53"
    } else {
        msg.innerHTML = `Boa Noite !`
        img.src = "fotonoite1.png"
        document.body.style.background = "#132037"
    }
}

