import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Personaje from './Personaje';

function EpisodioDetail() {
  const { id } = useParams(); // episodio ID
  const [episodio, setEpisodio] = useState(null);
  const [personajes, setPersonajes] = useState([]);

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

  return (
    <div>
      <h2>{episodio.name}</h2>
      <p>Air date: {episodio.air_date}</p>

      <h3>Personajes:</h3>
      <div>
        {personajes.map(personaje => (
          <Personaje key={personaje.id} personaje={personaje} />
        ))}
      </div>
    </div>
  );
}

export default EpisodioDetail;
