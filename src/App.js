// prueba/src/App.js

import React from 'react';
import LandingPage from './components/LandingPage'; // Ajusta la ruta según la estructura de carpetas
// Ruta relativa al archivo LandingPage.js
import './index.css'; // Asegúrate de que Tailwind CSS esté importado

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
