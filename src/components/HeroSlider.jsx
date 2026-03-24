import { useState } from 'react'
import logo from '../assets/naiella_web_logo_2.png'
import section1 from '../assets/section_1_1.png'
import section2 from '../assets/section_1_2.png'
import section3 from '../assets/section_1_3.png'

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
  },
  {
    id: 3,
    image: section3,
    text: null,
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  return (
    <section className="relative w-full overflow-hidden bg-white" style={{ height: '80vh' }}>
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)`, height: '80vh' }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className="min-w-full flex flex-col items-center overflow-hidden"
            style={{ height: '80vh' }}
          >
            {/* 이미지 */}
            <img
              src={slide.image}
              alt=""
              className="w-full pointer-events-none flex-shrink-0"
              style={slide.text
                ? { height: '42vh', objectFit: 'cover', objectPosition: 'center' }
                : { height: '80vh', objectFit: 'contain', objectPosition: 'top' }
              }
            />

            {/* 로고 + 텍스트 콘텐츠 (이미지 전용 슬라이드는 생략) */}
            {slide.text && (
              <div className="flex flex-col items-center w-full flex-1 overflow-hidden" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
                {/* 로고 */}
                <img src={logo} alt="NAIELLA" style={{ width: 'clamp(150px, 35vw, 500px)' }} className="mb-2 flex-shrink-0" />

                {/* 본문 텍스트 - 왼쪽 정렬, 넓게 */}
                <div className="w-full text-left overflow-y-auto flex-1" style={{ maxWidth: '1200px', padding: '0 48px', marginTop: '24px' }}>
                  {slide.text.split('\n\n').map((para, idx) => (
                    <p key={idx} className="leading-relaxed text-gray-700 mb-3" style={{ fontSize: '15px' }}>
                      {idx === 0 ? (
                        <>
                          <strong>Naiella</strong>{para.slice('Naiella'.length)}
                        </>
                      ) : para}
                    </p>
                  ))}
                </div>
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
