import login from '@/actions/login';
import React from 'react';

export default function LoginForm() {
  return (
    <>
      <form action={login}>
        <input type="text" name="username" placeholder="Usuário" />
        <input type="password" name="password" placeholder="Senha" />
        <button>Entrar</button>
      </form>
    </>
  );
}
