import React, { useState, useEffect } from 'react';
import PersonajeCard from '../Pages/Personaje'; // asumiendo que ya lo tenés

export default function Search() {
  const [filtros, setFiltros] = useState({
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
  });

  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const params = new URLSearchParams(filtros);
      const res = await fetch(`https://rickandmortyapi.com/api/character/?${params}`);
      const data = await res.json();
      setPersonajes(data.results || []);
    } catch (error) {
      setPersonajes([]);
      console.error('Error al buscar personajes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Búsqueda de Personajes</h1>

      <form onSubmit={handleSubmit} className="SearchForm" style={{color:'black'}}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={filtros.name}
          onChange={handleChange}
          
        />
          <select name="status" value={filtros.status} onChange={handleChange}>
            <option value="">Estado</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>

          <input
            type="text"
            name="species"
            placeholder="Especie"
            value={filtros.species}
            onChange={handleChange}
            
          />

        <input
          type="text"
          name="type"
          placeholder="Tipo"
          value={filtros.type}
          onChange={handleChange}
          
        />

        <select name="gender" value={filtros.gender} onChange={handleChange}>
          <option value="">Género</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>

        <button type="submit">
          Buscar
        </button>
      </form>

      {loading ? (
        <p style={{textAlign:'center'}}>Cargando personajes...</p>
      ) : personajes.length > 0 ? (
        <div className="ContenedorBusqueda">
          {personajes.map((personaje) => (
            <PersonajeCard key={personaje.id} personaje={personaje} />
          ))}
        </div>
      ) : (
        <p style={{textAlign:'center'}}>No se encontraron personajes.</p>
      )}
    </div>
  );
}
