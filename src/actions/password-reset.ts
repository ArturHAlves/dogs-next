'use server';

import apiError from '@/functions/api-error';
import { redirect } from 'next/navigation';

const API_URL = process.env.DOGS_API_URL ?? 'https://dogsapi.origamid.dev/json/api';

export default async function passwordReset(state: {}, formData: FormData) {
  const login = formData.get('login') as string | null;
  const key = formData.get('key') as string | null;
  const password = formData.get('password') as string | null;

  try {
    if (!login || key || password) {
      throw new Error('Preencha os dados.');
    }

    const response = await fetch(`${API_URL}/password/reset`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Não autorizado.');
    }
  } catch (error: unknown) {
    return apiError(error);
  }

  redirect('/login');
}
