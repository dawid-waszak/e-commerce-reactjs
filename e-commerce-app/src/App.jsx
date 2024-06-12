import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Nav from './components/Nav/Nav.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UseEffectFunction } from './UseHooks/UseEffectFunction.jsx'

function App() {

  if(UseEffectFunction()){

    return (
      <>
        <Nav/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

export default App
