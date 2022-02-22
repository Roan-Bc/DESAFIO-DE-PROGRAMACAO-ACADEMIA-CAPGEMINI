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

function verificaSenha(string) {

    const senha = prompt("Digite a sua Senha");
    const tamanho = senha.length;
    let i = 0;

    if (tamanho <= 6) {
        let minCarac = 6 - tamanho;
        console.log(minCarac);
        alert(minCarac);
    }
}

verificaSenha();

