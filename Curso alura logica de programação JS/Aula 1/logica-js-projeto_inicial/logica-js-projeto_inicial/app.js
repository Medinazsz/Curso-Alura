alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 2;
let chute = prompt("Escolha um número entre 1 e 10");
console.log(numeroSecreto);

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
  alert(`Isso ai! você acertou o número secreto ${numeroSecreto}`);
} else {
  alert("Você errou :(");
}
