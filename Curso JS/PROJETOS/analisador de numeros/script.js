let num = document.getElementById("fnum")
let lista = document.getElementById("flista")
let res = document.getElementById("res")
let valores = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inList(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


function adicionar(){
    if(isNumber(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
        
    } else {
        window.alert("[ERRO] valor inválido ou já inserido na lista")
    }
    num.value = ""
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert("Adicione valores")
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if(valores[pos]>maior)
            maior = valores[pos]
            if (valores[pos]<menor)
            menor = valores[pos]
            media = soma/tot
        }

        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos <strong>${tot}<strong> elementos cadastrados.</p>`
        res.innerHTML += `<p>O maior valor é <strong>${maior}<strong>.</p>`
        res.innerHTML += `<p>O menor valor é <strong>${menor}<strong>.</p>`
        res.innerHTML += `<p>A soma dos valores é  <strong>${soma}<strong>.</p>`
        res.innerHTML += `<p>A média dos valores é  <strong>${media.toFixed(2)}<strong>.</p>`
    }

}