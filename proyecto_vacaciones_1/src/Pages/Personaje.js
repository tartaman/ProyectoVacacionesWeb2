import React, { useContext } from 'react';
import LikeContext from '../Context/LikeContext';

export default function Personaje({ personaje }) {
  const { state, dispatch } = useContext(LikeContext);
  const likes = state[personaje.id]?.likes || 0;
  const dislikes = state[personaje.id]?.dislikes || 0;

  return (
    <div className='PersonajeContainer' style={{ border: '1px solid lightgray', padding: '1rem', margin: '1rem' }}>
      <h3>{personaje.name}</h3>
      <img src={personaje.image} alt={personaje.name} width={150} />
      <p>Likes: {likes}</p>
      <p>Dislikes: {dislikes}</p>
      <button onClick={() => dispatch({ type: 'LIKE', payload: personaje.id })}>
        👍 Like
      </button>
      <button onClick={() => dispatch({ type: 'DISLIKE', payload: personaje.id })}>
        👎 Dislike
      </button>
    </div>
  );
}
