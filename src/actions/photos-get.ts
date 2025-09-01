'use server';

import apiError from '@/functions/api-error';

export type Photo = {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: string;
  total_comments: string;
};

type PhotosGetParams = {
  page?: number;
  total?: number;
  user?: 0 | string;
};

const API_URL = process.env.DOGS_API_URL ?? 'https://dogsapi.origamid.dev/json/api';

export default async function photosGet(
  { page = 1, total = 6, user = 0 }: PhotosGetParams = {},
  optionsFront?: RequestInit,
) {
  try {
    const options = optionsFront || {
      next: { revalidate: 10, tags: ['photos'] },
    };

    const response = await fetch(
      `${API_URL}/photo/?_page=${page}&_total=${total}&_user=${user}`,
      options,
    );

    if (!response.ok) {
      throw new Error('Erro ao pegar as fotos.');
    }
    const data = (await response.json()) as Photo[];
    return { data, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}
