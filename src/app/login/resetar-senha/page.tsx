import LoginResetarForm from '@/components/login/login-resetar-form';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Resetar a senha | ONG Dogs',
  description: 'Resete a sua senha',
};

type Props = {
  searchParams: {
    key: string;
    login: string;
  };
};

export default function ResetarSenha({ searchParams }: Props) {
  return (
    <div className="animeLeft">
      <h1 className="title">Resete a Senha</h1>
      <LoginResetarForm keyToken={searchParams.key} login={searchParams.login} />
    </div>
  );
}
