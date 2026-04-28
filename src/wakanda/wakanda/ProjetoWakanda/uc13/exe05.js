let valorProduto = parseFloat (prompt(`digite o valor do produto:`))
let porcentagem = parseInt (prompt(`digite a porcentagem de acréscimo`))

let soma = porcentagem/100*valorProduto
let total = valorProduto+soma 

console.log(`Valor do Produto: ${valorProduto}
    Valor com acréscimo: ${total}`)
