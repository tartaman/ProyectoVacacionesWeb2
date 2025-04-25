import './App.css';
import './Components/CardList';
import CardList from './Components/CardList';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <div className="hero">
        <div className="herocontainer">
          <h2>
            Book unique places to stay and things to do. <br/>
            Unforgettable trips are made with Airbnb.
          </h2>
          <input 
            placeholder="Search by description..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <CardList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
