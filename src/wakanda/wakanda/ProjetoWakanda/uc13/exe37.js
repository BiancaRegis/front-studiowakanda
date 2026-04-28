let qtde = 0
let numPc = Math.floor(Math.random() * 101)

while (true) {
    let numJd = parseInt(prompt(`digite um valor inteiro entre 0 e 100`))
    qtde++
    if (numJd < 0 || numJd > 100) {
        console.log(`número inválido, digite novamente`)
        continue
    }
    if (numPc > numJd) {
        console.log(`o número é maior`)
    } else if (numPc < numJd) {
        console.log(`o número é menor`)
    } else {
        console.log(`
            PARABÉNS!!!VOCÊ ACERTOU
            TENTATIVAS: ${qtde}
            `)

        let jogarDnv = prompt (`
    deseja jogar novamente?
    1 - SIM
    2 - NÃO
    `)
        if (jogarDnv == `1`) {
            console.clear()
            numPc = Math.floor(Math.random() * 101)
            qtde = 0
        } else {
            console.log(`fim do jogo`)
            break;
        }
    }
}

