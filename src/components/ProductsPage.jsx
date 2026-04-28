import { Link } from 'react-router-dom'
import products from '../data/products'

export default function ProductsPage() {
  return (
    <section className="products-page-wrap" style={{ padding: '72px 80px 100px', backgroundColor: '#FAF9F6', minHeight: '70vh' }}>

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
      <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px 24px' }}>
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
          >
            {/* 이미지 */}
            <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden', borderRadius: '12px 12px 0 0', backgroundColor: '#F0EDE8', flexShrink: 0 }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.4s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>

            {/* 텍스트 영역 */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '0 0 12px 12px',
              padding: '16px 16px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              border: '1px solid #EEEBE6',
              borderTop: 'none',
            }}>
              <p style={{ fontFamily: "'Bodoni Moda', serif", fontSize: '15px', fontWeight: '500', color: '#1a1a1a', lineHeight: '1.3' }}>
                {product.name}
              </p>
              <p style={{ fontSize: '12px', color: '#AAAAAA', fontFamily: 'sans-serif' }}>
                {product.volume}
              </p>
              <p style={{ fontSize: '14px', color: '#2C2C2C', fontFamily: "'Bodoni Moda', serif", marginTop: '4px' }}>
                {product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
