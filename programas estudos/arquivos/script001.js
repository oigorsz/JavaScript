//Juros Compostos

let tempoMes = 40
let capital = 100
let taxaMes = 0.01
let montante = capital*(1 + taxaMes)**tempoMes
console.log(`O Montante da operação é de ${montante.toFixed(2)}`)