//2 - Faça um programa que leia um nome de usuário e a sua 
//senha e não aceite a senha igual ao nome do usuário, 
//mostrando uma mensagem de erro e voltando a pedir as informações. 

function validLogin() {

    let usuario = window.prompt (`
        Usuario:
    `)

    let senha = window.prompt(`
        Senha:
    `)

    if (senha == usuario) {
        alert ('senha e usuario invalido')
        validLogin()
    } else {
        alert ('Login concluido')
        
    }

}
validLogin()