import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Carrinho from './pages/Carrinho'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/sobre" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Carrinho} />
      </Routes>
    </Router>
  )
}

export default App