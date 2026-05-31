import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomeDashboard from './views/HomeDashboard/HomeDashboard';
import Bitacora from './views/Bitacora/Bitacora';
import RenderTree from './views/RenderTree/RenderTree';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeDashboard />} />
          <Route path="matias" element={<div>Matias vacío</div>} />
          <Route path="maria" element={<div>Maria vacío</div>} />
          <Route path="datos" element={<div>Datos vacío</div>} />
          <Route path="api" element={<div>API vacía</div>} />
          <Route path="galeria" element={<div>Galería vacía</div>} />
          <Route path="bitacora" element={<Bitacora />} />
          <Route path="arbol" element={<RenderTree />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
