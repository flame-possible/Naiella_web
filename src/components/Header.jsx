import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/naiella_web_logo.png'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToContact = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className="w-full"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(250,249,246,0.92)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderBottom: '1px solid #E8E4DE',
        }}
      >
        <div style={{ padding: '20px 40px' }} className="w-full flex items-center relative">
          {/* Logo */}
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="NAIELLA" className="h-10 w-auto" />
          </Link>

          {/* Navigation - 데스크탑 */}
          <nav className="absolute left-1/2 -translate-x-1/2 items-center gap-10 hidden md:flex">
            <Link
              to="/about"
              style={{ fontSize: '13px', letterSpacing: '0.12em', color: '#2C2C2C', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#5A6E4A')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#2C2C2C')}
            >
              About
            </Link>
            <Link
              to="/products"
              style={{ fontSize: '13px', letterSpacing: '0.12em', color: '#2C2C2C', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#5A6E4A')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#2C2C2C')}
            >
              Products
            </Link>
            <a
              href="#contact"
              onClick={scrollToContact}
              style={{ fontSize: '13px', letterSpacing: '0.12em', color: '#2C2C2C', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#5A6E4A')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#2C2C2C')}
            >
              Contact
            </a>
          </nav>

          {/* 햄버거 / X 버튼 - 모바일 */}
          <button
            className="flex md:hidden"
            style={{ position: 'absolute', right: '40px', background: 'none', border: 'none', cursor: 'pointer', padding: '4px', lineHeight: 0 }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? (
              /* X 아이콘 */
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round">
                <line x1="3" y1="3" x2="17" y2="17" />
                <line x1="17" y1="3" x2="3" y2="17" />
              </svg>
            ) : (
              /* 햄버거 아이콘 */
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round">
                <line x1="0" y1="1" x2="22" y2="1" />
                <line x1="0" y1="8" x2="22" y2="8" />
                <line x1="0" y1="15" x2="22" y2="15" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* 풀스크린 모바일 메뉴 오버레이 */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 49,
          backgroundColor: 'rgba(250,249,246,0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'opacity 0.35s ease',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {NAV_ITEMS.map(({ label, to, href }, i) => (
          to ? (
            <Link
              key={label}
              to={to}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Bodoni Moda', serif",
                fontSize: 'clamp(36px, 10vw, 56px)',
                fontWeight: '400',
                color: '#2C2C2C',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                padding: '12px 0',
                transition: `opacity 0.4s ease ${menuOpen ? i * 80 : 0}ms, transform 0.4s ease ${menuOpen ? i * 80 : 0}ms, color 0.2s`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#AAAAAA')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#2C2C2C')}
            >
              {label}
            </Link>
          ) : (
            <a
              key={label}
              href={href}
              onClick={scrollToContact}
              style={{
                fontFamily: "'Bodoni Moda', serif",
                fontSize: 'clamp(36px, 10vw, 56px)',
                fontWeight: '400',
                color: '#2C2C2C',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                padding: '12px 0',
                transition: `opacity 0.4s ease ${menuOpen ? i * 80 : 0}ms, transform 0.4s ease ${menuOpen ? i * 80 : 0}ms, color 0.2s`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#AAAAAA')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#2C2C2C')}
            >
              {label}
            </a>
          )
        ))}
      </div>

    </>
  )
}
