
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

function exibeEscada(numero){
	alt = numero;
	base = numero;
    let i, j = 0;
 
	for ( i = 1; i <= alt; i++) {
		let msg = "";
		for ( j = 1; j <= base; j++) {
			if (j + i > base) msg += '*';
			else msg += ' ';
		}
		console.log(msg)
	}
}
 
exibeEscada(6);
