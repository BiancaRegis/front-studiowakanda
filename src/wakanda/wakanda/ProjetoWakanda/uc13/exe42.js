let time = []
let ponto = []
let campeao
let ultimo

for (let index = 0; index < 5; index++) {
     time[index] = prompt(`digite o nome do time n°${index + 1}`)
     ponto[index] = parseInt(prompt(`digite a pontuação do time n°${index + 1}`))
}

let maior = ponto[0]
let menor = ponto[0]

for (let index = 0; index < ponto.length; index++) {
     if (ponto[index] > maior) {
          maior = ponto[index]
          campeao = time[index]
     }

     if (ponto[index] < menor) {
          menor = ponto[index]
          ultimo = time[index]
     }
}

for (let index = 0; index < time.length; index++) {
     console.log(`
     times: ${time[index]} | ponto: ${ponto[index]}     
          `)
     
}
console.log(`
     Campeão: ${campeao}
     Total de pontos: ${maior}

     Último colocado: ${ultimo}
     Total de pontos: ${menor}
     `)