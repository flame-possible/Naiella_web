import { Link } from 'react-router-dom'
import logo from '../assets/naiella_web_logo.png'

export default function Footer() {
  return (
    <footer id="contact" style={{ backgroundColor: '#2C2C2C', color: '#FAF9F6', fontFamily: "'Bodoni Moda', serif" }}>
      <div className="footer-wrap" style={{ padding: '64px 60px 48px' }}>

        {/* 상단: 로고 + 네비 가로 + 인스타 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '48px' }}>

          {/* 로고 */}
          <img src={logo} alt="NAIELLA" style={{ height: '40px', width: 'auto', filter: 'brightness(0) invert(1)' }} />

          {/* 네비 가로 — 오른쪽으로 밀착 */}
          <nav style={{ display: 'flex', gap: '48px', marginLeft: 'auto', marginRight: '60px' }}>
            <Link
              to="/"
              style={{ fontSize: '13px', letterSpacing: '0.12em', color: '#AAAAAA', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FAF9F6')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#AAAAAA')}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{ fontSize: '13px', letterSpacing: '0.12em', color: '#AAAAAA', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FAF9F6')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#AAAAAA')}
            >
              About
            </Link>
            <Link
              to="/products"
              style={{ fontSize: '13px', letterSpacing: '0.12em', color: '#AAAAAA', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FAF9F6')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#AAAAAA')}
            >
              Products
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{ fontSize: '13px', letterSpacing: '0.12em', color: '#AAAAAA', background: 'none', border: 'none', cursor: 'pointer', padding: 0, transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FAF9F6')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#AAAAAA')}
            >
              Back to Top
            </button>
          </nav>

          {/* 인스타그램 버튼 (링크 추후 추가) */}
          <a
            href="#"
            aria-label="Instagram"
            style={{ color: '#AAAAAA', transition: 'color 0.2s', lineHeight: 0 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#FAF9F6')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#AAAAAA')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
          </a>
        </div>

        {/* 하단: 회사 정보 + 카피라이트 */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ fontSize: '12px', color: '#666', lineHeight: '1.8', fontFamily: 'sans-serif' }}>
            <p style={{ fontWeight: '700', color: '#AAAAAA', marginBottom: '4px' }}>Nuhan Chems Co., Ltd.</p>
            <p>CEO : Tae Oh Koo / 32 Yatap-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, 3F #303, Sambu Bldg.</p>
            <p>Business Registration No. 365-81-03577 &nbsp;·&nbsp; Email: gbkoo1219@naver.com</p>
          </div>
          <p style={{ fontSize: '12px', color: '#555', fontFamily: 'sans-serif', flexShrink: 0, marginLeft: '40px' }}>
            © 2025 Naiella · Nuhan Chems Co., Ltd. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
