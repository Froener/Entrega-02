// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

/* const vendas = [
  { cliente: "Ana", total: 100 },
  { cliente: "João", total: 200 },
  { cliente: "Ana", total: 50 },
  { cliente: "Maria", total: 300 },
]; */

const resultado = vendas.reduce((acc, item) => {
  const { cliente, total } = item;

  if (!acc[cliente]) {
    acc[cliente] = 0;
  }

  acc[cliente] += total;

  return acc;
}, {});
