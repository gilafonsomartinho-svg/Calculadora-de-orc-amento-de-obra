import { formatarEuro } from '@/lib/calculator';
import Breakdown from './Breakdown';

export default function ResultCard({ result }) {
  if (!result) {
    return (
      <div className="h-full min-h-[420px] flex flex-col items-center justify-center text-center p-8 text-slate-400">
        <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-2xl mb-4">
          •
        </div>
        <p className="max-w-xs text-sm leading-relaxed">
          Preenche os dados à esquerda para veres uma estimativa
          do custo da tua obra.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 space-y-6">
      <header>
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Estimativa total (IVA incluído)
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-brand-900 mt-1 tabular-nums">
          {formatarEuro(result.total)}
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Intervalo provável:{' '}
          <span className="tabular-nums">{formatarEuro(result.margemMin)}</span>
          {' – '}
          <span className="tabular-nums">{formatarEuro(result.margemMax)}</span>
        </p>
      </header>

      <div className="grid grid-cols-2 gap-3">
        <Stat label="Preço por m²" value={formatarEuro(result.precoM2)} />
        <Stat label="Área" value={`${result.input.area} m²`} />
        <Stat label="Construção" value={formatarEuro(result.custoConstrucao)} />
        <Stat label="Honorários (8%)" value={formatarEuro(result.honorarios)} />
        <Stat label="Licenciamento (3%)" value={formatarEuro(result.licenciamento)} />
        <Stat label="IVA (23%)" value={formatarEuro(result.iva)} />
      </div>

      <Breakdown items={result.reparticao} />

      <p className="text-xs text-slate-400 leading-relaxed">
        Valores indicativos baseados nas tabelas de referência CYPE e em médias
        de mercado para Portugal. Não substituem um orçamento detalhado
        feito por um profissional.
      </p>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 border border-slate-100 px-4 py-3">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="text-base font-semibold text-brand-900 mt-0.5 tabular-nums">
        {value}
      </div>
    </div>
  );
}
