'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/service-area', label: 'Service Area' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <Link href="/" className="nav-logo">
          <div className="nav-logo-icon">❄️</div>
          <div>
            <div className="nav-logo-text">M.W RESCOM</div>
            <div className="nav-logo-sub">Residential &amp; Commercial</div>
          </div>
        </Link>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={pathname === l.href ? 'active' : ''}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <a href="tel:9022336698" className="nav-phone">📞 902-233-6698</a>
          <Link href="/quote" className="btn-primary">Get a Quote</Link>
        </div>

        <button className="hamburger" onClick={() => setMobileOpen(o => !o)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        {links.map(l => (
          <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link href="/quote" className="cta-mobile" onClick={() => setMobileOpen(false)}>
          Get a Quote →
        </Link>
      </div>
    </>
  )
}
