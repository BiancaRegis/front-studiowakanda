// //variáveis que possuem propriedades e valowes que definem suas características, deve ser declarado entre chaves {}. a diferença para um vetor é que o índice(chave) é definido manualmente com um nome.
// //EXEMPLO 1 
// //preenchimento manual do conteúdo

const convidado = {
    nome: `Pedrinho`,
    idade: 10,
    presente: `quebra-cabeça`,
    aluno: true
}

// //impressão do objeto
// //a chave definida serve como referência para listar o conteúdo 

console.log(`${convidado.nome} tem ${convidado.idade} anos e trouxe um ${convidado.presente} de presente!`)

// //EXEMPLO 2
// //neste formato de criação utilizamos variáveis para receber o conteúdo
// //criação das variáveis que serão usadas no objeto
let pessoa = prompt(`digite seu nome`)
let idade = parseInt(prompt(`digite sua idade`))
let presente = prompt(`qual o seu presente?`)
// //CRIAÇÃO DE OBJETO

const convidado2 = {
    nome: pessoa,
    idade: idade,
    presente: presente
}
//impressão de objeto

console.log(`${convidado2.nome} tem ${convidado2.idade} anos e trouxe um ${convidado2.presente} de presente!`)

//EXEMPLO 3
//para poder agrupar vários objetos utilizamos um vetor
// onde cada posição do vetor [0,1,2] irá armazenar um objeto
//criação do vetor

let festa = []
//leitura do vetor

for (let index = 0; index < 3; index++) {
    //CRIAÇÃO DAS VARIÁVEIS QUE SERÃO USADAS NO OBJETO
    const nomes=prompt(`digite seu nome`)
    const idades=parseInt(prompt(`digite sua idade`))
    const presentes=prompt(`qual o seu presente`)


//criação do objeto

const convidados = {
    nomes: nomes,
    idades: idades,
    presentes: presentes 
}
//PUSH. INCLUSÃO DO OBJETO NA ULTIMA POSIÇÃO DO VETOR
festa.push(convidados)
}
//fim do for

//impressão do vetor passando como referência da posição e chave do objeto
for (let index = 0; index < festa.length; index++) {
    console.log(`${festa[index].nomes} tem ${festa[index].idades} anos e trouxe um ${festa[index].presentes} de presente!`)
}

//forma manual de acesso de controle
console.log(festa[1].presentes)
