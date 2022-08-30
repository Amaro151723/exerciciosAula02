//1 - Faça um programa que peça uma nota, 
//entre zero e dez. Mostre uma mensagem caso o valor seja inválido 
//e continue pedindo até que o usuário informe um valor válido. 

function validNuber() {

    let numero = window.prompt (`Digite um numero entre 0 e 10:`)

    if (numero <= 10 && numero >= 0) {
        alert ('Valor válido')
    } else {
        alert ('Valor inválido')
        validNuber()
    }


}
validNuber()

