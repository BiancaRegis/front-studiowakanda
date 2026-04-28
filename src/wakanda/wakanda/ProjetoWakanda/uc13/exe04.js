let nome = prompt(`digite seu nome nome:`)
let nota = parseFloat (prompt(`digite a 1° nota da sua prova`))
let nota2 = parseFloat (prompt(`digite a 2° nota da sua prova`))
let nota3 = parseFloat (prompt(`digite a 3° nota da sua prova`))

let totalMedia = (nota+nota2+nota3)/3

console.log (`O(a) aluno(a) ${nome}
Teve média de ${totalMedia}`)

