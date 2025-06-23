const n1 = parseInt(prompt("Digite o primeiro número"));
const n2 = parseInt(prompt("Digite o segundo número"));

if (isNaN(n1) || isNaN(n2)) {
    alert("Números invalidos");
} else {
    alert(`Soma: ${n1 + n2}`);
    alert(`Subtração: ${n1 - n2}`);
    alert(`Multiplicação: ${n1 * n2}`);
    alert(`Divisão: ${n1 / n2}`);
    alert(`Resto: ${n1 % n2}`);
}
