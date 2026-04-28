# Design Spec: Product Image Border Radius & Favicon

**Date:** 2026-04-28

## Overview

Two independent UI improvements to the Naiella web project.

## 1. Product Image Border Radius

### Goal
Apply `border-radius: 16px` to all product images for a softer, modern look.

### Scope
Product images only — excludes hero slider images, logos, and section images.

### Approach
Add `borderRadius: '16px'` to the image container `<div>` (not the `<img>` tag itself). Each container already has `overflow: 'hidden'`, so the image will clip naturally to the rounded corners.

### Files to Change
- `src/components/ProductsPage.jsx` — product grid image container (line 23)
- `src/components/ProductDetail.jsx` — product detail image container (line 61)
- `src/components/ProductSlider.jsx` — slider card image container (line 102)

## 2. Favicon

### Goal
Replace the default Vite favicon with `src/assets/favicon.png`.

### Approach
Update `index.html` `<link rel="icon">` to reference `/src/assets/favicon.png` with `type="image/png"`.

### Files to Change
- `index.html` — update `<link rel="icon">` tag
