import { useState, useEffect } from 'react'
import logo from '../assets/naiella_web_logo_2.png'
import section1 from '../assets/section_1_1.png'
import section2 from '../assets/section_1_2.png'
import section3 from '../assets/section_1_3.png'
import section3overlay from '../assets/section_1_3_1.png'

const slides = [
  {
    id: 1,
    image: section1,
    text: `Naiella is a skincare brand that embraces the natural evolution of beauty through the rhythm of nature. By harmonizing bio-inspired precision with the skin's innate potential, we create a synergy between advanced aesthetic science and the organic flow of time. Instead of relying on harsh interventions, we focus on botanical energy and the skin's natural balance, helping it nurture its healthy radiance over time.

With thoughtfully selected ingredients, balanced formulations, and a commitment to sustainable choices, Naiella soothes unnecessary stress on the skin and supports long-term skin wellness. Our high-performance molecular complexes support the appearance of skin density and resilience, fostering a stabilized harmony that helps the skin resist the visible signs of modern environmental fatigue. We believe true beauty is not about quick results, but about sustainable vitality that blooms naturally with time.`,
  },
  {
    id: 2,
    image: section2,
    text: null,
    fit: 'contain',
  },
  {
    id: 3,
    image: section3,
    overlay: section3overlay,
    text: null,
    fit: 'cover',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  return (
    <section className="relative w-full bg-white" style={{ minHeight: '92vh', overflowX: 'hidden' }}>
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className="min-w-full relative overflow-hidden"
            style={{ height: '92vh' }}
          >
            {/* 배경 이미지 */}
            <img
              src={slide.image}
              alt=""
              className="w-full h-full pointer-events-none"
              style={{ objectFit: slide.fit ?? 'cover', objectPosition: 'center' }}
            />

            {/* 오버레이 이미지 (슬라이드 3) */}
            {slide.overlay && (
              <img
                src={slide.overlay}
                alt=""
                className="pointer-events-none"
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '85%', maxWidth: '1000px' }}
              />
            )}

            {/* 슬라이드 1: 텍스트 오버레이 */}
            {slide.text && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.50) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 48px',
                }}
              >
                <img
                  src={logo}
                  alt="NAIELLA"
                  style={{ width: 'clamp(120px, 25vw, 360px)', marginBottom: '24px', filter: 'brightness(0) invert(1)' }}
                />
                <div style={{ maxWidth: '720px', textAlign: 'center', marginBottom: '36px' }}>
                  {slide.text.split('\n\n').map((para, idx) => (
                    <p key={idx} style={{ color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(13px, 1.4vw, 16px)', lineHeight: '1.7', fontFamily: "'Bodoni Moda', serif", fontWeight: '500', marginBottom: idx < slide.text.split('\n\n').length - 1 ? '12px' : 0 }}>
                      {idx === 0 ? <><strong style={{ color: '#fff' }}>Naiella</strong>{para.slice('Naiella'.length)}</> : para}
                    </p>
                  ))}
                </div>
                <a
                  href="/products"
                  style={{
                    display: 'inline-block',
                    padding: '13px 36px',
                    background: '#FAF9F6',
                    color: '#2C2C2C',
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    fontFamily: "'Inter', sans-serif",
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#2C2C2C'; e.currentTarget.style.color = '#FAF9F6'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#FAF9F6'; e.currentTarget.style.color = '#2C2C2C'; }}
                >
                  Shop Now
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 왼쪽 화살표 */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center hover:opacity-50 transition-opacity"
        aria-label="Previous"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* 오른쪽 화살표 */}
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center hover:opacity-50 transition-opacity"
        aria-label="Next"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* 하단 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-black w-6' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </section>
  )
}
