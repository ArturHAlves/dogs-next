'use server';

import apiError from '@/functions/api-error';

const API_URL = process.env.DOGS_API_URL ?? 'https://dogsapi.origamid.dev/json/api';

export default async function passwordLost(state: {}, formData: FormData) {
  const login = formData.get('login') as string | null;
  const url = formData.get('url') as string | null;

  try {
    if (!login) {
      throw new Error('Preencha os dados.');
    }

    const response = await fetch(`${API_URL}/password/lost`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        url,
      }),
    });

    if (!response.ok) {
      throw new Error('Email ou usuário não cadastrado.');
    }

    return { data: null, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}
