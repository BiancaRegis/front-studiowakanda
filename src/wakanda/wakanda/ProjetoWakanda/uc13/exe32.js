let nota = parseInt(prompt(`digite nota do aluno(a)`))
while (nota<0||nota>10) {
    nota = parseInt (prompt(`ERRO, valor apenas entre 0 e 10
        digite nota do aluno(a)`))
}
   if (nota>=7) {
        console.log(`aluno(a) APROVADO`)
    } else {
        console.log(`aluno(a) REPROVADO`)
    }
