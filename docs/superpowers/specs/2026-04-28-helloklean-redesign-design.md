# Design Spec: helloklean.com 레퍼런스 기반 UI/UX 리디자인

**Date:** 2026-04-28  
**Reference:** https://helloklean.com/  
**Scope:** 전체 레이아웃 + 스타일 (Option B — Full)

---

## 1. 디자인 시스템

### 색상 팔레트 (Option C — 크림 + 딥그린)
| 역할 | 값 | 설명 |
|------|-----|------|
| 배경 (기본) | `#FAF9F6` | 따뜻한 크림 화이트 |
| 배경 (카드) | `#FFFFFF` | 순백 카드 |
| 배경 (보조 섹션) | `#F0EDE8` | 살짝 어두운 크림 |
| 텍스트 (기본) | `#2C2C2C` | 소프트 블랙 |
| 텍스트 (보조) | `#888888` | 미디엄 그레이 |
| 텍스트 (서브) | `#AAAAAA` | 라이트 그레이 |
| 강조 (딥그린) | `#5A6E4A` | 정제된 브랜드 그린 |
| 버튼 (기본) | `#2C2C2C` | 검정 버튼 |
| 버튼 (보조) | `transparent` + border `#2C2C2C` | 아웃라인 버튼 |
| 푸터 배경 | `#2C2C2C` | 다크 푸터 |
| 테두리 | `#E8E4DE` | 따뜻한 베이지 계열 라인 |

### 타이포그래피 (현재 유지)
- **헤딩:** Bodoni Moda (serif)
- **본문/UI:** Inter (sans-serif)
- letter-spacing, line-height 등 현재 값 유지

---

## 2. 컴포넌트별 변경 사항

### ① Header (`src/components/Header.jsx`)
- **sticky 고정:** `position: sticky; top: 0; z-index: 50`
- **배경:** `#FAF9F6` + `backdrop-filter: blur(8px)` + `background: rgba(250,249,246,0.92)`
- **하단 border:** `1px solid #E8E4DE`
- 네비게이션 링크 색상: `#2C2C2C` (현재 `#374151` → 통일)
- 그 외 구조 유지

### ② HeroSlider (`src/components/HeroSlider.jsx`)
- 슬라이드 1 (텍스트 슬라이드):
  - 현재: 이미지(42vh) + 텍스트 분리 아래 배치
  - 변경: 이미지 풀스크린(`height: 92vh`) + 텍스트/로고/CTA를 이미지 위 오버레이(`position: absolute`)
  - 오버레이 배경: `linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 100%)`
  - 텍스트 색상: `#FFFFFF`
  - CTA 버튼: "Shop Now" — 배경 `#FAF9F6`, 텍스트 `#2C2C2C`, `letter-spacing: 0.15em`
- 슬라이드 2, 3: 현재와 동일 (풀스크린 이미지)

### ③ Section2 (`src/components/Section2.jsx`)
- 배경색: `#FAF9F6` (현재 흰색 → 크림)
- 좌측 대형 텍스트 색상: `#2C2C2C` (현재 `#C0BDB8` → 진하게)
- 우측 본문 텍스트: `#2C2C2C`
- 섹션 상하 padding 증가: `72px`

### ④ ProductSlider (`src/components/ProductSlider.jsx`)
- 섹션 배경: `#FAF9F6`
- 카드 배경: `#FFFFFF`, `border-radius: 12px`, `box-shadow: 0 1px 6px rgba(0,0,0,0.06)`
- 이미지 컨테이너 배경: `#F0EDE8` (현재 `#FFFFFF`)
- "View Product" 버튼: `#2C2C2C` 배경 → 호버 시 `#5A6E4A`

### ⑤ ProductsPage (`src/components/ProductsPage.jsx`)
- 페이지 배경: `#FAF9F6`
- 그리드: 3열 → **4열** (`repeat(4, 1fr)`)
- 카드 배경: `#FFFFFF`, `border-radius: 12px`, `box-shadow: 0 1px 6px rgba(0,0,0,0.06)`
- 이미지 컨테이너 배경: `#F0EDE8`
- 호버: 이미지 `transform: scale(1.04)` + 카드 `box-shadow` 강화
- "View Product" 버튼: `#2C2C2C` → 호버 `#5A6E4A`

### ⑥ Footer (`src/components/Footer.jsx`)
- 배경: `#2C2C2C` (현재 `#FFFFFF` → 다크)
- 텍스트: `#FAF9F6` (로고), `#AAAAAA` (본문), `#666` (카피라이트)
- border-top 제거 (다크 배경으로 자연 구분)
- 레이아웃: 로고+회사정보 좌측, 네비게이션 링크 우측 (2단 컬럼)

### ⑦ index.css (전역)
- `body` 배경색: `#FAF9F6`
- 모바일 반응형 그리드: 4열 → 2열 유지 (기존 `.products-grid` 미디어쿼리 조정)

---

## 3. 변경하지 않는 것
- 폰트 (Bodoni Moda, Inter) — 현재 유지
- VideoSlider, Section5, AboutPage, ProductDetail — 이번 범위 외
- 라우팅, 데이터 구조 (`products.js`) — 변경 없음
- 이미 적용된 `border-radius: 16px` 제품 이미지 — 유지

---

## 4. 구현 순서 (독립성 기준)
1. `index.css` — body 배경 + 전역 컬러 변수
2. `Header.jsx` — sticky + 크림 배경
3. `Footer.jsx` — 다크 배경 + 2단 레이아웃
4. `HeroSlider.jsx` — 오버레이 + CTA
5. `Section2.jsx` — 배경/텍스트 색상
6. `ProductSlider.jsx` — 카드 스타일 + 버튼
7. `ProductsPage.jsx` — 4열 그리드 + 카드 + 호버
