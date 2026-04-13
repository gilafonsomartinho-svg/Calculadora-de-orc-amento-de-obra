'use client';

import { useState } from 'react';
import { TIPOS_OBRA, ACABAMENTOS, REGIOES } from '@/lib/pricing';

const valoresIniciais = {
  tipo: 'nova',
  acabamento: 'medio',
  regiao: 'lisboa',
  area: 120,
};

export default function CalculatorForm({ onResult, onLoading }) {
  const [form, setForm] = useState(valoresIniciais);
  const [erro, setErro] = useState(null);
  const [aEnviar, setAEnviar] = useState(false);

  function atualizar(campo, valor) {
    setForm((prev) => ({ ...prev, [campo]: valor }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErro(null);
    setAEnviar(true);
    onLoading?.(true);

    try {
      const res = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Não foi possível calcular a estimativa.');
      }
      onResult({ ...data, input: form });
    } catch (err) {
      setErro(err.message);
    } finally {
      setAEnviar(false);
      onLoading?.(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Campo label="Tipo de obra">
        <select
          value={form.tipo}
          onChange={(e) => atualizar('tipo', e.target.value)}
          className="input"
        >
          {Object.entries(TIPOS_OBRA).map(([key, val]) => (
            <option key={key} value={key}>{val.label}</option>
          ))}
        </select>
        <p className="text-xs text-slate-500 mt-1.5">
          {TIPOS_OBRA[form.tipo].description}
        </p>
      </Campo>

      <Campo label="Nível de acabamentos">
        <div className="grid grid-cols-4 gap-2">
          {Object.entries(ACABAMENTOS).map(([key, label]) => {
            const ativo = form.acabamento === key;
            return (
              <button
                type="button"
                key={key}
                onClick={() => atualizar('acabamento', key)}
                className={
                  'py-2 rounded-lg text-sm font-medium border transition ' +
                  (ativo
                    ? 'bg-brand-500 text-white border-brand-500 shadow-sm'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-brand-400')
                }
              >
                {label}
              </button>
            );
          })}
        </div>
      </Campo>

      <Campo label="Localização">
        <select
          value={form.regiao}
          onChange={(e) => atualizar('regiao', e.target.value)}
          className="input"
        >
          {Object.entries(REGIOES).map(([key, val]) => (
            <option key={key} value={key}>{val.label}</option>
          ))}
        </select>
      </Campo>

      <Campo label={`Área de construção — ${form.area} m²`}>
        <input
          type="range"
          min="20"
          max="1000"
          step="5"
          value={form.area}
          onChange={(e) => atualizar('area', Number(e.target.value))}
          className="w-full accent-brand-500"
        />
        <input
          type="number"
          min="1"
          value={form.area}
          onChange={(e) => atualizar('area', Number(e.target.value))}
          className="input mt-2"
        />
      </Campo>

      {erro && (
        <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {erro}
        </div>
      )}

      <button
        type="submit"
        disabled={aEnviar}
        className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition shadow-sm"
      >
        {aEnviar ? 'A calcular…' : 'Calcular estimativa'}
      </button>
    </form>
  );
}

function Campo({ label, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}
