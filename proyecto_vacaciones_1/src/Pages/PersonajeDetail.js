import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PersonajeDetail = () => {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPersonaje = async () => {
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await res.json();
        setPersonaje(data);
      } catch (error) {
        console.error("Error al cargar personaje:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPersonaje();
  }, [id]);

  if (loading) return <p>Cargando personaje...</p>;
  if (!personaje) return <p>Personaje no encontrado.</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{personaje.name}</h1>
      <img src={personaje.image} alt={personaje.name} className="rounded-xl shadow-md w-60 h-60 mb-4" />
      <ul className="space-y-1 text-lg">
        <li><strong>Estado:</strong> {personaje.status}</li>
        <li><strong>Especie:</strong> {personaje.species}</li>
        <li><strong>Género:</strong> {personaje.gender}</li>
        <li><strong>Origen:</strong> {personaje.origin.name}</li>
        <li><strong>Ubicación actual:</strong> {personaje.location.name}</li>
      </ul>
    </div>
  );
};

export default PersonajeDetail;
