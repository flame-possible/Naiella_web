import { Link } from 'react-router-dom'
import products from '../data/products'

export default function ProductSlider() {
  return (
    <section style={{ padding: '72px 80px 80px', backgroundColor: '#FAF9F6' }}>
      {/* 섹션 헤더 */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px' }}>
        <div>
          <p style={{ fontSize: '12px', letterSpacing: '0.15em', color: '#888', textTransform: 'uppercase', marginBottom: '8px', fontFamily: "'Bodoni Moda', serif" }}>
            Collection
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 52px)', fontFamily: "'Bodoni Moda', serif", fontWeight: '500', color: '#1a1a1a', lineHeight: '1.1' }}>
            Our Products
          </h2>
        </div>
        <Link
          to="/products"
          style={{ fontSize: '12px', letterSpacing: '0.12em', color: '#888', textDecoration: 'none', borderBottom: '1px solid #ccc', paddingBottom: '2px', transition: 'color 0.2s, border-color 0.2s', whiteSpace: 'nowrap' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#1a1a1a'; e.currentTarget.style.borderColor = '#1a1a1a' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; e.currentTarget.style.borderColor = '#ccc' }}
        >
          View All
        </Link>
      </div>

      {/* 4열 그리드 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px 24px' }}>
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
              <p style={{ fontSize: '14px', color: '#2C2C2C', fontFamily: "'Bodoni Moda', serif", marginTop: '4px', marginBottom: '12px' }}>
                {product.price}
              </p>
              <div
                style={{
                  padding: '10px',
                  backgroundColor: '#2C2C2C',
                  color: '#FAF9F6',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#5A6E4A')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2C2C2C')}
              >
                View Product
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
