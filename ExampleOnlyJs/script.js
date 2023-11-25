// Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores
// inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.


function sumIf(number) { // criando a função 'sumIf' e passando 'number' como parâmetro a ser recebido
    let sum = 0; // criando a variável 'sum' inicializada em 0, para receber os números divisíveis por 3 ou 5 
    let numbersArray = []; // criando um array para guardar os números selecionados dentro do for

    for (let i = 0; i < number; i++) { // criando um for, para rodar até que i seja menor que o número que o usuario passar
      if (i % 3 === 0 || i % 5 === 0) { // usando if para a lógica dos números divisíveis por 3 ou 5, usando % para pegar o resto da divisão, resto sempre será 0;
        sum += i; // auto-incrementando i a sum, ou seja, 0+3 = 3 então sum = 3 |  3+5 = 8 então sum = 8...
        numbersArray.push(i); // adicionando os números em um array, utilizando o método push
      }
    }
    return {sum, numbersArray}; // retorna o valor das variáveis 'sum' e 'numbersArray'
  }
  
  const number = 10; // número setado pelo usuario
  const result = sumIf(number); // rodando a função 'sumIf' e passando o parâmetro 'number' com um valor definido
  console.log("O somatório dos números divisíveis por 3 ou 5 menores que " + number + " é igual a " + result.sum); // método para mostrar o reultado da função sumIf de acordo com o número passado
  console.log("Os números são: " + result.numbersArray); // método para mostrar todos os números divisíveis por 3 ou 5 e que sejam inferiores ao número passado
  