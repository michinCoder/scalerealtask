import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/HomePage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductDetail from './Components/HomePage/ProductDetail';
import Cart from './Components/HomePage/Cart';
import Profile from './Components/Profile/Profile';

import { CartProvider } from './CartContext';


function App() {
  return (
  <>
  <BrowserRouter>
  <CartProvider>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/productDetail' element={<HomePage/>}/>
    <Route path='/product/:productID' element={<ProductDetail />}/>    
    <Route path='/cart' element={<Cart />}/>
    <Route path='/profile' element={ <Profile/> } />
  </Routes>
  </CartProvider>
  </BrowserRouter>
  </>
  );
}

export default App;
