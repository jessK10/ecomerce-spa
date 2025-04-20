import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container className="text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} Ecommerce Store. All rights reserved.</p>
        <small>Made with ❤️ using React + Bootstrap</small>
      </Container>
    </footer>
  )
}

export default Footer
