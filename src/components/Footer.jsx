import { Link } from 'react-router-dom'
import naiellaLogo from '../assets/naiella_web_logo_3.png'
import nuhanLogo from '../assets/nuhan_logo.png'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer id="contact" style={{ backgroundColor: '#2C2C2C', color: '#FAF9F6', fontFamily: "'Bodoni Moda', serif" }}>
      <div className="footer-wrap" style={{ padding: '64px 60px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '40px' }}>

        {/* 좌측: 로고 + 회사 정보 */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', marginBottom: '20px' }}>
            <img src={naiellaLogo} alt="NAIELLA" style={{ height: '56px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
            <img src={nuhanLogo} alt="NUHAN CHEMS CO., LTD." style={{ height: '28px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.7 }} />
          </div>
          <div style={{ fontSize: '13px', color: '#AAAAAA', lineHeight: '1.9', fontFamily: 'sans-serif' }}>
            <p style={{ fontWeight: '700', color: '#FAF9F6', marginBottom: '4px' }}>Nuhan Chems Co., Ltd.</p>
            <p>CEO : Tae Oh Koo / 32 Yatap-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, 3F #303, Sambu Bldg.</p>
            <p>Business Registration No. 365-81-03577</p>
            <p>Email: gbkoo1219@naver.com</p>
          </div>
          <p style={{ marginTop: '28px', fontSize: '12px', color: '#666', fontFamily: 'sans-serif' }}>
            © 2025 Naiella · Nuhan Chems Co., Ltd. All rights reserved.
          </p>
        </div>

        {/* 우측: 네비게이션 링크 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '4px' }}>
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
            onClick={scrollToTop}
            style={{ fontSize: '13px', letterSpacing: '0.12em', color: '#AAAAAA', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#FAF9F6')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#AAAAAA')}
          >
            Contact
          </button>
        </div>
      </div>
    </footer>
  )
}
