import LoginForm from '@/components/login/login-form';
import React from 'react';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login | ONG Dogs',
  description: 'Logue sua conta no site ONG Dogs'
}


export default function Login() {
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <LoginForm />
    </section>
  );
}
