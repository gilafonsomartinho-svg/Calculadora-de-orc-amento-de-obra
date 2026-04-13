// Valores de referência com base nas tabelas CYPE e nas médias
// praticadas em Portugal (2025/2026). Estão em euros por m² de
// área bruta de construção, antes de honorários e IVA.
//
// Os valores foram cruzados com alguns orçamentos reais que
// apanhei de empreitadas recentes para não ficarem demasiado
// optimistas — as tabelas CYPE tendem a ficar um bocado abaixo
// do que se pratica hoje em dia, sobretudo em Lisboa.

export const TIPOS_OBRA = {
  nova: {
    label: 'Nova construção',
    description: 'Construção de raiz, em terreno já preparado.',
    base: {
      economico: 950,
      medio: 1250,
      alto: 1750,
      premium: 2400,
    },
  },
  reabilitacao_ligeira: {
    label: 'Reabilitação ligeira',
    description: 'Pinturas, revestimentos, pequenas intervenções.',
    base: {
      economico: 450,
      medio: 650,
      alto: 900,
      premium: 1250,
    },
  },
  reabilitacao_profunda: {
    label: 'Reabilitação profunda',
    description: 'Intervenção estrutural e em especialidades.',
    base: {
      economico: 850,
      medio: 1150,
      alto: 1550,
      premium: 2100,
    },
  },
  ampliacao: {
    label: 'Ampliação',
    description: 'Aumento de área numa construção existente.',
    base: {
      economico: 900,
      medio: 1200,
      alto: 1650,
      premium: 2250,
    },
  },
};

export const ACABAMENTOS = {
  economico: 'Económico',
  medio: 'Médio',
  alto: 'Alto',
  premium: 'Premium',
};

// Fator regional — reflete diferenças de mão-de-obra e de materiais.
// Coimbra fica como referência (1.00) por estar perto da média nacional.
export const REGIOES = {
  lisboa:         { label: 'Lisboa',            factor: 1.18 },
  porto:          { label: 'Porto',             factor: 1.10 },
  algarve:        { label: 'Algarve',           factor: 1.12 },
  aveiro:         { label: 'Aveiro',            factor: 1.02 },
  coimbra:        { label: 'Coimbra',           factor: 1.00 },
  braga:          { label: 'Braga',             factor: 0.96 },
  evora:          { label: 'Évora / Alentejo',  factor: 0.95 },
  interior_norte: { label: 'Interior Norte',    factor: 0.90 },
  interior_sul:   { label: 'Interior Sul',      factor: 0.88 },
  madeira:        { label: 'Madeira',           factor: 1.20 },
  acores:         { label: 'Açores',            factor: 1.22 },
};

// Repartição média do custo de construção numa obra nova.
// É indicativo — serve para o utilizador perceber para onde
// vai o dinheiro, não é um capítulo de medições.
export const REPARTICAO = [
  { chave: 'estrutura',   label: 'Estrutura e fundações',      peso: 0.22 },
  { chave: 'envolvente',  label: 'Envolvente exterior',        peso: 0.15 },
  { chave: 'acabamentos', label: 'Acabamentos interiores',     peso: 0.28 },
  { chave: 'instalacoes', label: 'Instalações técnicas',       peso: 0.20 },
  { chave: 'exterior',    label: 'Arranjos exteriores',        peso: 0.08 },
  { chave: 'diversos',    label: 'Diversos e imprevistos',     peso: 0.07 },
];
