// 7. Mapeamento e Ordenação
// Dado  um  array  produtos  =  [{  nome,  preco  },  ...],  crie  uma  função  que
// retorne  um  novo  array  apenas  com  os  nomes,  ordenados  por  preço
// crescente, usando map, sort.

function nomesOrdenadosPorPreco(produtos) {
  let copia = produtos.slice();
  copia.sort((a, b) => a.preco - b.preco);
  let nomes = copia.map((prod) => prod.nome);
  return nomes;
}
