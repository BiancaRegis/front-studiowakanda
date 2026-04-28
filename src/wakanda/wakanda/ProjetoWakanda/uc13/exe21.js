console.log (`LANCHONETE NETE  |  FAÇA SEU PEDIDO!`)
let bebida = (prompt(
`   ESCOLHA SUA BEBIDA, DIGITE:
    1 - GUARANÁ
    2 - VINHO
    3 - ÁGUA`))
let lanche = prompt(`
    ESCOLHA SEU LANCHE, DIGITE:
    1 - BAURU
    2 - X GALINHA
    3 - PIZZA`)

    if (bebida==1 && lanche==1 || bebida==3 && lanche==2 || bebida==1 && lanche==3 )  {
       console.log(`NÃO PODE SER ATENDIDO`) 
    } else {
       console.log(`PODE SER ATENDIDO`) 
    }
    