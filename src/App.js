import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Footer />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App