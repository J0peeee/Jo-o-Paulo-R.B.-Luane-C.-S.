var idade = parseFloat(prompt("Digite sua idade para descobrir a sua faixa etária."))

if(idade>=0 && idade<=12){
    alert("Você é uma criança.")
}else if(idade>=13 && idade<=17){
    alert("Você é um adolescente.")
}else if(idade>=18 && idade<=64){
    alert("Você é uma adulto.")
}else if(idade>=64){
    alert("Você é um idoso.")
}else{
    alert("A idade digitada é inválida.")
}