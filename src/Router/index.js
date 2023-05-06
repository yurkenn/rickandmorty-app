import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Locations from '../pages/Locations';
import Episodes from '../pages/Episodes';
import Error from '../components/Error';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" errorElement={<Error />} element={<Navbar />}>
          <Route path="/" errorElement={<Error />} element={<Home />} />
          <Route path="/character/:character_id" errorElement={<Error />} element={<Detail />} />
          <Route path="/locations" errorElement={<Error />} element={<Locations />} />
          <Route path="/episodes" errorElement={<Error />} element={<Episodes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
