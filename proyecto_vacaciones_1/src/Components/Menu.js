import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <nav style={{ backgroundColor: '#333', padding: '1rem' }}>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0, padding: 0 }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</Link></li>
          <li><Link to="/search" style={{ color: 'white', textDecoration: 'none' }}>Search</Link></li>
          <li><Link to="/estatica" style={{ color: 'white', textDecoration: 'none' }}>Estatica</Link></li>
        </ul>
      </nav>
  );
}
