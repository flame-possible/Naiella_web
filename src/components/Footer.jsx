import naiellaLogo from '../assets/naiella_web_logo_3.png'
import nuhanLogo from '../assets/nuhan_logo.png'

export default function Footer() {
  return (
    <footer id="contact" style={{ backgroundColor: '#fff', color: '#333', fontFamily: "'Bodoni Moda', serif", borderTop: '1px solid #e5e5e5' }}>

      <div style={{ padding: '64px 60px 48px' }}>
        {/* 로고 2개 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', marginBottom: '16px' }}>
          <img src={naiellaLogo} alt="NAIELLA" style={{ height: '56px', width: 'auto' }} />
          <img src={nuhanLogo} alt="NUHAN CHEMS CO., LTD." style={{ height: '28px', width: 'auto' }} />
        </div>

        {/* 회사 정보 */}
        <div style={{ fontSize: '13px', color: '#888', lineHeight: '1.9', fontFamily: 'sans-serif' }}>
          <p style={{ fontWeight: '700', color: '#333', marginBottom: '4px' }}>Nuhan Chems Co., Ltd.</p>
          <p>CEO : Tae Oh Koo / 32 Yatap-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, 3F #303, Sambu Bldg.</p>
          <p>Business Registration No. 365-81-03577</p>
          <p>Email: gbkoo1219@naver.com</p>
        </div>

        {/* 카피라이트 */}
        <p style={{ marginTop: '32px', fontSize: '12px', color: '#bbb', fontFamily: 'sans-serif' }}>
          © 2025 Naiella · Nuhan Chems Co., Ltd. All rights reserved.
        </p>
      </div>

    </footer>
  )
}
