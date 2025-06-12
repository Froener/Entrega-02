// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

const frase = "Olá! Olá, mundo? Mundo...   mundo. café, Café!";

function palavrasUnicas(frase) {
  const palavras = frase.toLowerCase().match(/[a-záéíóúàâêôãõç]+/gi);

  const unicas = [];

  if (palavras) {
    for (let i = 0; i < palavras.length; i++) {
      const palavra = palavras[i];
      if (!unicas.includes(palavra)) {
        unicas.push(palavra);
      }
    }
  }
  return unicas;
}

console.log(palavrasUnicas(frase));
