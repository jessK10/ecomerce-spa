import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'

function App() {
  const [theme, setTheme] = useState('dark') 


  useEffect(() => {
    document.body.className = theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'
  }, [theme])

  return (
    <Router>
      <Header theme={theme} setTheme={setTheme} />
      <main className="container mt-4 mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
