# helloklean.com 레퍼런스 리디자인 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** helloklean.com을 레퍼런스로 Naiella 웹사이트의 색상(크림+딥그린), 레이아웃, 인터랙션을 전면 리디자인한다.

**Architecture:** 7개 파일을 독립적으로 수정한다. 공유 디자인 토큰은 CSS 변수로 `index.css`에 정의하고 각 컴포넌트는 inline style로 해당 값을 참조한다. 컴포넌트 구조는 유지하고 스타일만 교체한다.

**Tech Stack:** React 18, Vite, Tailwind CSS v4, inline styles (기존 패턴 유지)

---

## 파일 맵

| 파일 | 작업 |
|------|------|
| `src/index.css` | body 배경색 + CSS 변수 정의 + 모바일 그리드 조정 |
| `src/components/Header.jsx` | sticky + 크림 배경 + blur + border |
| `src/components/Footer.jsx` | 다크 배경 + 2단 레이아웃 + 텍스트 색상 |
| `src/components/HeroSlider.jsx` | 슬라이드1 풀스크린 오버레이 + CTA 버튼 |
| `src/components/Section2.jsx` | 배경/텍스트 색상 + padding |
| `src/components/ProductSlider.jsx` | 카드 스타일 + 이미지 배경 + 버튼 색상 |
| `src/components/ProductsPage.jsx` | 4열 그리드 + 카드 스타일 + 호버 인터랙션 |

---

## Task 1: index.css — 전역 색상 변수 + body 배경

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: CSS 변수 및 body 배경 적용**

`src/index.css`의 `body` 블록과 `:root` 변수를 아래로 교체한다:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Bodoni+Moda:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@300;400;500&display=swap');
@import "tailwindcss";

:root {
  --bg-base: #FAF9F6;
  --bg-card: #FFFFFF;
  --bg-section: #F0EDE8;
  --text-primary: #2C2C2C;
  --text-secondary: #888888;
  --text-muted: #AAAAAA;
  --accent: #5A6E4A;
  --btn-primary: #2C2C2C;
  --footer-bg: #2C2C2C;
  --border: #E8E4DE;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--bg-base);
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
}
```

- [ ] **Step 2: 모바일 반응형 그리드 — 4열 기준으로 조정**

`@media (max-width: 768px)` 블록의 `.products-grid` 라인을 확인한다. 현재 `repeat(2, 1fr)`이므로 그대로 유지 (4열 → 모바일 2열). `@media (max-width: 480px)`의 `1fr`도 유지. 변경 없음.

- [ ] **Step 3: 브라우저에서 배경색 변경 확인**

`http://localhost:5173` 에서 body 배경이 흰색(`#fff`)에서 크림(`#FAF9F6`)으로 바뀐 것을 확인한다.

- [ ] **Step 4: Commit**

```bash
git add src/index.css
git commit -m "style: add design tokens and set cream background"
```

---

## Task 2: Header — sticky + 크림 배경 + blur

**Files:**
- Modify: `src/components/Header.jsx`

- [ ] **Step 1: header 태그에 sticky 및 배경 스타일 적용**

`src/components/Header.jsx`의 `<header>` 태그를 아래로 교체한다:

```jsx
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
```

- [ ] **Step 2: 네비게이션 링크 색상 통일**

데스크탑 nav의 `<Link>` className에서 `text-gray-700`을 제거하고 색상을 inline style로 고정한다. 3개 링크(About, Products, Contact) 모두 동일하게:

```jsx
<Link
  to="/about"
  style={{ fontSize: '13px', letterSpacing: '0.12em', color: '#2C2C2C', textDecoration: 'none', transition: 'color 0.2s' }}
  onMouseEnter={(e) => (e.currentTarget.style.color = '#5A6E4A')}
  onMouseLeave={(e) => (e.currentTarget.style.color = '#2C2C2C')}
>
  About
</Link>
```

Products, Contact 링크도 동일 패턴 적용. Contact는 `<a>` 태그이므로 동일하게 style 적용.

- [ ] **Step 3: 모바일 메뉴 배경색 통일**

모바일 드롭다운 `<nav>`에 배경색 추가:

```jsx
<nav className="flex md:hidden flex-col" style={{ borderTop: '1px solid #E8E4DE', background: '#FAF9F6' }}>
```

