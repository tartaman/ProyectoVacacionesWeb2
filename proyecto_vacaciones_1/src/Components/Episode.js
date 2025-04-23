import React from 'react';
import { Link } from 'react-router-dom';

export default function Episode({ id, name, air_date }) {
  return (
    <div className='EpisodeContainer' style={{ border: '1px solid gray', margin: '1rem', padding: '1rem' }}>
      <h3>{name}</h3>
      <p><strong>Fecha:</strong> {air_date}</p>
      <Link to={`/episodio/${id}`}>
        <button>Ver Detalle</button>
      </Link>
    </div>
  );
}
