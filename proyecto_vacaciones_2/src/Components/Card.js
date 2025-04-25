import { FaStar, FaUser, FaBed } from "react-icons/fa";

export default function Card({ house }) {
  return (
    <div style={{
      border: '1px solid #2c3e50',
      borderRadius: '.1rem',
      overflow: 'hidden',
      width: '350px',
      fontFamily: 'Arial, sans-serif',
      color: 'white'
    }}>
      <div style={{ position: 'relative' }}>
        <img
          src={house.image}
          alt={house.title}
          style={{ width: '100%', objectFit: 'cover' }}
        />
        {house.superhost && (
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            backgroundColor: '#2c3e50',
            color: 'white',
            padding: '4px 10px',
            borderRadius: '1rem',
            fontSize: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            Superhost <FaStar color="gold" size={12} />
          </div>
        )}
      </div>

      <div style={{ padding: '1rem', backgroundColor: '' }}>
        <h3 style={{ margin: '0 0 0', fontSize: '1.2rem' }}>{house.title}</h3>
        <p style={{ fontSize: '0.9rem', color: '#d9d9d9' }}>{house.description}</p>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', fontSize: '0.9rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <FaBed /> {house.capacity.bedroom} BedRoom
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <FaUser /> {house.capacity.people} Guest
          </div>
        </div>

        <hr style={{ border: '0.5px solid #2c3e50', margin: '1rem 0' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
          <span>${house.price}/night</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <FaStar color="gold" /> {house.rating}
          </span>
        </div>
      </div>
    </div>
  );
}
