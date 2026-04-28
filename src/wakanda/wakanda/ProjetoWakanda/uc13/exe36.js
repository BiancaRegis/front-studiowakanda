//Math - funções matemáticas
// Math.random() sorteia valores entre 0 e 1
//Math.floor arredonda
let jogador = 0
let computador = 0
let empate = 0
while (true) {
let escolhaUser
let escolhaPc
let numJd=parseInt(prompt(`
    JOKENPO
    ESCOLHA
    1 - PEDRA
    2 - PAPEL
    3 - TESOURA    
    `)) 
let numPc=Math.floor(Math.random()*3+1)

switch (numJd) {
    case 1: 
    escolhaUser = `PEDRA`
        break;
    case 2:
    escolhaUser = `PAPEL`    
        break;
    case 3:
    escolhaUser = `TESOURA`   
        break;

    default:
        
        break;
}
switch (numPc) {
    case 1:
    escolhaPc = `PEDRA`   
        break;
    case 2:
    escolhaPc = `PAPEL`    
        break;
    case 3:
    escolhaPc = `TESOURA`    
        break;

    default:
        break;
}

console.log(`
    USUÁRIO: ${escolhaUser}
    COMPUTADOR: ${escolhaPc}
    `)
if (numJd==numPc) {
    console.log(`EMPATE!!!`)
    empate++
} else if (numJd==2&&numPc==1||numJd==3&&numPc==2||numJd==1&&numPc==3) {
    console.log(`USUÁRIO VENCEU!!!`)
    jogador++
} else {
    console.log(`COMPUTADOR VENCEU!!!`)
    computador++
} 
 let escolha = prompt (`Deseja jogar novamente? S - Sim ou N - Não`)
 if (escolha=='N') {
    break;
 }  
} 
console.log(`
    PLACAR FINAL:
    COMPUTADOR GANHOU ${computador} x 
    USUÁRIO GANHOU: ${jogador} x 
    EMPATE: ${empate} x
    `)