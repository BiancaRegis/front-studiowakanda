let nota = []
for (let index = 0; index < 4; index++) {
    nota[index] = parseFloat(prompt(`digite a nota do aluno(a)`));
    if (nota[index]<0||nota[index]>10) {
        alert(`ERRO, recarregue a página e digite o número entre 0 e 10`)
    }
}
let soma = 0
let media = 0
for (let index = 0; index < nota.length; index++) {
    soma += nota[index]
}

media = soma / nota.length

if (media >= 7) {
    console.log(`Sua média foi ${media} Você está Aprovado!`)
} else if (media < 5) {
    console.log(`Sua média foi ${media} Você está Reprovado!`)
} else {
    console.log(`Sua média foi ${media} Você está de Recuperação!`)
}