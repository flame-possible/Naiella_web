import logo from '../assets/naiella_web_logo.png'

export default function Header() {
  return (
    <header className="w-full border-b border-gray-100">
      <div style={{ padding: '20px 40px' }} className="w-full flex items-center relative">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="NAIELLA" className="h-10 w-auto" />
        </a>

        {/* Navigation - 가운데 정렬 */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-10">
          {['About', 'Product', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm tracking-widest text-gray-700 hover:text-black transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
