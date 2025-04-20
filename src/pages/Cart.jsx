import React from 'react'
import { Container, Row, Col, Button, ListGroup, Image } from 'react-bootstrap'

const Cart = () => {
  // Fake item for demo
  const cartItems = [
    {
      id: 1,
      title: 'MacBook Pro M2',
      price: 1299,
      quantity: 1,
      image: 'https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SX679_.jpg',
    }
  ]

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <Container className="mt-4">
      <h2 className="mb-4">🛒 Your Cart</h2>
      <ListGroup variant="flush">
        {cartItems.map(item => (
          <ListGroup.Item key={item.id} className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3">
              <Image src={item.image} alt={item.title} width={80} height={80} rounded />
              <div>
                <h6 className="mb-1">{item.title}</h6>
                <p className="mb-0 text-muted">Qty: {item.quantity}</p>
              </div>
            </div>
            <span className="fw-bold">${item.price * item.quantity}</span>
          </ListGroup.Item>
        ))}
        <ListGroup.Item className="d-flex justify-content-between">
          <strong>Total:</strong>
          <strong>${total}</strong>
        </ListGroup.Item>
      </ListGroup>
      <div className="text-end mt-3">
        <Button variant="success">Proceed to Checkout</Button>
      </div>
    </Container>
  )
}

export default Cart
