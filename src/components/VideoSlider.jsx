import { useState, useRef, useEffect } from 'react'
import video1 from '../assets/section_4_1.mp4'
import video2 from '../assets/section_4_2.mp4'
import video3 from '../assets/section_4_3.mp4'
import video4 from '../assets/section_4_4.mp4'

const slides = [
  { id: 1, src: video1 },
  { id: 2, src: video2 },
  { id: 3, src: video3 },
  { id: 4, src: video4 },
]

export default function VideoSlider() {
  const [current, setCurrent] = useState(0)
  const videoRefs = useRef([])

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === current) {
        video.currentTime = 0
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, [current])

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  return (
    <section className="relative w-full overflow-hidden bg-black" style={{ height: '92vh' }}>
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)`, height: '92vh' }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className="min-w-full"
            style={{ height: '92vh', backgroundColor: '#111' }}
          >
            <video
              ref={(el) => (videoRefs.current[i] = el)}
              src={slide.src}
              muted
              playsInline
              onEnded={next}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>

      {/* 왼쪽 화살표 */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center hover:opacity-50 transition-opacity"
        aria-label="Previous"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* 오른쪽 화살표 */}
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center hover:opacity-50 transition-opacity"
        aria-label="Next"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* 하단 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-white' : 'w-1.5 bg-gray-600'}`}
          />
        ))}
      </div>
    </section>
  )
}
