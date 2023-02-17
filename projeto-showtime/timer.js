const myInterval = setInterval(time, 500);

function time() {
    const now = new Date();
    let hour = now.getHours();
    //let hour = (hora teste)
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let timer = document.getElementById("timer")
    let mensagem = document.getElementById("mensagem")


    //Mudança de Acordo com o Horário
    if (hour < 12){
        mensagem.innerHTML = `Bom dia !`
        timer.style.backgroundColor = "#78658C";
        fundo.style.backgroundColor = "#aadffa";

    } else if (hour < 18){
        mensagem.innerHTML = `Boa tarde !`
        timer.style.backgroundColor = "#ce1919";
        fundo.style.backgroundColor = "#F2E2C4";
        
    } else if (hour < 24){
        mensagem.innerHTML = `Boa Noite !`
        timer.style.backgroundColor = "#e093d6"
        fundo.style.backgroundColor = "#4b2280";
        t.style.color = "#fff";
        mensagem.style.color = "#fff";
    } else if (0 < hour < 6) {
        mensagem.innerHTML = `Boa Madrugada ! `
    }


    //Formatando os valores

    if (second < 10){
        second = `0${second}`
    }
    if (minute < 10){
        minute = `0${minute}`
    }
    if (hour < 10){
        hour = `0${hour}`
    }

    timer.innerHTML = `${hour}:${minute}:${second}`
}