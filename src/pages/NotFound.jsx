import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container className="text-center mt-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">Oops! Page Not Found</h2>
      <p className="mb-4">The page you're looking for doesn't exist or has been moved.</p>
      <Button variant="dark" as={Link} to="/">Go Back Home</Button>
    </Container>
  )
}

export default NotFound
