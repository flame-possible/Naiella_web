import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import Section2 from './components/Section2'
import ProductSlider from './components/ProductSlider'
import VideoSlider from './components/VideoSlider'
import Section5 from './components/Section5'
import Footer from './components/Footer'
import AboutPage from './components/AboutPage'
import ProductDetail from './components/ProductDetail'
import ScrollToTop from './components/ScrollToTop'
import './index.css'

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider />
      <Section2 />
      <ProductSlider />
      <VideoSlider />
      <Section5 />
      <Footer />
    </div>
  )
}

function ProductPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ProductDetail />
      <Footer />
    </div>
  )
}

function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutPage />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
