import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Navbar, Nav, Container, Badge } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'

const Header = ({ theme, setTheme }) => {
  const location = useLocation()
  const isActive = (path) => (location.pathname === path ? 'active' : '')

  return (
    <Navbar bg={theme === 'dark' ? 'dark' : 'light'} variant={theme === 'dark' ? 'dark' : 'light'} expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className={isActive('/')}>Home</Nav.Link>
            <Nav.Link as={Link} to="/products" className={isActive('/products')}>All Products</Nav.Link>
            <Nav.Link as={Link} to="/categories" className={isActive('/categories')}>Categories</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login" className={isActive('/login')}>
              <FaUser className="me-1" />
              Account
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className={isActive('/cart')}>
              <FaShoppingCart className="me-1" />
              Cart <Badge bg="secondary">1</Badge>
            </Nav.Link>
            <Nav.Link onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
