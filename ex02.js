// 2. Jogo de Adivinhação
// Escreva  um  script  que  gere um número aleatório de 1 a 100 e peça ao
// usuário,  para  adivinhar.  Use  while  para  repetir  até  acertar,  contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
const prompt = require("prompt-sync")();

const randomNumber = Math.floor(Math.random() * 100) + 1;
let count = 0;
while (true) {
  let input = prompt("Adivinhe um número de 1 a 100: ");
  let playerGuess = Number(input);

  if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 100) {
    console.log("Por favor, insira um número válido entre 1 e 100.");
    continue;
  }

  count++;

  if (playerGuess === randomNumber) {
    break;
  } else if (playerGuess > randomNumber) {
    console.log("Mais baixo");
  } else {
    console.log("Mais alto");
  }
}

console.log(`Acertou em apenas ${count} tentativas!`);
