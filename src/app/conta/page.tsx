'use client';

import { useUser } from '@/context/user-context';
import React from 'react'

export default function Conta() {
  const { user } = useUser();


  return (
    <div>Conta: { user?.nome }</div>
  )
}
