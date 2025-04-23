import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EpisodioDetail from './Pages/EpisodioDetail';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem' }}>
        <Link to="/episodio/1">Episodio 1</Link> | <Link to="/episodio/2">Episodio 2</Link>
      </nav>
      <h1>Hola</h1>
      <Routes>
        <Route path="/episodio/:id" element={<EpisodioDetail />} />
        <Route path="*" element={<h1>Selecciona un episodio</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
