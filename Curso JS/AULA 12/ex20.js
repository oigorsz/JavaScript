var agora = new Date()
var horatxt = agora.getHours() +" horas "+ agora.getMinutes()+" minutos" + " e "+ agora.getSeconds() + " segundos"
var hora = agora.getHours()
console.log(`Agora são exatamente ${horatxt}`)
if(hora > 5 && hora < 12){
    console.log('Bom dia !')}
    else if(hora >= 12 && hora < 18) {
    console.log("Boa tarde !")
    }
    else if (hora >= 18 && hora < 24){
    console.log("Boa noite !")
    }
    else if( hora < 5){
    console.log("Boa madrugada!")
    }


    //condição multipla 
    //switch (expressão){case 1: break; case 2: break; default}
    
