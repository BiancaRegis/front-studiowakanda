console.log(`Central de Suporte`)
let cat = parseInt(prompt(`SELECIONE A CATEGORIA
    1 - INTERNET
    2 - SOFTWARE
    3 - HARDWARE
    4 - CONTA`))
let resp
switch (cat) {
    case 1:
        resp = `Verifique cabos e o roteador/modem; 
        reinicie os equipamentos; 
        teste em outro dispositivo; 
        rode um teste de conexão. 
        Se persistir, abrir chamado para a equipe de Rede.`
        break;
    case 2:
        resp = `Coletar mensagem de erro, 
        versão do sistema e do app; 
        tentar fechar/abrir, 
        limpar cache ou reinstalar. 
        Se for aplicativo corporativo, encaminhar para a equipe de Sistemas`
        break;    
    case 3:
        resp = `Checar energia e cabos; 
        testar periféricos em outra máquina/porta; 
        executar diagnóstico básico. 
        Se necessário, abrir chamado para manutenção presencial.`
        break;
    case 4:
        resp = `Validar identidade do usuário; 
        orientar reset de senha/2FA via SSO; 
        verificar bloqueios de conta e política de senhas; 
        desbloquear se aplicável.`
        break; 

    default:
        `Categoria inválida.`
        break;
        
}
console.log(`
    ATENDIMENTO PADRÃO:
    ${resp}`)

if (resp!=`Categoria inválida`) {
    let urge = parseInt(prompt(`É URGENTE?
    1 - SIM
    2 - NÃO
    `)) 
    let impac = parseInt(prompt(`QUAL O IMPACTO?
    1 - INDIVIDUAL
    2 - SETOR
    3 - EMPRESA
    `)) 
  if (urge==1||impac==3) {
    console.log(`⚠️ Escalonar imediatamente`)
  }  
  if (cat==1&&impac!=1) {
    console.log(`Possível acidente de rede - abrir status público.`)
  }
}
console.log(`FIM DO ATENDIMENTO`)


  
 
    
