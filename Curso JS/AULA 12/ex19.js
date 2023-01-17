var idade = 24
console.log(`Você tem ${idade} anos.`)
if(idade>18 && idade<65){
    console.log('VOTO OBRIGATÓRIO')
} else {
if(idade>= 16 && idade<18 || idade>65){
    console.log('VOTO FACULTATIVO')
} else{
    console.log('NÃO VOTA')
}
}
