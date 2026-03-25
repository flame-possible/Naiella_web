import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import Section2 from './components/Section2'
import ProductSlider from './components/ProductSlider'
import VideoSlider from './components/VideoSlider'
import Section5 from './components/Section5'
import Footer from './components/Footer'
import './index.css'

function App() {
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

export default App
