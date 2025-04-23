import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Menu from './Components/Menu';
import Inicio from './Pages/Inicio';
import Search from './Pages/Search';
import Estatica from './Pages/Diseño';
import EpisodioDetail from './Pages/EpisodioDetail';
function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/search" element={<Search/>} />
        <Route path="/estatica" element={<Estatica/>} />
        <Route path="episodio/:id" element={<EpisodioDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
