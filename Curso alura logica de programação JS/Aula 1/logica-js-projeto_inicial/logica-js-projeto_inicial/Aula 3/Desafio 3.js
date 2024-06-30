alert("Contagem regressiva");
let contagemRegressiva = Number(prompt("Digite um número:"));

while (contagemRegressiva >= 0) {
  console.log("Execução " + contagemRegressiva);
  contagemRegressiva = contagemRegressiva - 1;
}
