import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))
  const [open, setOpen] = useState(null)

  if (!product) {
    return (
      <div style={{ padding: '120px 80px', fontFamily: "'Bodoni Moda', serif", textAlign: 'center' }}>
        <p style={{ color: '#888', marginBottom: '24px' }}>Product not found.</p>
        <Link to="/" style={{ fontSize: '13px', color: '#1a1a1a', letterSpacing: '0.1em' }}>← Back to Home</Link>
      </div>
    )
  }

  const toggle = (key) => setOpen(open === key ? null : key)

  const accordionSections = [
    {
      key: 'howto',
      label: 'How to Use',
      content: <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#555', fontFamily: 'sans-serif' }}>{product.howToUse}</p>,
    },
    {
      key: 'efficacy',
      label: 'Efficacy',
      content: (
        <div>
          {product.efficacy.split('\n').map((line, i) => (
            <p key={i} style={{ fontSize: '14px', lineHeight: '1.8', color: '#555', fontFamily: 'sans-serif' }}>{line}</p>
          ))}
        </div>
      ),
    },
    {
      key: 'ingredients',
      label: 'Ingredients',
      content: <p style={{ fontSize: '13px', lineHeight: '1.9', color: '#555', fontFamily: 'sans-serif' }}>{product.ingredients}</p>,
    },
  ]

  return (
    <div className="product-detail-wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 80px 100px' }}>

      {/* Breadcrumb */}
      <p style={{ fontSize: '12px', color: '#aaa', letterSpacing: '0.08em', marginBottom: '48px', fontFamily: 'sans-serif' }}>
        <Link to="/" style={{ color: '#aaa', textDecoration: 'none' }}>Home</Link>
        {' '}/{' '}
        <Link to="/products" style={{ color: '#aaa', textDecoration: 'none' }}>Products</Link>
        {' '}/{' '}
        <span style={{ color: '#1a1a1a' }}>{product.name}</span>
      </p>

      {/* Main: image + info */}
      <div className="product-detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'flex-start' }}>

        {/* 이미지 */}
        <div style={{ aspectRatio: '3/4', overflow: 'hidden', backgroundColor: '#ffffff', borderRadius: '16px' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
          />
        </div>

        {/* 상품 정보 */}
        <div style={{ paddingTop: '8px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: '12px', fontFamily: 'sans-serif' }}>
            Naiella
          </p>
          <h1 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontFamily: "'Bodoni Moda', serif", fontWeight: '500', color: '#1a1a1a', lineHeight: '1.15', marginBottom: '20px' }}>
            {product.name}
          </h1>
          <p style={{ fontSize: '15px', color: '#888', fontFamily: 'sans-serif', marginBottom: '8px' }}>
            {product.volume}
          </p>
          <p style={{ fontSize: '22px', fontFamily: "'Bodoni Moda', serif", color: '#1a1a1a', marginBottom: '28px' }}>
            {product.price}
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#555', fontFamily: 'sans-serif', marginBottom: '40px', borderTop: '1px solid #e5e5e5', paddingTop: '28px' }}>
            {product.desc}
          </p>

          {/* 아코디언 */}
          <div style={{ marginTop: '40px', borderTop: '1px solid #e5e5e5' }}>
            {accordionSections.map(({ key, label, content }) => (
              <div key={key} style={{ borderBottom: '1px solid #e5e5e5' }}>
                <button
                  onClick={() => toggle(key)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '18px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontSize: '13px', letterSpacing: '0.1em', color: '#1a1a1a', fontFamily: 'sans-serif' }}>{label}</span>
                  <span style={{ fontSize: '18px', color: '#aaa', lineHeight: 1 }}>{open === key ? '−' : '+'}</span>
                </button>
                {open === key && (
                  <div style={{ paddingBottom: '20px' }}>
                    {content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
