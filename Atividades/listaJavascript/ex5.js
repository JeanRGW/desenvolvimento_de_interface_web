const peso = parseFloat(prompt("Digite o peso em kg"));
const altura = parseFloat(prompt("Digite a altura em metros"));

if (!isNaN(peso) && !isNaN(altura)) {
    const imc = peso / (altura * altura);

    alert("O IMC é: " + imc.toFixed(2));

    if (imc < 18.5) {
        alert("Classificação: abaixo do peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert("Classificação: peso normal");
    } else if (imc >= 25 && imc <= 29.9) {
        alert("Classificação: sobrepeso");
    } else if (imc >= 30 && imc <= 34.9) {
        alert("Classificação: obesidade grau I");
    } else if (imc >= 35 && imc <= 39.9) {
        alert("Classificação: obesidade grau II");
    } else {
        alert("Classificação: obesidade grau III");
    }
}
