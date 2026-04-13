import { TIPOS_OBRA, REGIOES, REPARTICAO } from './pricing';

// Pequeno desconto pela economia de escala. Obras maiores
// diluem melhor os custos fixos (estaleiro, gruas, etc.) e o
// preço por m² tende a baixar um pouco.
function fatorArea(area) {
  if (area >= 500) return 0.92;
  if (area >= 250) return 0.95;
  if (area >= 120) return 0.98;
  return 1;
}

export function calcularOrcamento({ tipo, acabamento, regiao, area }) {
  const tipoObra = TIPOS_OBRA[tipo];
  const dadosRegiao = REGIOES[regiao];

  if (!tipoObra) throw new Error('Tipo de obra desconhecido.');
  if (!dadosRegiao) throw new Error('Região desconhecida.');
  if (!tipoObra.base[acabamento]) {
    throw new Error('Nível de acabamentos inválido.');
  }

  const precoBase = tipoObra.base[acabamento];
  const ajusteArea = fatorArea(area);
  const precoM2 = precoBase * dadosRegiao.factor * ajusteArea;
  const custoConstrucao = precoM2 * area;

  // Honorários de projeto e fiscalização + taxas de licenciamento.
  // Percentagens médias, não incluem certificação energética nem
  // topografia (que ficam dentro da margem de imprevistos).
  const honorarios = custoConstrucao * 0.08;
  const licenciamento = custoConstrucao * 0.03;
  const subtotal = custoConstrucao + honorarios + licenciamento;

  const iva = subtotal * 0.23;
  const total = subtotal + iva;

  const reparticao = REPARTICAO.map((item) => ({
    ...item,
    valor: custoConstrucao * item.peso,
  }));

  // Uma estimativa inicial costuma desviar-se -10%/+15% do orçamento
  // final. Assume-se essa janela para o utilizador ver um intervalo.
  return {
    precoM2,
    custoConstrucao,
    honorarios,
    licenciamento,
    subtotal,
    iva,
    total,
    reparticao,
    margemMin: total * 0.9,
    margemMax: total * 1.15,
  };
}

const formatadorEuro = new Intl.NumberFormat('pt-PT', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
});

export function formatarEuro(valor) {
  return formatadorEuro.format(valor);
}
