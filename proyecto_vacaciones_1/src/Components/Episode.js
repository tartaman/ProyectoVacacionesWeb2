import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Episode({ id, name, air_date }) {
  const storageKey = `episode-${id}-votes`;

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(storageKey));
    if (stored) {
      setLikes(stored.likes || 0);
      setDislikes(stored.dislikes || 0);
    }
  }, [storageKey]);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(storageKey, JSON.stringify({ likes: newLikes, dislikes }));
  };

  const handleDislike = () => {
    const newDislikes = dislikes + 1;
    setDislikes(newDislikes);
    localStorage.setItem(storageKey, JSON.stringify({ likes, dislikes: newDislikes }));
  };

  return (
    <div className="EpisodeContainer" style={{ border: '1px solid gray', margin: '1rem', padding: '1rem' }}>
      <h3>{name}</h3>
      <p><strong>Fecha:</strong> {air_date}</p>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
        <button onClick={handleLike}>👍 {likes}</button>
        <button onClick={handleDislike}>👎 {dislikes}</button>
      </div>
      <Link to={`/episodio/${id}`}>
        <button>Ver Detalle</button>
      </Link>
    </div>
  );
}
