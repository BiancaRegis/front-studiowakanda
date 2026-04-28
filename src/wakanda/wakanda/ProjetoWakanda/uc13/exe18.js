let nome = prompt (`digite nome do aluno (a)`)
let nota1 = parseFloat(prompt(`digite a 1° nota`))
let nota2 = parseFloat(prompt(`digite a 2° nota`))
let nota3 = parseFloat(prompt(`digite a 3° nota`))

let media = (nota1+nota2+nota3)/3
console.log(`o aluno(a) ${nome}, teve média de ${media}`)
if (media>=7) {
    console.log(`ALUNO(A) APROVADO`)
} else if (media<=2) {
    console.log(`ALUNO(A) REPROVADO`)
} else {
    console.log(`ALUNO(A) DE RECUPERAÇÃO`)
} 
    