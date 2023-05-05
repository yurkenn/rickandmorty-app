import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Layout from './components/Layout';
import Locations from './pages/Locations';
import Episodes from './pages/Episodes';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/character/:character_id" element={<Detail />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/episodes" element={<Episodes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
