import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Second = () => {
    const navigate = useNavigate()
  return (
    <div>
    <h1>Página de Inicio</h1>
    <p>Bienvenido a nuestra aplicación.</p>
    <button onClick={() => navigate('/')}>Volver</button>
  </div>
  )
}
