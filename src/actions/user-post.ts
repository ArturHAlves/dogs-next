'use server';

import apiError from '@/functions/api-error';
import login from './login';

const API_URL = process.env.DOGS_API_URL ?? 'https://dogsapi.origamid.dev/json/api';

export default async function registerUser(state: {}, formData: FormData) {
  const username = formData.get('username') as string | null;
  const email = formData.get('email') as string | null;
  const password = formData.get('password') as string | null;

  try {
    if (!username || !email || !password) {
      throw new Error('Preencha os dados.');
    }
    if (password.length < 6) {
      throw new Error('A senha deve ter mais de 6 digitos');
    }

    const response = await fetch(`${API_URL}/user`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Email ou usuário já cadastrado.');
    }
    const { ok } = await login({ ok: true, error: '' }, formData);
    if (!ok) {
      throw new Error('Error ao logar');
    }

    return { data: null, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}

