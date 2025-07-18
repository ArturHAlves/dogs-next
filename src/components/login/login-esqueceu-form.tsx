'use client';

import React, { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '@/components/forms/button';
import Input from '@/components/forms/input';
import ErrorMessage from '../helper/error-message';
import styles from './login-form.module.css';
import passwordLost from '@/actions/password-lost';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>{pending ? <Button disabled={pending}>Enviando..</Button> : <Button>Enviar Email</Button>}</>
  );
}

export default function LoginEsqueceuForm() {
  const [url, setUrl] = useState('');

  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: '',
    data: null,
  });

  useEffect(() => {
    setUrl(window.location.href.replace('esqueceu-senha', 'resetar'));
  }, []);

  return (
    <form action={action} className={styles.form}>
      <Input label="Email / Usuário" name="login" type="text" />
      <input type="hidden" name="url" value={url} />
      <ErrorMessage error={state.error} />

      {state.ok ? <p style={{ color: '#4C1' }}>Email enviado.</p> : <FormButton />}
    </form>
  );
}
