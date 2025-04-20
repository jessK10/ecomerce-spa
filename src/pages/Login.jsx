import React from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Card style={{ width: '100%', maxWidth: '400px' }} className="p-4 shadow-sm">
        <h3 className="text-center mb-4">Login</h3>
        <Form>
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">Login</Button>
        </Form>
        <div className="text-center mt-3">
          <small>Don't have an account? <Link to="/signup">Sign Up</Link></small>
        </div>
      </Card>
    </Container>
  )
}

export default Login
