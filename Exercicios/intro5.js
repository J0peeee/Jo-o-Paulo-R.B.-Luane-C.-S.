let soma = 0;
let numero = Array();

do{
    numero = parseInt(prompt("Insira um número inteiro (Insira 0 para parar e realizar a soma)"));
    soma += numero;
}while (numero !== 0);
    alert("A soma de todos os números inseridos é: " +soma);