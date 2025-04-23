import React, { useContext } from 'react';
import LikeContext from '../Context/LikeContext';

function Personaje({ personaje }) {
  const { state, dispatch } = useContext(LikeContext);
  const stats = state[personaje.id] || { likes: 0, dislikes: 0 };

  return (
    <div style={{ border: '1px solid gray', padding: '1rem', margin: '1rem' }}>
      <h4>{personaje.name}</h4>
      <img src={personaje.image} alt={personaje.name} width={100} />
      <p>Status: {personaje.status}</p>
      <p>Likes: {stats.likes} | Dislikes: {stats.dislikes}</p>
      <button onClick={() => dispatch({ type: 'LIKE', characterId: personaje.id })}>👍</button>
      <button onClick={() => dispatch({ type: 'DISLIKE', characterId: personaje.id })}>👎</button>
    </div>
  );
}

export default Personaje;
