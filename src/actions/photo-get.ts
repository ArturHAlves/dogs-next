'use server';

import apiError from '@/functions/api-error';
import { Photo } from './photos-get';

export type Comment = {
  comment_ID: string;
  comment_post_ID: string;
  comment_author: string;
  comment_content: string;
};

export type PhotoData = {
  photo: Photo;
  comments: Comment[];
};

const API_URL = process.env.DOGS_API_URL ?? 'https://dogsapi.origamid.dev/json/api';

export default async function photoGet(id: string) {
  try {
    const response = await fetch(`${API_URL}/photo/${id}`, {
      next: { revalidate: 60, tags: ['photos', 'comment'] },
    });

    if (!response.ok) {
      throw new Error('Erro ao pegar as foto.');
    }
    const data = (await response.json()) as PhotoData;
    return { data, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}
