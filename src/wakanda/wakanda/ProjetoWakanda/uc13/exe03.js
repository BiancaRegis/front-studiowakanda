let nome = prompt (`digite seu nome:`)
let salario = parseFloat (prompt(`digite seu salário fixo:`))
let vendas = parseInt (prompt(`digite o total de vendas:`))
let comissao = vendas*0.15
let total = comissao+salario

console.log(`
    ${nome}, seu salário fixo é de R$ ${salario}, salário com comissão ficou R$ ${total}`)