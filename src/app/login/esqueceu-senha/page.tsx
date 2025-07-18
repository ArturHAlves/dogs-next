import LoginEsqueceuForm from '@/components/login/login-esqueceu-form';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Esqueceu senha | ONG Dogs',
  description: 'Recupere a sua senha',
};

export default function EsqueceuSenha() {
  return (
    <div className="animeLeft">
      <h1 className="title">Esqueceu a senha?</h1>
      <LoginEsqueceuForm />
    </div>
  );
}
