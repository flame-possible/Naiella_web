import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))
  const [open, setOpen] = useState(null)
  const [selectedImg, setSelectedImg] = useState(0)

  if (!product) {
    return (
      <div style={{ padding: '120px 80px', fontFamily: "'Bodoni Moda', serif", textAlign: 'center' }}>
        <p style={{ color: '#888', marginBottom: '24px' }}>Product not found.</p>
        <Link to="/" style={{ fontSize: '13px', color: '#1a1a1a', letterSpacing: '0.1em' }}>← Back to Home</Link>
      </div>
    )
  }

  const toggle = (key) => setOpen(open === key ? null : key)

  const images = product.thumbnails && product.thumbnails.length > 0 ? product.thumbnails : [product.image]
  const otherProducts = products.filter((p) => p.id !== product.id)

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

      {/* Main: image gallery + info */}
      <div className="product-detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'flex-start' }}>

        {/* 이미지 갤러리: 메인 + 썸네일 세로 */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {/* 메인 이미지 */}
          <div style={{ flex: 1, aspectRatio: '1/1', overflow: 'hidden', backgroundColor: '#f7f7f5', borderRadius: '16px' }}>
            <img
              src={images[selectedImg]}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
            />
          </div>

          {/* 썸네일 세로 목록 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '76px', flexShrink: 0 }}>
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImg(i)}
                style={{
                  width: '76px',
                  aspectRatio: '1/1',
                  overflow: 'hidden',
                  border: i === selectedImg ? '1.5px solid #1a1a1a' : '1.5px solid transparent',
                  borderRadius: '8px',
                  padding: 0,
                  background: '#f0efec',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                <img
                  src={img}
                  alt={`${product.name} ${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </button>
            ))}
          </div>
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

      {/* 하단 디테일 이미지 가로 행 */}
      {product.detailImages && product.detailImages.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${product.detailImages.length}, 1fr)`, gap: '8px', marginTop: '60px' }}>
          {product.detailImages.map((img, i) => (
            <div key={i} style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
              <img
                src={img}
                alt={`${product.name} detail ${i + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          ))}
        </div>
      )}

      {/* 다른 상품 섹션 */}
      <div style={{ marginTop: '100px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#e5e5e5' }} />
          <p style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#aaa', fontFamily: 'sans-serif', whiteSpace: 'nowrap' }}>
            You May Also Like
          </p>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#e5e5e5' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '24px' }}>
          {otherProducts.map((p) => (
            <Link
              key={p.id}
              to={`/products/${p.id}`}
              onClick={() => setSelectedImg(0)}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ overflow: 'hidden', backgroundColor: '#f7f7f5', aspectRatio: '1/1', marginBottom: '14px' }}>
                <img
                  src={p.image}
                  alt={p.name}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', transition: 'transform 0.4s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <p style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaa', fontFamily: 'sans-serif', marginBottom: '6px' }}>
                Naiella
              </p>
              <p style={{ fontSize: '14px', fontFamily: "'Bodoni Moda', serif", color: '#1a1a1a', lineHeight: '1.3', marginBottom: '6px' }}>
                {p.name}
              </p>
              <p style={{ fontSize: '14px', fontFamily: "'Bodoni Moda', serif", color: '#555' }}>
                {p.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
