let livro = {
    titulo: `Jantar Secreto`,
    autor: `Raphael Montes`,
    ano: 2016,
    genero: `Suspense e Ficção`,
    paginas: 368
}

alert(`
    título do livro: ${livro.titulo}
    autor: ${livro.autor}
    ano de publicação: ${livro.ano}
    gênero: ${livro.genero}
    n° de páginas: ${livro.paginas}
    `)

let resp = parseInt(prompt(`
    o que você gostaria de atualizar do livro ${livro.livro}?
    1 - autor
    2 - ano de publicação
    3 - gênero
    4 - n° de páginas
    `))

switch (resp) {
    case 1:
        livro.autor = prompt(`digite o nome do autor`)
        break;
    case 2:
        livro.ano = parseInt(prompt(`digite o ano`))
        break;
    case 3:
        livro.genero = prompt(`digite o gênero`)
        break;
    case 4:
        livro.paginas = parseInt(prompt(`digite o n° de páginas`))
        break;
    default:
        break;
}
alert(`
    título do livro: ${livro.titulo}
    autor: ${livro.autor}
    ano de publicação: ${livro.ano}
    gênero: ${livro.genero}
    n° de páginas: ${livro.paginas}
    `)