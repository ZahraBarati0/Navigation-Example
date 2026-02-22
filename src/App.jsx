import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Checkout from './pages/Checkout';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  function login(){
    setIsAuth(true);
  }

  function logout(){
    setIsAuth(false);
  }

  return (
    <div className="app">
      <Navbar isAuth={isAuth} onLogout={logout} />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login onLogin={login} />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Checkout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App