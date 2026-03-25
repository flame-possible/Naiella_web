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
          <p style={{ fontWeight: '700', color: '#333', marginBottom: '4px' }}>주식회사 에이피알</p>
          <p>대표이사 : 구태오 / 서울특별시 송파구 올림픽로 300, 36층 (신천동, 롯데월드타워)</p>
          <p>사업자등록번호 220-88-89441 &nbsp;</p>
          <p>전자우편주소: cs123@apr-in.com</p>
        </div>

        {/* 카피라이트 */}
        <p style={{ marginTop: '32px', fontSize: '12px', color: '#bbb', fontFamily: 'sans-serif' }}>
          © 2025 Naiella · Nuhan Chems Co., Ltd. All rights reserved.
        </p>
      </div>

    </footer>
  )
}
