function calcularIMC() {
    //Obtem os valores dos campos de entrada
    let alturaInput = document.getElementById("altura");
    let pesoInput = document.getElementById("peso");
  
    //Verifica se os campos foram encontrados e se os valores são válidos
    if (!alturaInput || !pesoInput || isNaN(parseFloat(alturaInput.value.replace(",","."))) || isNaN(parseFloat(pesoInput.value.replace(",",".")))) {
      document.getElementById("resultado").innerHTML = "Por favor, preencha os campos com números válidos.";
      return;
    }
  
    //Converte os valores para números de ponto flutuante (float)
    let altura = parseFloat(alturaInput.value.replace(",","."));
    let peso = parseFloat(pesoInput.value.replace(",","."));
  
    //Calcula o IMC
    let imc = peso / (altura * altura);
    if(imc>=30){
      document.getElementById("nivel").innerHTML = "OBESIDADE";
    }else if(imc>=25){
      document.getElementById("nivel").innerHTML = "SOBRE-PESO";
    }else if(imc>=18){
      document.getElementById("nivel").innerHTML = "NORMAL";
    }else if(imc<18){
      document.getElementById("nivel").innerHTML = "ABAIXO DO PESO";
    }
  
    //Exibe o resultado na div de resultado
    document.getElementById("resultado").innerHTML = "O seu IMC é: " + imc.toFixed(2);
  }
