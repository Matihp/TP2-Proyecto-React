import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Home vacío</div>} />
          <Route path="matias" element={<div>Matias vacío</div>} />
          <Route path="maria" element={<div>Maria vacío</div>} />
          <Route path="datos" element={<div>Datos vacío</div>} />
          <Route path="api" element={<div>API vacía</div>} />
          <Route path="galeria" element={<div>Galería vacía</div>} />
          <Route path="bitacora" element={<div>Bitácora vacía</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
