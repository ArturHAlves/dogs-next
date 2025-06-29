'use client';

import login from '@/actions/login';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '@/components/forms/button';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>{pending ? <Button disabled={pending}>Carregando..</Button> : <Button>Entrar</Button>}</>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: '',
    data: null,
  });

  return (
    <>
      <form action={action}>
        <input type="text" name="username" placeholder="Usuário" />
        <input type="password" name="password" placeholder="Senha" />
        <FormButton />
        <p>{state.error}</p>
      </form>
    </>
  );
}
