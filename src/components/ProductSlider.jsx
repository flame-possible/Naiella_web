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
            style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
          >
            <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden', borderRadius: '12px', marginBottom: '14px' }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.4s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
            <p style={{ fontFamily: "'Bodoni Moda', serif", fontSize: '16px', fontWeight: '500', color: '#1a1a1a', marginBottom: '4px' }}>
              {product.name}
            </p>
            <p style={{ fontSize: '13px', color: '#888', fontFamily: 'sans-serif' }}>
              {product.price}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
