let nome = []
for (let index = 0; index < 8; index++) {
    nome[index] = prompt(`digite nome n°${index + 1}`)
}
while (true) {
    let nomePesquisado = prompt(`
             qual nome gostaria de verificar?
             digite SAIR para parar 
                           `)
    if (nomePesquisado == `SAIR`||nomePesquisado == `sair`) {
        break;
    }
    let result = nome.indexOf(nomePesquisado)
    if (result == -1) {
        console.log(`nome não encontrado!`)
    } else {
        console.log(`
            nome ${nomePesquisado}
            posição: ${result + 1}
                   `)
    }
    
}