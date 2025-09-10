'use server';

import apiError from '@/functions/api-error';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const API_URL = process.env.DOGS_API_URL ?? 'https://dogsapi.origamid.dev/json/api';

export default async function photoDelete(id: string) {
  const token = cookies().get('token')?.value;

  try {
    if (!token) {
      throw new Error('Token inválido.');
    }

    const response = await fetch(`${API_URL}/photo/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao deletar a foto.');
    }
  } catch (error: unknown) {
    return apiError(error);
  }
  revalidateTag('photos');
  redirect('/conta');
}
