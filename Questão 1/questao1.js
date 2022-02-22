
/*
Questão - 1

Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o caractere * e espaços. 
A base e altura da escada devem ser iguais ao valor de n. A última linha não deve conter nenhum espaço.

Exemplo:

Entrada: n = 6

Saída:

     *
    **
   ***
  ****
 *****
******

*/

function exibeEscada(numero){ // função recebe um numero como parâmetro .
	alt = numero;  
	base = numero;
    let i, j = 0;
 
	for ( i = 1; i <= alt; i++) { // Primeiro for faz é responsável pela altura da escada.
		let msg = ""; // Varíavel que vai armazenar e exibir a altura e base da escada.
		for ( j = 1; j <= base; j++) { // Segundo for é responsável pela base da escada.
			if (j + i > base) msg += '*';
			else msg += ' ';
		}
		 console.log(msg) // Fim da função, exibe o resultado.
	}
}
 
exibeEscada(6);
