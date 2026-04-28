let num 
let soma = 0
do {
    num = parseInt(prompt(`digite um valor`))
    soma+=num
} while (num!=0);
console.log(`resultado ficou: ${soma}`)