const buttonCalc = document.getElementById("buttonCalc")
const buttonClean = document.getElementById("buttonClean")
let resBox = document.getElementById("resBox")
let nome = document.getElementById("nome");
let massa = document.getElementById("massa");
let altura = document.getElementById("altura");


buttonCalc.addEventListener("click", calcular)
buttonClean.addEventListener("click", limpar)

function calcular(){
    if (nome.value == "" || massa.value == "" || altura.value == ""){
        alert("[ERRO] PREECHA TODOS OS CAMPOS ")
        
    } else {
        let nomeform = nome.value.toUpperCase().split(" ")[0];
        let nummassa = Number(massa.value);
        let numaltura = Number(altura.value);
        let imc = nummassa/ (numaltura**2)
        
        buttonCalc.style.display = "none";
        buttonClean.style.display = "flex";

        resBox.style.display = "flex";
        resBox.innerHTML += `<p>Olá, ${nomeform} ! O seu IMC é de ${imc.toFixed(2)}</p> `
        
         if (imc < 19.9){
            resBox.innerHTML += `<p>[ATENÇÃO] VOCÊ ESTÁ ABAIXO DO PESO</p>`
         } else if (imc < 24.9) {
            resBox.innerHTML += `<p>VOCÊ ESTÁ COM O PESO IDEAL</p>`
         } else if (imc < 28.9){
            resBox.innerHTML += `VOCÊ ESTÁ COM EXCESSO DE PESO`
         } else if (imc < 34.9){
            resBox.innerHTML += `[ATENÇÃO] VOCÊ ESTÁ COM OBESIDADE`
         } else {
            resBox.innerHTML += `[ATENÇÃO] VOCÊ ESTÁ COM OBESIDADE MÓRBIDA`
         }
    }
   
}

function limpar(){
   window.location.href = "index.html"

}