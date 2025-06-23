let nNotas = 0;
let soma = 0;
for (let i = 1; i <= 4; i++) {
    soma += parseFloat(prompt(`Insira a nota ${i}:`));
    nNotas++;
}

const media = soma / nNotas;
alert(`Média: ${media}`);

if (media >= 7) alert("Aprovado");
else alert("Reprovado");