모바일 메뉴 링크 색상도 `#2C2C2C`로 통일 (이미 `#1a1a1a`이므로 `#2C2C2C`로 교체).

- [ ] **Step 4: 브라우저에서 sticky 동작 확인**

`http://localhost:5173` 에서 스크롤 시 헤더가 상단에 고정되고 배경 blur가 적용되는지 확인한다.

- [ ] **Step 5: Commit**

```bash
git add src/components/Header.jsx
git commit -m "style: sticky header with cream background and blur"
```

---

## Task 3: Footer — 다크 배경 + 2단 레이아웃

**Files:**
- Modify: `src/components/Footer.jsx`

- [ ] **Step 1: Footer 전체 교체**

`src/components/Footer.jsx`를 아래로 완전히 교체한다:

```jsx
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
          <Link to="/about" style={{ fontSize: '13px', letterSpacing: '0.12em', color: '#AAAAAA', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#FAF9F6')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#AAAAAA')}>
            About
          </Link>
          <Link to="/products" style={{ fontSize: '13px', letterSpacing: '0.12em', color: '#AAAAAA', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#FAF9F6')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#AAAAAA')}>
            Products
          </Link>
          <button onClick={scrollToTop} style={{ fontSize: '13px', letterSpacing: '0.12em', color: '#AAAAAA', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#FAF9F6')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#AAAAAA')}>
            Contact
          </button>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: 모바일에서 footer 2단 → 1단 확인**

`index.css`의 `.footer-wrap` 미디어쿼리가 padding만 조정하므로, flex 레이아웃이 모바일에서 자연스럽게 줄 바꿈되는지 `http://localhost:5173` 에서 창 폭을 줄여 확인한다. 필요시 `index.css`의 `.footer-wrap` 미디어쿼리에 `flex-direction: column !important;`를 추가한다.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.jsx src/index.css
git commit -m "style: dark footer with two-column layout"
```

---

## Task 4: HeroSlider — 슬라이드1 풀스크린 오버레이 + CTA

**Files:**
- Modify: `src/components/HeroSlider.jsx`

현재 슬라이드 1은 이미지(42vh) + 텍스트가 아래에 분리된 구조다. 이미지를 92vh 풀스크린으로 확장하고 텍스트/로고/CTA를 `position: absolute` 오버레이로 올린다.

- [ ] **Step 1: 슬라이드 1 렌더링 로직 교체**

`src/components/HeroSlider.jsx`에서 slides 배열 안 각 슬라이드를 렌더링하는 JSX 블록을 찾는다. 현재 `slide.text`가 있으면 이미지 아래에 텍스트 영역을 따로 렌더링한다. 이 로직 전체를 아래로 교체한다:

```jsx
{slides.map((slide, i) => (
  <div
    key={slide.id}
    className="min-w-full relative overflow-hidden"
    style={{ height: '92vh' }}
  >
    {/* 배경 이미지 */}
    <img
      src={slide.image}
      alt=""
      className="w-full h-full pointer-events-none"
      style={{ objectFit: slide.fit ?? 'cover', objectPosition: 'center' }}
    />

    {/* 오버레이 이미지 (슬라이드 3) */}
    {slide.overlay && (
      <img
        src={slide.overlay}
        alt=""
        className="pointer-events-none"
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '85%', maxWidth: '1000px' }}
      />
    )}

    {/* 슬라이드 1: 텍스트 오버레이 */}
    {slide.text && (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.50) 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 48px',
        }}
      >
        <img
          src={logo}
          alt="NAIELLA"
          style={{ width: 'clamp(120px, 25vw, 360px)', marginBottom: '24px', filter: 'brightness(0) invert(1)' }}
        />
        <div style={{ maxWidth: '720px', textAlign: 'center', marginBottom: '36px' }}>
          {slide.text.split('\n\n').map((para, idx) => (
            <p key={idx} style={{ color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(13px, 1.4vw, 16px)', lineHeight: '1.7', fontFamily: "'Bodoni Moda', serif", fontWeight: '500', marginBottom: idx < slide.text.split('\n\n').length - 1 ? '12px' : 0 }}>
              {idx === 0 ? <><strong style={{ color: '#fff' }}>Naiella</strong>{para.slice('Naiella'.length)}</> : para}
            </p>
          ))}
        </div>
        <a
          href="/products"
          style={{
            display: 'inline-block',
            padding: '13px 36px',
            background: '#FAF9F6',
            color: '#2C2C2C',
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontFamily: "'Inter', sans-serif",
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#2C2C2C'; e.currentTarget.style.color = '#FAF9F6'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#FAF9F6'; e.currentTarget.style.color = '#2C2C2C'; }}
        >
          Shop Now
        </a>
      </div>
    )}
  </div>
))}
```

- [ ] **Step 2: slides 배열에서 슬라이드 2 fit 확인**

`slides` 배열에서 슬라이드 2(`fit: 'contain'`)가 그대로 유지되는지 확인한다. 변경 없음.

- [ ] **Step 3: 브라우저에서 슬라이드 1 오버레이 확인**

`http://localhost:5173` 에서 슬라이드 1이 풀스크린 이미지 위에 텍스트+CTA가 오버레이로 표시되는지 확인한다. 슬라이드 2, 3도 정상 표시되는지 확인한다.

