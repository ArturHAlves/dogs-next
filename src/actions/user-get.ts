'use server';

import apiError from '@/functions/api-error';
import { cookies } from 'next/headers';

const API_URL = process.env.DOGS_API_URL ?? 'https://dogsapi.origamid.dev/json/api';

export type User = {
  id: number;
  email: string;
  username: string;
  nome: string;
};

export default async function userGet() {
  try {
    const token = cookies().get('token')?.value;
    if (!token) {
      throw new Error('Token não encontrado.');
    }
    const response = await fetch(`${API_URL}/user`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao pegar o usuário.');
    }
    const data = (await response.json()) as User;
    return { data, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}
