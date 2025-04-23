import React, { useContext } from 'react';
import LikeContext from '../Context/LikeContext';
import { Link } from 'react-router-dom';

export default function Personaje({ personaje }) {
  const { state, dispatch } = useContext(LikeContext);
  const likes = state[personaje.id]?.likes || 0;
  const dislikes = state[personaje.id]?.dislikes || 0;

  return (
    <div className='PersonajeContainer' style={{ border: '1px solid lightgray', borderRadius:'1rem', padding: '0 0 0 1rem', margin: '1rem' }}>
      <img src={personaje.image} alt={personaje.name} width={225} style={{borderRadius:'0 1rem 1rem 0'}}/>
      <div style={{padding:'1rem 0'}}>
        <h3>{personaje.name}</h3>
        <p>Status: {personaje.status}</p>
        <p>Species: {personaje.species}</p>
        <p>Likes: {likes}</p>
        <p>Dislikes: {dislikes}</p>
        <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
          <button onClick={() => dispatch({ type: 'LIKE', payload: personaje.id })}>
            👍 Like
          </button>
          <button onClick={() => dispatch({ type: 'DISLIKE', payload: personaje.id })}>
            👎 Dislike
          </button>
        </div>
        <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
          <Link to={`/personaje/${personaje.id}`}>
          <button style={{ borderRadius:'1rem', padding:'1rem', margin:'0.5rem', width:'100%'}}>
            Ver detalle
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
