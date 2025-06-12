import React from 'react';

export default function Faq() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Preguntas Frecuentes (FAQ)</h1>
      <div style={{ marginTop: '1.5rem' }}>
        <h3>¿Qué es Buscasofa?</h3>
        <p>Buscasofa es una aplicación web donde puedes buscar gasolineras</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <h3>¿Cómo puedo contactar con la gasolinera?</h3>
        <p>Llamándo a la hora de la siesta.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <h3>¿La plataforma cobra comisión?</h3>
        <p>No, Buscasofa es totalmente gratuito, de momento.</p>
      </div>
    </div>
  );
}
