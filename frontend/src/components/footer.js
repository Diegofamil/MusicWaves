/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../styles/components.css'
// import $ from 'jquery'

export const Footer = () => {
  return (
    <footer className="footer">
     
      <p><a href="/terminos">Términos y condiciones</a></p>
      <p><a href="/privacidad">Política de privacidad</a></p>
      <p><a href="/contacto">Contacto</a></p>
      <p>
        Síguenos en{' '}
        <a href="#">Twitter</a>,{' '}
        <a href="#">Instagram</a> y{' '}
        <a href="#">Facebook</a>.
      </p>
      <p>&copy; 2025 MusicWaves. Todos los derechos reservados.</p>

    </footer>
  )
}
