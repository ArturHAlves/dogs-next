'use server';

import apiError from '@/functions/api-error';
import { cookies } from 'next/headers';

export type StatsData = {
  id: number;
  title: string;
  acessos: string;
};

const API_URL = process.env.DOGS_API_URL ?? 'https://dogsapi.origamid.dev/json/api';

export default async function statsGet() {
  try {
    const token = cookies().get('token')?.value;
    if (!token) throw new Error('Acesso negado.');

    const response = await fetch(`${API_URL}/stats`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar os dados.');
    }
    const data = (await response.json()) as StatsData[];
    return { data, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}
