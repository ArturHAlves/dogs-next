'use server';

import apiError from '@/functions/api-error';
import { cookies } from 'next/headers';

const API_URL = process.env.DOGS_API_URL ?? 'https://dogsapi.origamid.dev/json';

export default async function login(state: {}, formData: FormData) {
  const username = formData.get('username') as string | null;
  const password = formData.get('password') as string | null;

  try {
    if (!username || !password) {
      throw new Error('Preencha os dados.');
    }

    const response = await fetch(`${API_URL}/jwt-auth/v1/token`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Senha ou usuário inválidos!');
    }

    const data = await response.json();

    cookies().set('token', data.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
    });

    return { data: null, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}
