import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="nav-logo" style={{ marginBottom: 0, display: 'flex', gap: 12, alignItems: 'center' }}>
            <div className="nav-logo-icon">❄️</div>
            <div>
              <div className="nav-logo-text">M.W RESCOM</div>
              <div className="nav-logo-sub">Residential &amp; Commercial Limited</div>
            </div>
          </div>
          <p>Halifax&apos;s trusted outdoor services company. Professional snow removal, ice control, and landscaping for residential and commercial properties.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {[
              ['/', 'Home'],
              ['/about', 'About Us'],
              ['/services', 'Services'],
              ['/service-area', 'Service Area'],
              ['/quote', 'Get a Quote'],
              ['/contact', 'Contact Us'],
            ].map(([href, label]) => (
              <li key={href}><Link href={href}>{label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul className="footer-links">
            {['Snow Removal', 'Ice Control', 'Salting', 'Landscaping', 'GoNano Treatment', 'Season Pass'].map(s => (
              <li key={s}><Link href="/services">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <div className="footer-contact-item">📞 <a href="tel:9022336698">902-233-6698</a></div>
          <div className="footer-contact-item">✉️ <a href="mailto:contact@mwresidentialcommercial.ca" style={{ fontSize: 12 }}>contact@mwresidentialcommercial.ca</a></div>
          <div className="footer-contact-item">🕐 Mon–Sun: 8AM–8PM</div>
          <div className="footer-contact-item">🚨 Emergency: 24/7</div>
          <div style={{ marginTop: 16, fontSize: 13, color: 'var(--gray)' }}>📍 Halifax, Nova Scotia</div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 M.W Residential And Commercial Limited. All rights reserved.</span>
        <span>Halifax, Nova Scotia 🇨🇦</span>
      </div>
    </footer>
  )
}
