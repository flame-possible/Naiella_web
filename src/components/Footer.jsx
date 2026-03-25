import logo from '../assets/naiella_web_logo_2.png'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a1a1a', color: '#ccc', fontFamily: "'Bodoni Moda', serif" }}>

      {/* 뉴스레터 */}
      <div style={{ borderBottom: '1px solid #333', padding: '64px 80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
        <div>
          <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: '8px' }}>Stay in the ritual</p>
          <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 32px)', fontWeight: '400', color: '#f5f5f5', lineHeight: '1.2' }}>
            Subscribe for exclusive drops<br />& skincare rituals
          </h3>
        </div>
        <form
          style={{ display: 'flex', gap: '0', flexShrink: 0 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your email address"
            style={{
              padding: '14px 20px',
              backgroundColor: 'transparent',
              border: '1px solid #444',
              borderRight: 'none',
              color: '#f5f5f5',
              fontSize: '13px',
              outline: 'none',
              width: '280px',
              fontFamily: "'Bodoni Moda', serif",
            }}
          />
          <button
            type="submit"
            style={{
              padding: '14px 28px',
              backgroundColor: '#f5f5f5',
              color: '#1a1a1a',
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'Bodoni Moda', serif",
              whiteSpace: 'nowrap',
            }}
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* 메인 링크 영역 */}
      <div style={{ padding: '64px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '40px', borderBottom: '1px solid #333' }}>

        {/* 브랜드 */}
        <div>
          <img src={logo} alt="NAIELLA" style={{ width: '140px', marginBottom: '20px', filter: 'invert(1) brightness(0.8)' }} />
          <p style={{ fontSize: '13px', lineHeight: '1.7', color: '#888' }}>
            Nature-led care for skin that grows stronger over time. Seoul · Est. 2025
          </p>
          {/* 소셜 */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
            {[
              { label: 'Instagram', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
              { label: 'TikTok', d: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.52V6.75a4.85 4.85 0 01-1.02-.06z' },
              { label: 'Pinterest', d: 'M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z' },
            ].map(({ label, d }) => (
              <button key={label} aria-label={label} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#888' }}
                onMouseEnter={e => e.currentTarget.style.color = '#f5f5f5'}
                onMouseLeave={e => e.currentTarget.style.color = '#888'}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d={d} />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Shop */}
        <div>
          <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#f5f5f5', marginBottom: '20px' }}>Shop</p>
          {['All Products', 'Serums & Essences', 'Moisturizers', 'Cleansers', 'Eye Care', 'Gift Sets', 'New Arrivals', 'Best Sellers'].map(item => (
            <p key={item} style={{ fontSize: '13px', color: '#888', marginBottom: '10px', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.color = '#f5f5f5'}
              onMouseLeave={e => e.currentTarget.style.color = '#888'}
            >{item}</p>
          ))}
        </div>

        {/* About */}
        <div>
          <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#f5f5f5', marginBottom: '20px' }}>About</p>
          {['Our Story', 'Ingredients', 'Sustainability', 'Certifications', 'Press', 'Stockists', 'Careers'].map(item => (
            <p key={item} style={{ fontSize: '13px', color: '#888', marginBottom: '10px', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.color = '#f5f5f5'}
              onMouseLeave={e => e.currentTarget.style.color = '#888'}
            >{item}</p>
          ))}
        </div>

        {/* Help */}
        <div>
          <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#f5f5f5', marginBottom: '20px' }}>Help</p>
          {['FAQ', 'Shipping & Delivery', 'Returns & Exchanges', 'Order Tracking', 'Contact Us', 'Store Locator'].map(item => (
            <p key={item} style={{ fontSize: '13px', color: '#888', marginBottom: '10px', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.color = '#f5f5f5'}
              onMouseLeave={e => e.currentTarget.style.color = '#888'}
            >{item}</p>
          ))}
          {/* 인증 배지 */}
          <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {['✦ Cruelty-Free', '✦ Vegan Formula', '✦ Clean Beauty Certified'].map(badge => (
              <span key={badge} style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#666' }}>{badge}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 법적 고지 */}
      <div style={{ padding: '24px 80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <p style={{ fontSize: '11px', color: '#555' }}>© 2025 Naiella. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '24px' }}>
          {['Privacy Policy', 'Terms of Use', 'Cookie Settings', 'Accessibility'].map(item => (
            <span key={item} style={{ fontSize: '11px', color: '#555', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.color = '#888'}
              onMouseLeave={e => e.currentTarget.style.color = '#555'}
            >{item}</span>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#555', cursor: 'pointer' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
          </svg>
          English (USD)
        </div>
      </div>

    </footer>
  )
}
