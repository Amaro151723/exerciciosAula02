//3 - Faça um programa que leia e valide as seguintes informações:
//- Nome: maior que 3 caracteres;
// - Idade: entre 0 e 150;
// - Salário: maior que zero;
// - Sexo: 'f' ou 'm';
// - Estado Civil: 's', 'c', 'v', 'd';
//Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length

function validarNome() {

    let nome = window.prompt (`Nome:`)
    let idade = window.prompt (`Idade:`)
    let salario = window.prompt (`Salário:`)
    let sexo = window.prompt (`Sexo:`)
    let EstadoCivil = window.prompt (`Estado Civil:`)
    
    if (nome.length <= 3) {
        alert ('nome  invalido!')
        validarNome()
    } else {
        alert ('Nome Válido!')
        
    }

    if (idade >= 0 && idade <= 150) {
        alert ('Idade válida!')
        
    } else {
        alert ('Idade inválida!')
        validarIdade()
        
    }

    if (salario > 0 && salario >= 12001) {
        alert ('Salario válido!')       
    } else {
        alert ('Salário Inválido!')
        validarSalario()      
    }
    if (sexo == 'F' ) {
        alert ('Feminino!')
        validarSexo ()       
    } 
    else if (sexo == 'M' ) {
        alert ('Masculino!')
        validarSexo()
    }
    if (EstadoCivil == S) {
        alert ('Solteiro!')
        validarEstadoCivil() 
    } 
    
    if (EstadoCivil == C) {
        alert ('Casado!')
        validarEstadoCivil()
    }
    
    if (EstadoCivil == V) {
        alert ('Viuvo!') 
        validarEstadoCivil()
    }
    
    if (EstadoCivil == D) {
        alert ('Divorciado!')
        validarEstadoCivil() 
    }    

}
validarNome()
validarSexo()
validarEstadoCivil()