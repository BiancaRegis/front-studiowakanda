// //************ FUNÇÕES ***********
// // CRIA FUNÇÃO ANTES E DEPOIS USA
// // 1° tipo
// //como abrir uma função
// function dizerOla () {
//     console.log(`OLÁ MUNDO`)
// }
// // parametros são coisas que eu preciso para executar uma função
// // ao criar é preciso chamar para usar a função

// dizerOla

// function perguntarNome() {
//   let x = prompt (`qual o seu nome`)
//   return x  
// }

// let nome = perguntarNome()
// console.log(nome)

/////////////////////////////////

//EXEMPLO DE UM FUNÇÃO SIMPLES
// function mensagem() {
//     alert (`ola mundo`)
// }
// mensagem()//chamando função

/////////////////////////////////////

//função com parametros
// function mensagemNome(x,a) {
//     alert (`bem vindo(a) ${x} ao ${a}`)
// }
// mensagemNome(`sandro`,`senac`)

//**ordem que eu envio é a ordem que recebe *//

//////////////////////////////////////

//EXEMPLO COM PARAMETROS
// variáveis criadas dentro de uma função apenas podem ser utilizadas dentro dela.
//forma manual
// function soma(a, b) {
//     let resultado=a+b
//     console.log(`o resultado é: ${resultado}`)
// }

// soma(10,20) //chamada da função 

//////////////////////////////////////

//EXEMPLO COM PARAMETROS E COM RETORNO 
// O RETURN SERVE PARA RETORNAR UM VALOR PARA QUEM CHAMOU A FUNÇÃO

// function somar(a, b) {
//     let valor=a+b
//     return valor 
// }

// let v1 = parseInt(prompt(`digite um valor `))
// let v2 = parseInt(prompt(`digite um valor `))
// let total = somar(v1, v2)
// console.log(`a soma ${v1} e ${v2} é ${total}`)
// console.log(somar(v1, v2))

///////////////////////////////////////

//***** 2 - Função Anônima *****/
//funções que representam expressões
// uma variável pode armazenar uma função 
//**quase sempre vai ter retorno **/

let soma = function (a, b) {
    return a + b 
}

let v1 = parseInt(prompt(`digite um valor `))
let v2 = parseInt(prompt(`digite outro valor `))
console.log(soma(v1, v2))

let total = function () {
    parseInt(prompt())
}

//******ARROW FUNCTIONS ******/
// arrow functions é uma sintaxe mais concisa e moderna para escrever funções anônimas em javascript

const calc = (a, b) => (`soma: ${a+b}`) //forma anônima


// let soma = function (a,b) {
//     return `soma: ${a+b}`
// } //forma comum

calc(10,5)
