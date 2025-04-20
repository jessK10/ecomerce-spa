import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'



const sampleProducts = [
  {
    id: 1,
    title: 'MacBook Pro M2',
    description: 'Powerful performance with Apple silicon.',
    image: 'https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SX679_.jpg', // ✅ updated image
    price: '$1,299'
  },
  {
    id: 2,
    title: 'Noise Cancelling Headphones',
    description: 'Immersive sound for focused work and play.',
    image: 'https://m.media-amazon.com/images/I/61vJqXjN9rL._AC_SX679_.jpg', // ✅ updated image
    price: '$199'
  },
  {
    id: 3,
    title: 'Ergonomic Laptop Stand',
    description: 'Improve posture and productivity.',
    image: 'https://m.media-amazon.com/images/I/61Z8MQE+x6L._AC_SX679_.jpg', // ✅ updated image
    price: '$39'
  }
]


const Home = () => {
  return (
    <>
    {/* Hero Section */}
<div className="bg-dark text-light p-5 rounded mb-5" style={{
  backgroundColor: '#1f1f1f',
  borderRadius: '1rem',
}}>
  <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
    <div className="mb-4 mb-md-0">
      <h1 className="display-4 fw-bold">Welcome to TechXpress</h1>
      <p className="lead">Your destination for powerful gadgets & next-gen accessories.</p>
      <Button variant="light" size="lg" className="mt-2">Shop Now</Button>
    </div>
    <img
      src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=800&hei=600&fmt=jpeg&qlt=90&.v=1696875114275"
      alt="MacBook Pro"
      className="img-fluid"
      style={{ maxHeight: '300px', borderRadius: '1rem' }}
    />
  </div>
</div>


      {/* New Arrivals Section */}
      <Container>
        <h2 className="mb-4 text-center fw-semibold">New Arrivals</h2>
        <Row className="g-4">
          {sampleProducts.map((product) => (
            <Col key={product.id} md={4}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Home
