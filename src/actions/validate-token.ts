'use server';

import apiError from '@/functions/api-error';
import { cookies } from 'next/headers';

const API_URL = process.env.DOGS_API_URL ?? 'https://dogsapi.origamid.dev/json/api';

export default async function validateToken() {
  try {
    const token = cookies().get('token')?.value;
    if (!token) throw new Error('Acesso negado.');

    const response = await fetch(`${API_URL}/jwt-auth/v1/token/validate`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao validar token.');
    }
    const data = await response.json();
    return { data, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}
