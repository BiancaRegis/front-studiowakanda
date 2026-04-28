let maiorV = 0
let menorV = 0
let soma = 0
let qtde = 0
// numero negativo não pode afetar nos calculos

while (true) {
   let num = parseInt(prompt(`
     digite um valor inteiro 
    (negativo se quiser sair)`))

   if (num<0) {
    break;
   } 
   soma+=num
   qtde++ 
   if (qtde==1) {
   maiorV = num  
   menorV = num
}
   if (num>maiorV) {
   maiorV=num
   }
   if (num<menorV) {
    menorV=num
   }
}
if (qtde>0) {
let media = soma/qtde 
console.log(`
    Maior valor informado: ${maiorV}
    Menor valor informado: ${menorV}
    Média dos valores: ${media}
    Soma dos valores: ${soma}
    `)
} else {
console.log(`nenhum valor digitado`)
}



