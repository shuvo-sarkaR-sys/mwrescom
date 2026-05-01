'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const slides = [
  {
    tag: '❄️ Season 2024–2025',
    title: <>CLEARING<br />THE WAY<br /><span>WITH QUIET</span><br />EXCELLENCE</>,
    desc: "Halifax's most trusted snow removal & ice control service. Residential and commercial. We're there before you wake up.",
    bg: 'linear-gradient(135deg, #020f1a 0%, #0a2a40 40%, #0a85c2 100%)',
    btns: [
      { href: '/quote', label: 'Book Now', primary: true },
      { href: '/services', label: 'Our Services', primary: false },
    ],
    svg: (
      <svg width="100%" height="100%" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="g1" cx="70%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#0a85c2" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#020f1a" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1400" height="800" fill="url(#g1)"/>
        <rect x="0" y="650" width="1400" height="150" fill="#04253a" opacity="0.8"/>
        <rect x="0" y="648" width="1400" height="4" fill="#0a85c2" opacity="0.5"/>
        <g transform="translate(800,480)" opacity="0.15">
          <rect x="0" y="80" width="300" height="120" rx="10" fill="#fff"/>
          <rect x="-80" y="130" width="100" height="60" rx="5" fill="#fff"/>
          <circle cx="50" cy="200" r="30" fill="#555"/>
          <circle cx="230" cy="200" r="30" fill="#555"/>
        </g>
        <g fill="white" opacity="0.6">
          <circle cx="200" cy="100" r="3"/><circle cx="400" cy="200" r="2"/><circle cx="600" cy="80" r="4"/>
          <circle cx="800" cy="150" r="2"/><circle cx="1000" cy="120" r="3"/><circle cx="1200" cy="200" r="2"/>
          <circle cx="300" cy="300" r="3"/><circle cx="700" cy="250" r="4"/><circle cx="1100" cy="350" r="2"/>
        </g>
      </svg>
    ),
  },
  {
    tag: '🏠 Residential Service',
    title: <>YOUR<br />DRIVEWAY<br /><span>CLEARED</span><br />BY 6AM</>,
    desc: 'Season passes starting at $600. Full coverage from November 1 to April 1. Service begins at 5cm accumulation.',
    bg: 'linear-gradient(135deg, #020f1a 0%, #04253a 50%, #062a40 100%)',
    btns: [
      { href: '/quote', label: 'Reserve Season Pass', primary: true },
      { href: '/services', label: 'View Pricing', primary: false },
    ],
    svg: (
      <svg width="100%" height="100%" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="g2" cx="30%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#0a85c2" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#020f1a" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1400" height="800" fill="url(#g2)"/>
        <g transform="translate(700,300)" opacity="0.12" fill="white">
          <rect x="0" y="150" width="400" height="250"/>
          <polygon points="0,150 200,0 400,150"/>
          <rect x="150" y="280" width="100" height="120"/>
          <rect x="50" y="200" width="80" height="80"/>
          <rect x="270" y="200" width="80" height="80"/>
        </g>
        <g fill="white" opacity="0.5">
          <circle cx="100" cy="80" r="3"/><circle cx="350" cy="160" r="2"/><circle cx="550" cy="60" r="4"/>
          <circle cx="850" cy="130" r="2"/><circle cx="1050" cy="100" r="3"/>
        </g>
      </svg>
    ),
  },
  {
    tag: '🏢 Commercial Service',
    title: <>24/7<br />EMERGENCY<br /><span>ICE</span><br />CONTROL</>,
    desc: 'Protecting your business parking lots, walkways and loading docks. Commercial contracts with priority service guaranteed.',
    bg: 'linear-gradient(135deg, #04253a 0%, #020f1a 60%, #0a1f30 100%)',
    btns: [
      { href: '/quote', label: 'Get Commercial Quote', primary: true },
      { href: '/contact', label: 'Call Us Now', primary: false },
    ],
    svg: (
      <svg width="100%" height="100%" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="g3" cx="80%" cy="60%" r="50%">
            <stop offset="0%" stopColor="#ff6b1a" stopOpacity="0.12"/>
            <stop offset="100%" stopColor="#020f1a" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1400" height="800" fill="url(#g3)"/>
        <g fill="white" opacity="0.5">
          <circle cx="120" cy="100" r="4"/><circle cx="380" cy="200" r="3"/><circle cx="620" cy="70" r="2"/>
          <circle cx="880" cy="140" r="4"/><circle cx="1080" cy="110" r="2"/>
        </g>
      </svg>
    ),
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="hero">
      {slides.map((s, i) => (
        <div key={i} className={`slide${i === current ? ' active' : ''}`}>
          <div className="slide-bg" style={{ background: s.bg }}>{s.svg}</div>
          <div className="slide-overlay" />
          <div className="slide-content">
            <div className="slide-tag">{s.tag}</div>
            <h1 className="slide-title">{s.title}</h1>
            <p className="slide-desc">{s.desc}</p>
            <div className="slide-btns">
              {s.btns.map(b => (
                <Link key={b.label} href={b.href} className={b.primary ? 'btn-primary' : 'btn-outline'}>
                  {b.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="hero-indicators">
        {slides.map((_, i) => (
          <button key={i} className={`indicator${i === current ? ' active' : ''}`} onClick={() => setCurrent(i)} />
        ))}
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </div>
  )
}
