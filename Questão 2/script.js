/*  
Questão - 2

Débora digitou uma string aleatória no campo de senha, 
porém ela não tem certeza se é uma senha forte. Para ajudar Débora, 
construa um algoritmo que informe qual é o número mínimo de caracteres 
que devem ser adicionados para uma string qualquer ser considerada segura.

Exemplo:

Entrada: Ya3

Saída: 3

*/

function verificaSenha() {

    const senha = prompt("Digite a sua Senha"); 
    const tamanho = senha.length;
   
    let i = 0;

    if (tamanho <= 6) {   // Compara se o tamanho da string senha é menor ou = 6.
        let minCaracteres = 6 - tamanho; // minCaracteres recebe o resultado da subtração de 6 pelo tamanho da string senha. 
        console.log(minCaracteres); // Exibe em número a unidade de caracteres que falta para ter uma senha segura no console.
        alert(minCaracteres); // Exibe em número a unidade de caracteres que falta para ter uma senha segura no navegador.
    }
}

verificaSenha();

