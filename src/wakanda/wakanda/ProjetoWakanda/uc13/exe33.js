let qtde = 0
let soma = 0 
let obg = 0 
let opc = 0 
let noPode = 0

while (true) {
    let idade = parseInt (prompt(`digite idade`))
    qtde++
    soma+=idade 
    if (idade>=18&&idade<=70) {
     // OBRIGATORIO A VOTAR
    obg++
    } 
     if (idade==16||idade==17||idade>70) {
        // OPCIONAL
    opc++
    } 
      if (idade<16) {
        //PROIBIDO VOTAR
    noPode++
      }
      let resp = parseInt(prompt(`GOSTARIA DE SAIR?
        1 - SIM
        2 - NÃO 
        `))
      if (resp==1) {
        break; 
      }
}
let media = soma/qtde
console.log(`A) total de idades digitadas: ${qtde}`)
console.log(`B) média entre as idades digitadas: ${media}`)
console.log(`C) total de pessoas obrigadas a votar: ${obg}`)
console.log(`D) total de pessoas que já tem idade para votar: ${opc}`)
console.log(`E) total de pessoas que não podem votar: ${noPode}`)