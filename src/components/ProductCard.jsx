import React from 'react'
import { Card, Button, Badge } from 'react-bootstrap'
import { FaHeart } from 'react-icons/fa'

const ProductCard = ({ product }) => {
  return (
    <Card
      className="product-card border-0 h-100 shadow-sm position-relative"
      style={{
        backgroundColor: 'var(--bs-body-bg)',
        color: 'inherit',
        borderRadius: '1rem',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Heart icon */}
      <div className="position-absolute top-0 end-0 m-2">
        <FaHeart style={{ color: '#dc3545', fontSize: '1.2rem', cursor: 'pointer' }} />
      </div>

      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        className="rounded-top"
        style={{ height: '210px', objectFit: 'cover' }}
      />

      <Card.Body className="d-flex flex-column justify-content-between p-3">
        <div className="mb-2">
          <div className="d-flex justify-content-between align-items-center">
            <Card.Title className="fw-semibold mb-0 text-truncate">{product.title}</Card.Title>
            <Badge bg="primary" pill>NEW</Badge>
          </div>
          <Card.Text className="small text-muted">{product.description}</Card.Text>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-2">
          <span className="fw-bold fs-5">{product.price}</span>
          <Button variant="outline-light" size="sm">Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
