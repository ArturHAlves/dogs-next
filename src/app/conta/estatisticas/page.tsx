import statsGet from '@/actions/stats-get';
import ContaEstatisticas from '@/components/conta/conta-estatisticas';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Estatísticas | Minha Conta',
  description: 'Minha Conta no site ONG Dogs',
};

export default async function Estatisticas() {
  const { data } = await statsGet();

  if (!data) return null;
  return (
    <section>
      <ContaEstatisticas data={data} />
    </section>
  );
}
