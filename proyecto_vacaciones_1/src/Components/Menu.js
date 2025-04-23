import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <nav style={{ backgroundColor: '#333', padding: '1rem' }}>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0, padding: 0 }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</Link></li>
          <li><Link to="/sobre" style={{ color: 'white', textDecoration: 'none' }}>Sobre mí</Link></li>
          <li><Link to="/contacto" style={{ color: 'white', textDecoration: 'none' }}>Contacto</Link></li>
        </ul>
      </nav>
  );
}
