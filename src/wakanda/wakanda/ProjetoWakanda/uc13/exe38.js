let pontuacao = 999

while (true) {
    let qtde = 0
    let numeroMax
    let limite

    let nivel = parseInt(prompt(`
        JOGO DE ADIVINHAÇÃO
        1 - FÁCIL (0 A 50 NÚMEROS | 20 TENTATIVAS)
        2 - MÉDIO (0 A 100 NÚMEROS | 15 TENTATIVAS)
        3 - DIFÍCIL (0 A 500 NÚMEROS | 10 TENTATIVAS)
    `))

    switch (nivel) {
        case 1:
            numeroMax = 50
            limite = 20
            break;
        case 2:
            numeroMax = 100
            limite = 15
            break;
        case 3:
            numeroMax = 500
            limite = 10
            break;
    }

    if (numeroMax != 50 && numeroMax != 100 && numeroMax != 500) {
        alert(`escolha de nível inválida`)
        break;
    }

    let numPc = Math.floor(Math.random() * (numeroMax + 1))

    // Loop (onde ficam as tentativas)
    while (true) {
        if (qtde >= limite) {
            alert(`
GAME OVER
VOCÊ ATINGIU O NÚMERO DE TENTATIVAS
N° CORRETO: ${numPc}
            `)
            break;
        }

        let numJd = parseInt(prompt(`
TENTATIVA: ${qtde + 1}
LIMITE: ${limite}
DIGITE UM NÚMERO DE 0 A ${numeroMax}
        `))

        if (numJd < 0 || numJd > numeroMax) {
            alert(`número inválido, digite novamente`)
            continue // não conta a tentativa
        }

        qtde++

        if (numJd === numPc) {
            alert(`
PARABÉNS!!! VOCÊ ACERTOU
TENTATIVAS: ${qtde}
            `)
            if (qtde < pontuacao) {
                pontuacao = qtde
                alert(`NOVO RECORDE`)
            }
            break;

        } else if ((numPc - numJd) <= 5 && (numPc - numJd) >= -5) {
            alert(`muito perto!`)

        } else if (numPc > numJd) {
            alert(`o número é maior`)

        } else {
            alert(`o número é menor`)
        }
    } // Fim do loop 

    // jogar novamente
    let jogarDnv = prompt(`
deseja jogar novamente?
1 - SIM
2 - NÃO
    `)

    if (jogarDnv == '1') {
        console.clear()
        continue;
    } else {
        alert(`fim do jogo`)
        if (pontuacao != 999) {
            alert(`
MELHOR RESULTADO: ${pontuacao}
            `)
        } else {
            alert(`você não venceu nenhuma partida`)
        }
        break;
    }
}

//MUDEI PARA ALERT PORQUE COM CONSOLE.LOG PORQUE NÃO TAVA FUNCIONANDO