var numero = parseFloat(prompt("Digite um número!"))

if(numero>0){
    alert("O número "+numero+" é positivo.")
}else if(numero<0){
    alert("O número "+numero+" é negativo.")
}else if(numero===0){
    alert("O número "+numero+" é neutro.")
}else{
    alert("O valor digitado é inválido.")
}