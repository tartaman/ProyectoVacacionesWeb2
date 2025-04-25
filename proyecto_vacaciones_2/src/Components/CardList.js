import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function CardList({ searchTerm }) {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json")
      .then(res => res.json())
      .then(data => setHouses(data))
      .catch(err => console.error("Error cargando las propiedades:", err));
  }, []);

  const filteredHouses = houses.filter(house => 
    house.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
      gap: "2rem",
      padding: "2rem"
    }}>
      {filteredHouses.map(house => (
        <Card key={house.id} house={house} />
      ))}
    </div>
  );
}
