function calcular(){
    var txtnome = document.getElementById("txtnome")
    var txtmassa = document.getElementById("txtmassa")
    var txtaltura = document.getElementById("txtaltura")
    var res = document.getElementById("res")
    if (txtnome.value == "" || txtmassa.value == ""|| txtaltura.value ==""){
        window.alert("[ERRO] VERIFIQUE AS RESPOSTAS")
    } else {
        var massa = Number(txtmassa.value)
        var altura = Number(txtaltura.value)
        var nome = txtnome.value
        var imc = massa/(altura*altura)
        res.innerHTML = `<p>O IMC é igual a <strong>${imc.toFixed()}<strong></p>`
        if (imc <= 18.5){
            document.body.style.background = "#FBFF1F"
            res.innerHTML += `<p>${nome}, você está Abaixo do Peso</p> `
        } else if( imc <= 24.9){
            document.body.style.background = "#1FFF28"
            res.innerHTML += `<p>${nome}, você está com o peso ideal</p>`
        } else if ( imc <= 29.9 ){
            document.body.style.background = "#FBFF1F"
            res.innerHTML += `<p>ATENÇÃO</p>`
            res.innerHTML += `<p>${nome}, você está com sobrepeso</p>`
        } else if ( imc <= 34.9 ){
            document.body.style.background = "#FF8B1F"
            res.innerHTML += `<p>ATENÇÃO</p>`
            res.innerHTML += `<p>${nome}, você está com Obesidade grau I</p> `
        } else if ( imc <= 39.9 ){
            document.body.style.background = "#FF4D00"
            res.innerHTML += `<p>ATENÇÃO</p>`
            res.innerHTML += `<p>${nome}, você está com Obesidade grau II</p> `
        } else {
            document.body.style.background = "#FF0000"
            res.innerHTML += `<p>ATENÇÃO</p>`
            res.innerHTML += `<p>${nome}, você está com Obesidade grau III</p> `
        }
    }
    
}