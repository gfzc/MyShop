
import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './components/Home';
import { ProductDetails } from './components/products/ProductDetail';
//Router que se trae desde react-router-dom para comunicar con el front, es diferente al express que comunica con el back
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/admin/Dashboard';
import { ProductList } from './components/admin/ProductList';
import Cart from './components/cart/Cart';


function App() {
  return (
    <Router>

    <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/producto/:id" element={<ProductDetails />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/productList" element={<ProductList />}/>
            <Route path="/carrito" element={<Cart />}/>
          </Routes>
        </div>
        <Footer />
    </div>
    </Router>
  );
}

export default App;