'use server';

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

const API_URL = process.env.DOGS_API_URL ?? 'https://dogsapi.origamid.dev/json/api';

export default async function photosGet() {
  const response = await fetch(`${API_URL}/photo/?_page=1&_total=6&_user=0`);

  const data = (await response.json()) as Photo[];
  return data;
}
