import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Cart from './pages/Cart'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Footer />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/sobre" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
      </Routes>
    </Router>
  )
}

export default App