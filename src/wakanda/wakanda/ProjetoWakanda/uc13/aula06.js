// // //CRIAÇÃO DE VETOR
// // // o índice é definido automaticamente começando no 0

// // let vetor=[]

// // let pokemon = [`pikachu`,`charmander`, `bulbassauro` ]
// // //IMPRESSÃO MANUAL NO CONSOLE CADA ITEM EM UMA LINHA 
// // console.log(pokemon[0])
// // console.log(pokemon[1])
// // console.log(pokemon[2])
// // //console.log(pokemon[3]) - errado
// // //IMPRESSÃO MANUAL DE TODOS OS ITENS NA MESMA LINHA
// // console.log(pokemon[0], pokemon[1], pokemon[2])

// // let nome = `bianca`
// // let valor = 100

// // console.log(valor.length)
// // console.log(nome.length)
// // console.log(nome[0])
// // console.log(pokemon.length)

// // //usando o for pra interagir com o vetor de forma automática (ao invés de colocar 3 console.log)
// // //IMPRESSÃO ATRAVÉS DE UM LAÇO DE REPETIÇÃO
// // for (let index = 0; index < pokemon.length; index++) {
// //     console.log(pokemon[index])
    
// // }

// // //vai ser comum em exercícios usar no mínimo 3 for, entrada - processamento - saída 

// let valores = [`sandro`,100,true,`senac`]
// //CRIAÇÃO DE UM VETOR DO TIPO MATRIZ COM VALORES ALEATÓRIOS
// //DENTRO DE UM VETOR EU POSSO COLOCAR OUTRO VETOR
// let timePokemon = [
//     [`pikachu`,`M`,1],
//     [`charmander`,`F`,3],
//     [`squirtle`,`M`,5]
// ]
// console.log(`o pokemon ${timePokemon[1][0]} é
// do sexo ${timePokemon[1][1]} e está no nível ${timePokemon[1][2]}`)

//DECLARAÇÃO DO VETOR E LEITURA ATRAVÉS DO PROMPT
let nome = []
for (let cont = 0; cont < 2; cont++) {
    nome[cont] = prompt(`digite nomes`);    
}
//IMPRESSÃO ATRAVÉS DE UM LAÇO DE REPETIÇÃO LINHA POR LINHA
for (let cont = 0; cont < nome.length; cont++) {
    console.log(nome[cont])
}

//FUNCIONALIDADES DE VETORES
//.push() adiciona item no final do array (vetor); .push é individual a não ser que sera colocado dentro de um while
nome.push(prompt(`insira um valor no fim`))
nome.push(`seuNome`)
console.log(nome)

// .indexOf() // vai no seu vetor e busca o conteúdo como uma pesquisa
let posicao=nome.indexOf(`matheus`)

console.log(`posição: ${posicao} valor: ${nome[posicao]}`)