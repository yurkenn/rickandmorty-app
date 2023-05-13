import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Detail from '../pages/Detail';

import Error from '../components/Error';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" errorElement={<Error />} element={<Home />} />
        <Route path="/character/:character_id" errorElement={<Error />} element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
