import React from 'react'
import ShopPage from './routes/ShopPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPage from './routes/AdminPage';
import AccountPage from './routes/AccountPage';
import AuthPage from './routes/AuthPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShopPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
