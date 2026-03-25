import { Link } from 'react-router-dom'
import products from '../data/products'

export default function ProductsPage() {
  return (
    <section style={{ padding: '72px 80px 100px', backgroundColor: '#fff', minHeight: '70vh' }}>

      {/* 헤더 */}
      <div style={{ marginBottom: '56px' }}>
        <p style={{ fontSize: '12px', letterSpacing: '0.15em', color: '#888', textTransform: 'uppercase', marginBottom: '8px', fontFamily: "'Bodoni Moda', serif" }}>
          Collection
        </p>
        <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 52px)', fontFamily: "'Bodoni Moda', serif", fontWeight: '500', color: '#1a1a1a', lineHeight: '1.1' }}>
          Our Products
        </h1>
      </div>

      {/* 상품 그리드 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px 32px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ display: 'flex', flexDirection: 'column' }}>
            {/* 이미지 */}
            <div style={{ width: '100%', aspectRatio: '3/4', overflow: 'hidden', marginBottom: '16px', backgroundColor: '#f0f0f0' }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
              />
            </div>

            {/* 정보 */}
            <div style={{ height: '140px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: '22px', fontWeight: '500', color: '#1a1a1a', marginBottom: '6px', flexShrink: 0 }}>
                {product.name}
              </h3>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5', marginBottom: '10px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                {product.desc}
              </p>
              <p style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', marginTop: 'auto', marginBottom: '16px', flexShrink: 0 }}>
                {product.price}
              </p>
            </div>

            <Link
              to={`/product/${product.id}`}
              style={{
                display: 'block',
                width: '100%',
                padding: '12px',
                backgroundColor: '#7d8f6e',
                color: '#fff',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textAlign: 'center',
                textDecoration: 'none',
                boxSizing: 'border-box',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#6a7a5c')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#7d8f6e')}
            >
              View Product
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
