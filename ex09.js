// 9. Conversão Entre Formatos
// Escreva duas funções:
// ○  paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○  objetoParaPares(obj)  faz  o  inverso,  retornando  um  array  de
// pares.

function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}