- [ ] **Step 4: Commit**

```bash
git add src/components/HeroSlider.jsx
git commit -m "style: hero slide 1 fullscreen overlay with CTA button"
```

---

## Task 5: Section2 — 배경/텍스트 색상 + padding

**Files:**
- Modify: `src/components/Section2.jsx`

- [ ] **Step 1: section 배경 + padding 변경**

`<section>` 태그의 style을 교체한다:

```jsx
<section
  className="section2-wrap w-full flex items-center"
  style={{ marginTop: '0', backgroundColor: '#FAF9F6', padding: '72px 0' }}
>
```

- [ ] **Step 2: 좌측 대형 텍스트 색상 변경**

좌측 `<p>` 태그의 `color: '#c0bdb8'`을 `#2C2C2C`로 교체한다:

```jsx
<p style={{ fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: '1', color: '#2C2C2C', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.01em', fontFamily: "'Bodoni Moda', serif" }}>
  Supporting the skin's natural rhythm, not forcing change
</p>
```

- [ ] **Step 3: 우측 텍스트 색상 통일**

우측 텍스트 블록들의 `color: '#000000'`을 `#2C2C2C`로 교체한다. 해당 style 속성이 있는 `<p>` 태그 4개 모두 적용.

- [ ] **Step 4: 브라우저 확인**

`http://localhost:5173` 에서 Section2 배경이 크림으로 바뀌고 텍스트가 소프트블랙으로 표시되는지 확인한다.

- [ ] **Step 5: Commit**

```bash
git add src/components/Section2.jsx
git commit -m "style: section2 cream background and softblack text"
```

---

## Task 6: ProductSlider — 카드 스타일 + 버튼

**Files:**
- Modify: `src/components/ProductSlider.jsx`

- [ ] **Step 1: 섹션 배경색 변경**

`<section>` 태그의 `bg-white`를 제거하고 inline style로 배경 지정:

```jsx
<section className="product-slider-section relative w-full" style={{ padding: '72px 0 80px', backgroundColor: '#FAF9F6' }}>
```

- [ ] **Step 2: 카드 컨테이너 스타일 추가**

`product-slider-card` `<div>`에 카드 배경 + 라운드 + 그림자 추가:

```jsx
<div
  key={product.id}
  className="product-slider-card"
  style={{
    flexShrink: 0,
    width: 'calc(25% - 18px)',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
    padding: '0 0 16px 0',
  }}
>
```

- [ ] **Step 3: 이미지 컨테이너 배경 + 카드 내부 padding 조정**

이미지 컨테이너 `<div>`의 `backgroundColor`를 `#F0EDE8`으로 교체. `borderRadius: '16px'`는 이미 적용되어 있으므로 제거(카드 자체에 overflow:hidden이 있으므로):

```jsx
<div style={{ width: '100%', aspectRatio: '3/4', overflow: 'hidden', marginBottom: '16px', backgroundColor: '#F0EDE8', flexShrink: 0 }}>
```

상품 정보 영역과 버튼에 좌우 padding 추가:

```jsx
<div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '0 16px' }}>
```

- [ ] **Step 4: View Product 버튼 색상 변경**

`<Link>` 버튼의 backgroundColor를 `#2C2C2C`로, 호버를 `#5A6E4A`로 교체:

