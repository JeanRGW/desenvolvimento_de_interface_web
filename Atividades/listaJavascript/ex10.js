const palavra = prompt("Insira uma palavra ou frase");

let inverso = "";
for (let i = palavra.length; i > 0; i--) {
    inverso += palavra[i - 1];
}

alert(inverso);
