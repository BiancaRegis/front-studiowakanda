let vetorA = []
let vetorB = []

for (let index = 0; index < 10; index++) {
    vetorA[index] = parseInt(prompt(`digite valores numéricos n° ${index}`))
    
}

for (let index = 0; index < 10; index++) {
    if (index % 2 == 0) {
        vetorB[index] = vetorA[index] * 5
    } else {
        vetorB[index] = vetorA [index] + 5
    }
}

for (let index = 0; index < 10; index++) {
    console.log(`
      NÚMERO DO ÍNDICE: ${index}
      A = ${vetorA[index]}
      B = ${vetorB[index ]}
        `)   
}