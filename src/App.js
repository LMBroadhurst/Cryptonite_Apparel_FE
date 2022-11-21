import React from 'react'
import ShopPage from './routes/ShopPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPage from './routes/AdminPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShopPage />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
