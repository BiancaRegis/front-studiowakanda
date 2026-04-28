console.log(`*****BILHETERIA PARA O SHOW SANDROROCKPAULERA*****`)
let setor = parseInt(prompt(`SELECIONE O SETOR
    1 - PISTA
    2 - PREMIUM
    3 - CAMAROTE
    `))
 let preco   
switch (setor) {
    case 1:
       preco = 100 
        break;
    case 2:
       preco = 180 
        break;
    case 3:
       preco = 250 
        break;

    default:
        break;
}  

let idade = parseInt(prompt(`COLOQUE SUA IDADE:`))

let cart = parseInt(prompt(`POSSUI CARTEIRINHA?
    1- SIM
    2 - NÃO
    `))

let meia = parseInt(prompt(`DESEJA MEIA ENTRADA?
    1 - SIM
    2 - NÃO
    `))
let pagamento = parseInt(prompt(`SELECIONE FORMA DE PAGAMENTO:
        1 - PIX
        2 - CRÉDITO
        3 - DÉBITO
        `)) 
let cupom = prompt (`DIGITE CUPOM:
    `)  

 if (meia==1||idade<18||cart==1) {
     preco/=2
 } 
 if (cupom==`ROCK10`&&pagamento==1) {
   preco -=(preco*10/100)

 }
 if (setor==3&&idade<16) {
    console.log(`ENTRADA APENAS ACOMPANHADO DE RESPONSÁVEL`)
 }

    console.log(`TOTAL INGRESSO: R$ ${preco}`)
