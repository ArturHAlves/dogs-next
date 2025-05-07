import React from 'react'

export default function PerfilUserPage({ params }: { params: { user: string } }) {
  return (
    <div>Perfil: {params.user}</div>
  )
}
