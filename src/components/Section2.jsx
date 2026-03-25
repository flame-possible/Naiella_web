export default function Section2() {
  return (
    <section className="w-full flex items-center" style={{ marginTop: '40px' }}>
      {/* 왼쪽 텍스트 */}
      <div className="w-1/2 flex items-start" style={{ padding: '48px 56px 48px 48px', fontFamily: "'Bodoni Moda', serif" }}>
        <p style={{ fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: '1', color: '#c0bdb8', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.01em' }}>
          Supporting the skin's natural rhythm, not forcing change
        </p>
      </div>

      {/* 오른쪽 텍스트 */}
      <div className="w-1/2" style={{ padding: '48px 48px 48px 56px', fontFamily: "'Bodoni Moda', serif",  }}>
        {/* 상단 3줄 */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '15px', lineHeight: '1.4', color: '#000000', fontWeight: '500' }}>Bio-engineered ritual curated for the refined skin.</p>
          <p style={{ fontSize: '15px', lineHeight: '1.4', color: '#000000', fontWeight: '500' }}>Formulaic precision recalibrating the modern rhythms.</p>
          <p style={{ fontSize: '15px', lineHeight: '1.4', color: '#000000', fontWeight: '500' }}>Molecular harmony stabilizing the quiet vitality.</p>
        </div>

        {/* 본문 단락 */}
        <div style={{ fontSize: '15px', lineHeight: '1.4', color: '#000000', textAlign: 'justify', fontWeight: '500' }}>
          <p style={{ marginBottom: '4px' }}>
            <em style={{ fontStyle: 'italic', fontWeight: '700' }}>Naiella</em> is a skincare brand that embraces the natural evolution of beauty through the rhythm of nature. Instead of relying on harsh interventions, we focus on botanical energy and the skin's natural balance, helping it nurture its healthy radiance over time.
          </p>
          <p>
            With thoughtfully selected ingredients, balanced formulations, and a commitment to sustainable choices, Naiella soothes unnecessary stress on the skin and supports long-term skin wellness. We believe true beauty is not about quick results, but about sustainable vitality that blooms naturally with time.
          </p>
        </div>
      </div>
    </section>
  )
}
