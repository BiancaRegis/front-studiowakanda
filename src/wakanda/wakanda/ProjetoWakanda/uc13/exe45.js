let soma = function (a, b) {
    return a + b
}

let sub = function (a, b) {
    return a - b
}

let multi = function (a, b) {
    return a * b
}

let divisao = function (a, b) {
    if (b == 0) {
        return `erro um número não pode ser dividido por 0`
    } else {
        return a / b
    }
}
function mostrarResultado(resultado) {
    console.log(`${resultado}`)
}
let v1 = parseInt(prompt(`digite um valor`))
let v2 = parseInt(prompt(`digite outro valor`))

let pergunta = parseInt(prompt(`
    qual operação você gostaria de ver?
    1 - SOMA  |  2 - SUBTRAÇÃO
    3 - MULTIPLICAÇÃO  | 4 - DIVISÃO
    `))
let resultado

switch (pergunta) {
    case 1:
        resultado = soma(v1, v2)
        break;
    case 2:
        resultado = sub(v1, v2)
        break;
    case 3:
        resultado = multi(v1, v2)
        break;
    case 4:
        resultado = divisao(v1, v2)
        break;
    default:
        resultado = `operação inválida`
        break;
}
mostrarResultado(resultado)



//**************************************VERSÃO DO SANDRO***********************************
// function resultado(result) {
//     console.log(`o resultado é: ${result}`)
// }
// function soma(a, b, c) {
//     c(a + b)
// }
// function subtracao(a, b, c) {
//     c(a - b)
// }
// function multiplicacao(a, b, c) {
//     c(a * b)
// }
// function divisao(a, b, c) {
//     if (b == 0) {
//         c(`erro divisão por zero`)
//     } else {
//         c(a / b)
//     }
// }
// let v1 = parseInt(prompt(`digite um valor`))
// let v2 = parseInt(prompt(`digite outro valor`))

// let op = parseInt(prompt(`
//     CALCULADORA DO SANDRO
//     ESCOLHA SUA OPERAÇÃO MATEMÁTICA:
//     1 - SOMA
//     2 - SUBTRAÇÃO
//     3 - MULTIPLICAÇÃO
//     4 - DIVISÃO
//     `))

// switch (op) {
//     case 1:
//         soma(v1, v2, resultado)
//         break;
//     case 2:
//         subtracao(v1, v2, resultado)
//         break;
//     case 3:
//         multiplicacao(v1, v2, resultado)
//         break;
//     case 4:
//         divisao(v1, v2, resultado)
//         break;
//     default:
//         console.log(`operação inválida`)
//         break;
// }
// resultado()

//CALLBACK = quando uma função chama outra função é != de quando uma função usa outra função