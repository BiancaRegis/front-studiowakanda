let idade = []
let nome = []
for (let index = 0; index < 5; index++) {
    idade[index] = parseInt(prompt(`digite idade n°${index}`));
    nome[index] = prompt(`digite o nome n°${index}`)
}
let posicao = parseInt(prompt(`qual a posição gostaria de ver (0 a 4)?`))

console.log(`
    a idade na posição ${posicao} é ${idade[posicao]}
    o nome na posição ${posicao} é ${nome[posicao]}
    `)