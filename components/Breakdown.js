import { formatarEuro } from '@/lib/calculator';

export default function Breakdown({ items }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-700 mb-3">
        Repartição estimada do custo de construção
      </h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.chave}>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">{item.label}</span>
              <span className="font-medium text-slate-800">
                {formatarEuro(item.valor)}
              </span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full mt-1 overflow-hidden">
              <div
                className="h-full bg-brand-500 rounded-full"
                style={{ width: `${item.peso * 100}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
