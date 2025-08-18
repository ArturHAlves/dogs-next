import ContaHeader from '@/components/conta/conta-header';
import React, { ReactNode } from 'react';

export default function ContaLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container">
      <ContaHeader />
      {children}
    </div>
  );
}
