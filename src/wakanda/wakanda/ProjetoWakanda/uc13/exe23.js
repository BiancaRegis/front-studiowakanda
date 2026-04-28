let valor1 = parseInt (prompt(`digite valor`))
let valor2 = parseInt(prompt(`digite outro valor`))
let calculadora = parseInt(prompt(`escolha a operação:
    1 - SOMA
    2 - SUBTRAÇÃO
    3 - MULTIPLICAÇÃO
    4 - DIVISÃO
    `))
    switch (calculadora) {
        case 1:
            let soma = valor1+valor2
            console.log(`${valor1} + ${valor2} = ${soma} `)
            break;
        case 2:
            let sub = valor1-valor2
            console.log(`${valor1} - ${valor2} = ${sub}`) 
            break;   
        case 3:
            let multi = valor1*valor2
            console.log(`${valor1} x ${valor2} = ${multi}`)
            break;
        case 4:
           if (valor2==0) {
            console.log(`ERRO, um número não pode ser dividor por 0`)
           } else {
            let div = valor1/valor2
            console.log(`${valor1} / ${valor2} = ${div}`)
           }   
            break;

        default:
            console.log(`operação inválida!!`)
            break;
    }