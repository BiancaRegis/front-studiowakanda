let num = parseInt(prompt(`digite a quantidade de pessoas votantes`))
jose = 0
maria = 0
marcia = 0
nulo = 0
for (let index = 0; index < num; index++) {
    let voto = parseInt(prompt(`***SISTEMA DE ELEIÇÃO***
PARA QUEM VAI SEU VOTO?
        DIGITE: 
     11 PARA JOSÉ
     22 PARA MARIA
     33 PARA MARCIA
     0 PARA ANULAR`)) 

   switch (voto) {
    case 11:
    jose+=1  
        break;
    case 22:
    maria+=1
        break;
    case 33:
    marcia+=1
        break;             
    default:
     nulo+=1   
        break;
}    
console.clear
}
console.log(`TOTAL DE VOTOS:
    JOSÉ recebeu ${jose} 
    MARIA recebeu ${maria}
    MARCIA recebeu ${marcia}
    VOTOS ANULADOS ${nulo} 
    `)
console.clear   
if (jose>maria&&jose>marcia) {
   console.log(`JOSÉ VENCEU`) 
} else if (maria>jose&&maria>marcia) {
    console.log(`MARIA VENCEU`)
} else if (marcia>jose&&marcia>maria) {
    console.log(`MARCIA VENCEU`)
} else {
    console.log(`EMPATE`)
} 