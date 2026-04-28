let preco = parseFloat(prompt(`digite o valor do produto`))
let codigo = parseInt(prompt(`digite o código de origem:
    1 - região norte com desconto de 5%
    2 - região sul com desconto de 15%
    3 - região sudeste com desconto de 7%
    4 - região nordeste com desconto de 12%
    5 - região centro-oeste com desconto de 20%
    `))
let desconto
   switch (codigo) {
    case 1:
        desconto = (5*preco)/100    
        break;
    case 2:
        desconto = (15*preco)/100
        break;
    case 3:
        desconto = (7*preco)/100
        break;
    case 4:
        desconto = (12*preco)/100
        break;
    case 5:
        desconto = (20*preco)/100
        break;            
    default:
        console.log(`PRODUTO IMPORTADO`)
        break;
   } 
console.log(`valor do desconto ficou: R$ ${desconto}`) 