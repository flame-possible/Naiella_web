import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/naiella_web_logo.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToContact = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
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
        <Link to="/">
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

        {/* 햄버거 버튼 - 모바일 */}
        <button
          className="flex md:hidden flex-col justify-center gap-1.5"
          style={{ position: 'absolute', right: '40px' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: '#1a1a1a', transition: 'all 0.3s', transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: '#1a1a1a', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: '#1a1a1a', transition: 'all 0.3s', transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {/* 모바일 메뉴 드롭다운 */}
      {menuOpen && (
        <nav className="flex md:hidden flex-col" style={{ borderTop: '1px solid #E8E4DE', background: '#FAF9F6' }}>
          <Link to="/about" onClick={() => setMenuOpen(false)}
            style={{ padding: '16px 40px', fontSize: '13px', letterSpacing: '0.15em', color: '#2C2C2C', textDecoration: 'none', borderBottom: '1px solid #f5f5f5' }}>
            About
          </Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}
            style={{ padding: '16px 40px', fontSize: '13px', letterSpacing: '0.15em', color: '#2C2C2C', textDecoration: 'none', borderBottom: '1px solid #f5f5f5' }}>
            Products
          </Link>
          <a href="#contact" onClick={scrollToContact}
            style={{ padding: '16px 40px', fontSize: '13px', letterSpacing: '0.15em', color: '#2C2C2C', textDecoration: 'none' }}>
            Contact
          </a>
        </nav>
      )}
    </header>
  )
}
