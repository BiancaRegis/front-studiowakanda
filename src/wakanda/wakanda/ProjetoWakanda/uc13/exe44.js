let compra = []
let produto
let preco
let qtde 
let total = 0

for (let index = 0; index < 3; index++) {
    produto = prompt(`digite o nome do produto`)
    preco = parseFloat(prompt(`digite o preço`))
    qtde = parseInt(prompt(`digite a quantidade`))


 carrinho = {
    produto: produto,
    preco: preco,
    qtde: qtde 

 }
compra.push(carrinho) 
}

for (let index = 0; index < compra.length; index++) {
    console.log(`
        produto: ${compra[index].produto}
        preço: ${compra[index].preco}
        quatidade: ${compra[index].qtde}
        `)
    
}

for (let index = 0; index < compra.length; index++) {
     let subTotal=compra[index].preco*compra[index].qtde
    total+=subTotal

}
console.log (`TOTAL: R$ ${total} `)