```jsx
<Link
  to={`/product/${product.id}`}
  style={{
    display: 'block',
    width: 'calc(100% - 32px)',
    margin: '0 16px',
    padding: '12px',
    backgroundColor: '#2C2C2C',
    color: '#FAF9F6',
    fontSize: '11px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    textAlign: 'center',
    textDecoration: 'none',
    boxSizing: 'border-box',
  }}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#5A6E4A')}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2C2C2C')}
>
  View Product
</Link>
```

- [ ] **Step 5: 브라우저 확인**

`http://localhost:5173` 홈에서 ProductSlider 섹션 배경이 크림이고, 카드에 흰 배경+그림자가 생겼는지 확인한다.

- [ ] **Step 6: Commit**

```bash
git add src/components/ProductSlider.jsx
git commit -m "style: product slider card redesign with cream bg and dark button"
```

---

## Task 7: ProductsPage — 4열 그리드 + 카드 + 호버

**Files:**
- Modify: `src/components/ProductsPage.jsx`

- [ ] **Step 1: 페이지 배경 + 그리드 4열 변경**

`<section>` style에 배경 추가, 그리드를 4열로 변경:

```jsx
<section
  className="products-page-wrap"
  style={{ padding: '72px 80px 100px', backgroundColor: '#FAF9F6', minHeight: '70vh' }}
>
```

그리드 `<div>`:

```jsx
<div
  className="products-grid"
  style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px 24px' }}
>
```

- [ ] **Step 2: 카드 래퍼에 스타일 추가**

각 product를 감싸는 `<div>`에 카드 스타일 적용:

```jsx
<div
  key={product.id}
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
    transition: 'box-shadow 0.2s',
    padding: '0 0 16px 0',
  }}
  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)')}
  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 1px 6px rgba(0,0,0,0.06)')}
>
```

- [ ] **Step 3: 이미지 컨테이너 배경 + 호버 줌**

이미지 컨테이너 `<div>` backgroundColor를 `#F0EDE8`으로, `borderRadius: '16px'` 유지:

```jsx
<div style={{ width: '100%', aspectRatio: '3/4', overflow: 'hidden', marginBottom: '0', backgroundColor: '#F0EDE8', borderRadius: '0' }}>
  <img
    src={product.image}
    alt={product.name}
    style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', transition: 'transform 0.4s ease' }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
  />
</div>
```

- [ ] **Step 4: 상품 정보 영역 padding + 버튼 색상**

상품 정보 `<div>`에 padding 추가:

```jsx
<div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '16px 16px 0' }}>
```

View Product `<Link>` 버튼:

```jsx
<Link
  to={`/product/${product.id}`}
  style={{
    display: 'block',
    width: 'calc(100% - 32px)',
    margin: '0 16px',
    padding: '12px',
    backgroundColor: '#2C2C2C',
    color: '#FAF9F6',
    fontSize: '11px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    textAlign: 'center',
    textDecoration: 'none',
    boxSizing: 'border-box',
  }}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#5A6E4A')}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2C2C2C')}
>
  View Product
</Link>
```

- [ ] **Step 5: 브라우저에서 전체 확인**

`http://localhost:5173/products` 에서 4열 그리드, 카드 흰 배경+그림자, 호버 시 이미지 줌+카드 그림자 강화가 동작하는지 확인한다. 창 폭을 768px 이하로 줄여 2열로 전환되는지도 확인한다.

- [ ] **Step 6: Commit**

```bash
git add src/components/ProductsPage.jsx
git commit -m "style: products page 4-column grid with card hover interactions"
```

---

## 셀프 리뷰 체크리스트

- [x] 스펙 §1 색상 팔레트: Task 1 CSS 변수로 모두 정의됨
- [x] 스펙 §① Header sticky + blur: Task 2에서 처리
- [x] 스펙 §② HeroSlider 오버레이 + CTA: Task 4에서 처리
- [x] 스펙 §③ Section2 배경/텍스트: Task 5에서 처리
- [x] 스펙 §④ ProductSlider 카드+버튼: Task 6에서 처리
- [x] 스펙 §⑤ ProductsPage 4열+호버: Task 7에서 처리
- [x] 스펙 §⑥ Footer 다크+2단: Task 3에서 처리
- [x] 스펙 §⑦ index.css 전역: Task 1에서 처리
- [x] ProductDetail 변경사항: 이미 완료(스펙 §3-1), 이 계획에서 제외
- [x] VideoSlider, Section5, AboutPage: 이번 범위 외, 제외
