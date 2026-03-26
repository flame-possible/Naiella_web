import naiellaLogo from '../assets/naiella_web_logo_4.png'
import aboutBg from '../assets/about_bg.png'

export default function AboutPage() {
  return (
    <section
      className="about-wrap"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '72px 80px',
      }}
    >
      {/* 로고 */}
      <div>
        <img src={naiellaLogo} alt="NAIELLA" style={{ height: '30px', width: 'auto' }} />
      </div>

      {/* 본문 텍스트 */}
      <div style={{ maxWidth: '680px', marginTop: '32px', display: 'flex', flexDirection: 'column' }}>
        <p style={{ fontSize: '15px', lineHeight: '1.2', color: '#1a1a1a', marginBottom: '24px', fontFamily: 'sans-serif' }}>
          <strong style={{ fontStyle: 'italic' }}>Naiella</strong> believes in the natural evolution of beauty through the rhythm of nature.
        </p>
        <p style={{ fontSize: '15px', lineHeight: '1.2', color: '#1a1a1a', marginBottom: '24px', fontFamily: 'sans-serif' }}>
          In a world defined by speed and constant demand, true beauty is often reduced to quick results and surface-level change. Naiella believes beauty should be approached differently—not as temporary enhancement, but as a return to authentic harmony between inner balance and outer radiance.
        </p>
        <p style={{ fontSize: '15px', lineHeight: '1.2', color: '#1a1a1a', marginBottom: '24px', fontFamily: 'sans-serif' }}>
          Guided by this philosophy, Naiella brings together bio-inspired precision and the skin’s innate potential. By respecting the skin’s natural rhythm and supporting its ability to restore itself, we create formulations that help nurture resilience, balance, and healthy luminosity over time.
        </p>
        <p style={{ fontSize: '15px', lineHeight: '1.2', color: '#1a1a1a', marginBottom: '24px', fontFamily: 'sans-serif' }}>
          Rooted in botanical energy and refined aesthetic science, Naiella offers more than skincare. It presents a thoughtful ritual for those who seek sophistication, intention, and meaningful self-care. Each experience is designed to reconnect the individual with a sense of balance, calm, and natural vitality.
        </p>
        <p style={{ fontSize: '15px', lineHeight: '1.2', color: '#1a1a1a', fontFamily: 'sans-serif' }}>
          Naiella is not simply a cosmetic brand; it is a Bio-Inspired Ritual for the refined individual—an invitation to experience beauty as something that evolves gracefully, not instantly.
        </p>
        <p style={{ fontSize: '15px', lineHeight: '1.2', color: '#1a1a1a', fontFamily: 'sans-serif' }}>
          True beauty is not defined by haste, but by sustainable vitality that deepens and blooms with time. This is the path Naiella has chosen and continues to walk with devotion.
        </p>
      </div>

      {/* CEO 서명 */}
      <div style={{ textAlign: 'right', marginTop: '40px' }}>
        <span style={{ fontSize: '15px', fontFamily: 'sans-serif', color: '#1a1a1a' }}>
          <strong>CEO</strong>&nbsp;&nbsp;Tae Oh Koo
        </span>
      </div>
    </section>
  )
}
