import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home',        href: '#home' },
  { label: 'Programs',    href: '#programs' },
  { label: 'Pillars',     href: '#pillars' },
  { label: 'Benefits',    href: '#benefits' },
  { label: 'Why Nepzo',   href: '#why-nepzo' },
]

function scrollToSection(href) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    const offset = 72
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const openModal = () => {
    window.dispatchEvent(new CustomEvent('open-custom-modal', {
      detail: { type: 'inquiry', section: 'Navbar Contact Button' }
    }))
    setMenuOpen(false)
  }

  return (
    <>
      <header className={`nz-navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nz-navbar-inner">
          {/* Logo */}
          <a href="#home" className="nz-navbar-logo" onClick={(e) => { e.preventDefault(); scrollToSection('#home') }}>
            <img src="/nepzobg.png" alt="NEPZO Logo" />
          </a>

          {/* Desktop Nav */}
          <nav className="nz-navbar-links">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nz-navbar-link"
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href) }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="nz-navbar-actions">
            <a href="https://sckoolchess.com" target="_blank" rel="noopener noreferrer" className="nz-navbar-sckool-link">
              <img src="/SUPERMANFINAL.png" alt="SckoolChess" className="nz-navbar-sckool-logo" />
            </a>
            <button className="nz-navbar-cta" onClick={openModal}>
              Get In Touch
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="nz-navbar-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`nz-drawer-backdrop${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Right-side slide drawer */}
      <aside className={`nz-mobile-drawer${menuOpen ? ' open' : ''}`}>
        <div className="nz-drawer-header">
          <img src="/nepzobg.png" alt="NEPZO" className="nz-drawer-logo" />
          <button className="nz-drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        <nav className="nz-mobile-nav">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nz-mobile-link"
              onClick={(e) => { e.preventDefault(); scrollToSection(item.href); setMenuOpen(false) }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button className="nz-mobile-cta" onClick={openModal}>Get In Touch</button>
      </aside>
    </>
  )
}
