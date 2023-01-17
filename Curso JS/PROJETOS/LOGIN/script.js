function start(){
    var log = window.document.getElementById("txtlog")
    var sen = window.document.getElementById("txtsen")
    if(log.value == "" || log.sen == ""){
        window.alert("[ERRO] VERIFIQUE OS DADOS")
    } else if (log.value == "login" && sen.value == "senha"){
        window.alert('FUNFO')
        location.href = "home1.html";
    } else{
        window.alert('[ERRO] VERIFIQUE OS DADOS')
    }
}

function register(){
    window.alert("ESTAMOS EM MANUTENÇÃO TENTE MAIS TARDE")
    //location.href = "register.html";
   //manda pro register
}

function analisar(){
    var txtempre1 = window.document.getElementById("empre1")
    var txttempo1 = window.document.getElementById("tempo1")
    var res = window.document.getElementById("res")
    var empre1 = Number(txtempre1.value)
    var tempo1 = Number(txttempo1.value)
    res.innerHTML= `<p>Você quer emprestar <strong>R$${empre1}<strong></p>`
    res.innerHTML+= `<p>Você quer pagar em <strong>${tempo1} meses<strong></p>`
    
        if(tempo1 <= 3){
            var total1 = 1.03*empre1
            var juros1 = 0.03*empre1
            var mensal1 = total1/tempo1
            res.innerHTML+= `<p>Seu plano será a <strong>JUROS SIMPLES 3% AO MÊS<strong></p>`
            res.innerHTML+= `<p>Você pasgará mensalmente um valor de <strong>R$${mensal1.toFixed(2)}<strong>></p>`
            res.innerHTML+= `<p>Pagando um total de R$${total1.toFixed(2)}<strong><strong></p>`
            res.innerHTML+= `<p>Pagando <strong>R$${juros1.toFixed(2)}<strong> de juros</p>`
        } else{
            var total1 = empre1*1.03**tempo1
            var juros1 = total1-empre1
            var mensal1 = total1/tempo1
            res.innerHTML+= `<p>Seu plano será a <strong>JUROS COMPOSTO 3% AO MÊS<strong></p>`
            res.innerHTML+= `<p>Você pagará mensalmente um valor de <strong>R$${mensal1.toFixed(2)}<strong></p>`
            res.innerHTML+= `<p>Pagando um total de R$${total1.toFixed(2)}<strong><strong></p>`
            res.innerHTML+= `<p>Pagando <strong>R$${juros1.toFixed(2)}<strong> de juros</p>`
        }

    }

    function voltar(){
        location.href = "home.html";
    }
 
