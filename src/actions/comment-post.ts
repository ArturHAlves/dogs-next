'use server';

import apiError from '@/functions/api-error';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

const API_URL = process.env.DOGS_API_URL ?? 'https://dogsapi.origamid.dev/json/api';

export default async function commentPost(state: {}, formData: FormData) {
  const token = cookies().get('token')?.value;
  const comment = formData.get('comment') as string | null;
  const id = formData.get('id') as string | null;

  try {
    if (!token || !comment || !id) {
      throw new Error('Preencha os dados.');
    }

    const response = await fetch(`${API_URL}/comment/${id}`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Email ou usuário já cadastrado.');
    }

    const data = (await response.json()) as Comment;
    revalidateTag('comment');

    return { data, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}
