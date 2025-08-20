import ContaPhotoPost from '@/components/conta/conta-photo-post';
import { Metadata } from 'next';
import React from 'react';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Postar | Minha Conta',
  description: 'Postar fotos no site ONG Dogs',
};

export default function Postar() {
  return <ContaPhotoPost />;
}
