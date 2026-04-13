import { NextResponse } from 'next/server';
import { calcularOrcamento } from '@/lib/calculator';

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Corpo do pedido inválido.' },
      { status: 400 }
    );
  }

  const area = Number(payload.area);
  if (!Number.isFinite(area) || area <= 0) {
    return NextResponse.json(
      { error: 'A área tem de ser um número positivo.' },
      { status: 400 }
    );
  }

  try {
    const resultado = calcularOrcamento({
      tipo: payload.tipo,
      acabamento: payload.acabamento,
      regiao: payload.regiao,
      area,
    });
    return NextResponse.json(resultado);
  } catch (err) {
    return NextResponse.json(
      { error: err.message || 'Erro ao calcular orçamento.' },
      { status: 400 }
    );
  }
}
