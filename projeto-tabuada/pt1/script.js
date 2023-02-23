const start = document.getElementById("start")
let executado = false;
let inum
let num

function calcular(){
    if (!executado){
        let res = document.getElementById("res")
        inum = document.getElementById("inum")
        num = Number(inum.value)
        let i = 1
    
        while (i <= 10){
            res.innerHTML += `<p>${num} X ${i}</p>`
            i++
        }
        executado = true;
        
    
    }
}

function limpar(){
    window.location.href = "index.html"
    inum.focus();
}