//let num = [5, 4, 3 ,2 ,1] 
//num.push("igors")//adiciona um elemento no final da lista 
//console.log(`Nosso vetor é o ${num}`)
//num.length//medir o comprimento do vetor
//num.sort()//coloca os elemntos em ordem crescente 

let valores = [7, 3, 9, 18, 4]
let pos = valores.indexOf(5)
if (pos == -1){
    console.log(`[ERRO] O VALOR NÃO EXISTE NA LISTA`)
} else {
    console.log(`O item selecionado se encontra na posição ${pos}`)
}
