let estado = prompt (`digite a sigla do seu estado`)
switch (estado) {
    case 'MG':
        console.log(`Mineiro`)
        break;
    case 'SP':
        console.log(`Paulista`)
        break;
    case 'RJ':
        console.log(`Carioca`)
        break;
    case 'ES':
        console.log(`Capixaba`)
        break;

    default:
        console.log(`Não sei!!!!`)
        break;
}