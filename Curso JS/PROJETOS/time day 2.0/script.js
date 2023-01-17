function tempo(){
    let time = new Date()
    let hora = time.getHours()
    let minuto = time.getMinutes()
    let img = document.getElementById("img")
    let res = document.getElementById("res")
    let insta = document.getElementById("insta")
    let data = document.getElementById("data")
    let dia = time.getDate()
    let mes = time.getMonth()
    let ano = time.getFullYear()
    data.innerHTML += `<p>${dia}/${mes}/${ano}</p>`
   
    
  


    if ( hora >= 5 && hora <= 12){
        mensagem.innerHTML += `Bom dia !`
        img.src = "fotodia3.png"
        document.body.style.backgroundColor = "##5271FF";
        insta.style.color = "white"//mudar a cor do texto
         
        
    } else if( hora > 12 && hora <= 18) {
        mensagem.innerHTML += `Boa Tarde !`
        img.src = `fototarde2.png`
        document.body.style.backgroundColor = "#DD7021"
        
    } else if(hora > 18 && hora <= 24){
        mensagem.innerHTML += `Boa Noite !`
        img.src = "fotonoite1.png"
        document.body.style.backgroundColor = "#110837"
    } else{
    mensagem.innerHTML += `Boa Madrugada !`
    }
    res.innerHTML += `<p>São ${hora} horas e ${minuto} minutos</p>`

}

function carregar(){
    setInterval(tempo(), 60000)
}


