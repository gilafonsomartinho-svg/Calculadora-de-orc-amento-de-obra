'use client';

import { useState } from 'react';
import CalculatorForm from '@/components/CalculatorForm';
import ResultCard from '@/components/ResultCard';

export default function Home() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <main className="max-w-5xl mx-auto px-5 py-10 md:py-16">
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-900">
          Calculadora de Orçamento de Obra
        </h1>
        <p className="text-slate-600 mt-2 max-w-xl mx-auto">
          Uma estimativa rápida do custo da tua obra, baseada em valores
          de referência do mercado português.
        </p>
      </header>

      <section className="grid md:grid-cols-2 bg-white rounded-2xl shadow-card border border-slate-100 overflow-hidden">
        <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-slate-100">
          <CalculatorForm onResult={setResult} onLoading={setLoading} />
        </div>
        <div className={loading ? 'opacity-50 transition' : 'transition'}>
          <ResultCard result={result} />
        </div>
      </section>

      <footer className="text-center text-xs text-slate-400 mt-8">
        Valores indicativos · tabelas de referência CYPE · Portugal{' '}
        {new Date().getFullYear()}
      </footer>
    </main>
  );
}
