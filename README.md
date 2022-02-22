# DESAFIO-DE-PROGRAMACAO-ACADEMIA-CAPGEMINI
Repositório criado para hospedar as questões do desafio. 

## Instruções de como rodar as aplicaçãos e as tecnologias utilizadas:

### Primeira opção seria rodar a aplicação pelo console do navegador:

- Criar um arquivo chamado index.html
- Colocar a seguinte estrutura dentro do index.html:
  ```
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Questão 1</title>
  </head>
  <body>

      <script>
      </script>
  </body>
  </html>
  ```
 - Colocar o trecho de código da questão dentro do script: 
 
      ```
      <script>
     /* Questão - 1 */
      
      function exibeEscada(numero) { // função recebe um numero como parâmetro .
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
      </script>
      ```
  
  - Clicar com o botão direito no index.html e abrir com o navegador Google Chrome
  - Clicar com o botão direito na pagina e ir em Inspecionar:
  
   ![image](https://user-images.githubusercontent.com/56409084/155053725-8b0326f4-7d6b-494f-81b6-a59c6018686f.png)
   
  - Após isso, basta clicar no console que ira aparecer o resultado:
     
    ![image](https://user-images.githubusercontent.com/56409084/155053892-88d54b92-c151-4ac2-b8ff-5b6577072b1d.png)



### Segunda opção seria rodar a aplicação pelo editor de texto Visual Studio Code:

link de um tutorial no youtube de como configurar o Visual Studio Code para rodar aplicações em JavaScript: 

https://www.youtube.com/watch?v=efWrIyjmCXg&ab_channel=DevMode

  
   

