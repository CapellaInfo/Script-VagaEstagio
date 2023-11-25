function sumIf() {
    let numeroDigitado = parseInt(document.getElementById("nDigitado").value); // pegando o valor do input pelo id
    let sum = 0;

    for (let i = 0; i < numeroDigitado; i++) { // criando um for, para rodar até que i seja menor que o número que o usuario passar
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        } 
    }
    alert("A soma dos números é igual a " + sum); // prompt para mostrar o resultado
    return sum;
}