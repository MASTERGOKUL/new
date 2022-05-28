import React from 'react';
import Filter from './components/filter/filter';
import Index from './components/index';
import Login from './components/login/signup/login';
import Product from './components/productDeatails/productDeatails';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Index />} />
          <Route path="Login" element={<Login />} />
          <Route path="productDeatails" element={<Product />} />
          <Route path="Filter" element={<Filter/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
