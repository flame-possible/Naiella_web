import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products'

export default function ProductSlider() {
  const trackRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const startScroll = useRef(0)
  const hasDragged = useRef(false)

  const updateArrows = () => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 1)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 1)
  }

  useEffect(() => {
    updateArrows()
  }, [])

  const getStep = () => {
    const el = trackRef.current
    if (!el || !el.children[0]) return 0
    return el.children[0].offsetWidth + 24 // card width + gap
  }

  const prev = () => trackRef.current?.scrollBy({ left: -getStep(), behavior: 'smooth' })
  const next = () => trackRef.current?.scrollBy({ left: getStep(), behavior: 'smooth' })

  const onMouseDown = (e) => {
    isDragging.current = true
    hasDragged.current = false
    startX.current = e.pageX
    startScroll.current = trackRef.current.scrollLeft
    trackRef.current.style.cursor = 'grabbing'
  }

  const onMouseMove = (e) => {
    if (!isDragging.current) return
    const dx = e.pageX - startX.current
    if (Math.abs(dx) > 3) hasDragged.current = true
    trackRef.current.scrollLeft = startScroll.current - dx
  }

  const onMouseUp = () => {
    isDragging.current = false
    if (trackRef.current) trackRef.current.style.cursor = 'grab'
  }

  const onWheel = (e) => {
    const el = trackRef.current
    if (!el) return
    // 가로 스크롤이 이미 있으면 그냥 둠, 세로 스크롤이면 가로로 전환
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return
    e.preventDefault()
    el.scrollLeft += e.deltaY * 1.5
    updateArrows()
  }

  return (
    <section className="product-slider-section relative w-full" style={{ padding: '72px 0 80px', backgroundColor: '#FAF9F6' }}>
      {/* 섹션 헤더 */}
      <div className="product-slider-header" style={{ padding: '0 80px', marginBottom: '48px' }}>
        <p style={{ fontSize: '12px', letterSpacing: '0.15em', color: '#888', textTransform: 'uppercase', marginBottom: '8px', fontFamily: "'Bodoni Moda', serif" }}>
          Collection
        </p>
        <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 52px)', fontFamily: "'Bodoni Moda', serif", fontWeight: '500', color: '#1a1a1a', lineHeight: '1.1' }}>
          Our Products
        </h2>
      </div>

      {/* 슬라이드 트랙 */}
      <div
        ref={trackRef}
        onScroll={updateArrows}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        style={{
          display: 'flex',
          gap: '24px',
          overflowX: 'scroll',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          cursor: 'grab',
          padding: '0 80px',
          userSelect: 'none',
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="product-slider-card"
            style={{
              flexShrink: 0,
              width: 'calc(25% - 18px)',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
              padding: '0 0 16px 0',
            }}
          >
            {/* 상품 이미지 */}
            <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden', marginBottom: '16px', borderRadius: '12px', flexShrink: 0 }}>
              <img
                src={product.image}
                alt={product.name}
                draggable={false}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', pointerEvents: 'none' }}
              />
            </div>

            {/* 상품 정보 - 고정 높이 영역 */}
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '0 16px' }}>
              <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: '19px', fontWeight: '600', color: '#1a1a1a', marginBottom: '6px' }}>
                {product.name}
              </h3>
              <p style={{ fontSize: '11px', color: '#666', lineHeight: '1.5', marginBottom: '10px' }}>
                {product.desc}
              </p>
              <p style={{ fontSize: '14px', fontWeight: '500', color: '#1a1a1a', marginTop: 'auto', marginBottom: '16px' }}>
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

      {/* 스크롤바 숨김 (WebKit) */}
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>

      {/* 왼쪽 화살표 */}
      <button
        onClick={prev}
        disabled={!canPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center transition-opacity"
        style={{ opacity: canPrev ? 1 : 0.2 }}
        aria-label="Previous"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* 오른쪽 화살표 */}
      <button
        onClick={next}
        disabled={!canNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center transition-opacity"
        style={{ opacity: canNext ? 1 : 0.2 }}
        aria-label="Next"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </section>
  )
}
