function calcular(){
   let num = document.getElementById("txtnum")
   let tab = document.getElementById("tabuada")
   if (num.value == ""){
    window.alert("[ERRO]")
   } else{
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ``
    while(c <= 10){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
    }
    }        
   }
   