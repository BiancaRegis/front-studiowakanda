let pontosPorHora
let horas = parseInt(prompt(`digite a quantidade de horas da atividade física no mês`))
while (horas<0) {
    horas = parseInt(prompt(`
        VALOR INVÁLIDO!!! DIGITE NOVAMENTE HORAS POSITIVAS
        `))
}
if (horas<=10) {
    pontosPorHora = 2
} else if (horas>20) {
    pontosPorHora = 10
} else {
    pontosPorHora = 5
} 

let pontos = horas*pontosPorHora
if (horas>=30) {
    pontos = pontos+100
}
let dinheiro = pontos*0.05


console.log(`
    TOTAL DE HORAS: ${horas}
    PONTOS POR HORA: ${pontosPorHora}
    PONTOS TOTAIS: ${pontos}
    VALOR EM R$ ${dinheiro}
    `)

  