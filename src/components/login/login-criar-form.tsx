'use client';

import React, { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '@/components/forms/button';
import Input from '@/components/forms/input';
import ErrorMessage from '../helper/error-message';
import { useRouter } from 'next/navigation';
import styles from './login-form.module.css';
import registerUser from '@/actions/user-post';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>{pending ? <Button disabled={pending}>Cadastrando..</Button> : <Button>Cadastrar</Button>}</>
  );
}

export default function LoginCriarForm() {
  const router = useRouter();

  const [state, action] = useFormState(registerUser, {
    ok: false,
    error: '',
    data: null,
  });

  useEffect(() => {
    if (state.ok) {
      router.push('/conta');
    }
  }, [state.ok]);

  return (
    <form action={action} className={styles.form}>
      <Input label="Usuário" name="username" type="text" />
      <Input label="Email" name="email" type="email" />
      <Input label="Senha" name="password" type="password" />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  );
}
