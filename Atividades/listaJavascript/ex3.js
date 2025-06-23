const n1 = parseInt(prompt("Insira um número inteiro e positivo."));

if (isNaN(n1) || n1 < 1) {
    console.log("Número inválido");
} else {
    for (let i = 1; i <= n1; i++) {
        console.log(i);
    }
}
