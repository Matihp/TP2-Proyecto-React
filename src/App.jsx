import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomeDashboard from './views/HomeDashboard/HomeDashboard';
import MatiasProfile from './views/MatiasProfile/MatiasProfile';
import MariaProfile from './views/MariaProfile/MariaProfile';
import DataExplorer from './views/DataExplorer/DataExplorer';
import ApiIntegration from './views/ApiIntegration/ApiIntegration';
import Bitacora from './views/Bitacora/Bitacora';
import RenderTree from './views/RenderTree/RenderTree';
import Gallery from './views/Gallery/Gallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeDashboard />} />
          <Route path="matias" element={<MatiasProfile />} />
          <Route path="maria" element={<MariaProfile />} />
          <Route path="datos" element={<DataExplorer />} />
          <Route path="api" element={<ApiIntegration />} />
          <Route path="galeria" element={<Gallery />} />
          <Route path="bitacora" element={<Bitacora />} />
          <Route path="arbol" element={<RenderTree />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
