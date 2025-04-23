import React, { useEffect, useState } from 'react';
import Episode from '../Components/Episode';

export default function Inicio() {
  const [episodios, setEpisodios] = useState([]);

  useEffect(() => {
    async function fetchAllEpisodes() {
      let allEpisodes = [];
      let nextUrl = 'https://rickandmortyapi.com/api/episode';

      while (nextUrl) {
        const response = await fetch(nextUrl);
        const data = await response.json();
        allEpisodes = [...allEpisodes, ...data.results];
        nextUrl = data.info.next;
      }
      console.log(allEpisodes);
      setEpisodios(allEpisodes);
    }

    fetchAllEpisodes();
  }, []);

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Bienvenido al Inicio</h1>
      <div className='flexEpisodes'>
        {episodios.map((ep) => (
          <Episode
            key={ep.id}
            id={ep.id}
            name={ep.name}
            air_date={ep.air_date}
          />
        ))}
      </div>
    </div>
  );
}
