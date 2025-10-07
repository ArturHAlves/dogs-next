import statsGet from '@/actions/stats-get';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

const ContaEstatisticas = dynamic(() => import('@/components/conta/conta-estatisticas'), {
  loading: () => <p>Carregando...</p>,
  ssr: false,
});

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
