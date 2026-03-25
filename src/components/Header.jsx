import { Link } from 'react-router-dom'
import logo from '../assets/naiella_web_logo.png'

export default function Header() {
  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="w-full border-b border-gray-100">
      <div style={{ padding: '20px 40px' }} className="w-full flex items-center relative">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="NAIELLA" className="h-10 w-auto" />
        </Link>

        {/* Navigation - 가운데 정렬 */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-10">
          <Link to="/about" className="text-sm tracking-widest text-gray-700 hover:text-black transition-colors duration-200">
            About
          </Link>
          <Link to="/products" className="text-sm tracking-widest text-gray-700 hover:text-black transition-colors duration-200">
            Product
          </Link>
          <a href="#contact" onClick={scrollToContact} className="text-sm tracking-widest text-gray-700 hover:text-black transition-colors duration-200">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
