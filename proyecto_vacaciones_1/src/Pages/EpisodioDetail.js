import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Personaje from './Personaje';
import LikeContext from '../Context/LikeContext';

function EpisodioDetail() {
  const { id } = useParams();
  const [episodio, setEpisodio] = useState(null);
  const [personajes, setPersonajes] = useState([]);
  const { state } = useContext(LikeContext);

  useEffect(() => {
    async function fetchEpisodio() {
      const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
      const data = await res.json();
      setEpisodio(data);

      const personajesIds = data.characters.map(url => url.split('/').pop());
      const resPers = await fetch(`https://rickandmortyapi.com/api/character/${personajesIds}`);
      const dataPers = await resPers.json();
      setPersonajes(Array.isArray(dataPers) ? dataPers : [dataPers]);
    }

    fetchEpisodio();
  }, [id]);

  if (!episodio) return <p>Cargando...</p>;

  // Obtener el top 3 con más likes
  const sortedPersonajes = [...personajes].sort((a, b) => {
    const likesA = state[a.id]?.likes || 0;
    const likesB = state[b.id]?.likes || 0;
    return likesB - likesA;
  });

  const top3 = sortedPersonajes.slice(0, 3);
  const top3Ids = new Set(top3.map(p => p.id));

  // Obtener primeros 2 y últimos 2 del arreglo original, sin repetir del top3
  const primeros2 = personajes
    .filter(p => !top3Ids.has(p.id))
    .slice(0, 2);
  const ultimos2 = personajes
    .filter(p => !top3Ids.has(p.id) && !primeros2.some(pr => pr.id === p.id))
    .slice(-2);

  const seleccionados = [...primeros2, ...ultimos2];

  return (
    <div>
      <h2 style={{textAlign: 'center', fontSize:'2rem'}}>{episodio.name}</h2>
      <p style={{textAlign:'center'}}>Air date: {episodio.air_date}</p>

      {top3.length > 0 && (
        <>
          <h3 style={{textAlign:'center', fontSize:'2rem'}}>Top 3 más likeados:</h3>
          <div className='DestacadosPersonajes'>
            {top3.map(personaje => (
              <Personaje key={`top-${personaje.id}`} personaje={personaje} />
            ))}
          </div>
        </>
      )}

      <h3 style={{fontSize:'2rem', textAlign:'center'}}>🎭 Personajes destacados:</h3>
      <div className='SelectedPersonajes'>
        {seleccionados.map(personaje => (
          <Personaje key={`otros-${personaje.id}`} personaje={personaje} />
        ))}
      </div>
    </div>
  );
}

export default EpisodioDetail;
