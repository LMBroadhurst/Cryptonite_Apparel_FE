import React from 'react'
import ShopPage from './routes/ShopPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
