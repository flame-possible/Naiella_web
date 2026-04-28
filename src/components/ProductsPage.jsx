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
          <div
            key={product.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'stretch',
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
              transition: 'box-shadow 0.2s',
              padding: '0 0 16px 0',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 1px 6px rgba(0,0,0,0.06)')}
          >
            {/* 이미지 */}
            <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden', marginBottom: '0', borderRadius: '12px' }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.4s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>

            {/* 정보 */}
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '16px 16px 0' }}>
              <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginBottom: '6px' }}>
                {product.name}
              </h3>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5', marginBottom: '10px' }}>
                {product.desc}
              </p>
              <p style={{ fontSize: '15px', fontWeight: '500', color: '#1a1a1a', marginTop: 'auto', marginBottom: '16px' }}>
                {product.volume} &nbsp;|&nbsp; {product.price}
              </p>
            </div>

            <Link
              to={`/product/${product.id}`}
              style={{
                display: 'block',
                width: 'calc(100% - 32px)',
                margin: '0 16px',
                padding: '12px',
                backgroundColor: '#2C2C2C',
                color: '#FAF9F6',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textAlign: 'center',
                textDecoration: 'none',
                boxSizing: 'border-box',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#5A6E4A')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2C2C2C')}
            >
              View Product
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
