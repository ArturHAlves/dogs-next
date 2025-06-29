'use server';

import { cookies } from 'next/headers';

export default async function login(formData: FormData) {
  const response = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();

  cookies().set('token', data.token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24
  });
}
