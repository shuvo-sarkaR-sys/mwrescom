import Link from 'next/link'
import Image from 'next/image'
export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="nav-logo" style={{ marginBottom: 0, display: 'flex', gap: 12, alignItems: 'center' }}>
           <Image src="/logo-2.avif" alt="M.W RESCOM" width={120} height={100} />
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
            <li><Link href="/services#snowremoval">Snow Removal</Link></li>
            <li><Link href="/services#snowremoval">Ice Control </Link></li>

            <li><Link href="/#seasonpass">Season Pass</Link></li>
            <li><Link href="/services#snowremoval">Salting</Link></li>
                   <li><Link href="/services#landscaping">Landscaping</Link></li>
            <li><a href="https://gonano.com/en/science" rel="noopener noreferrer">GoNano Treatment</a></li>

            
      
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <div className="footer-contact-item"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20,  }} >
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
 <a href="tel:9022336698">902-233-6698</a></div>
          <div className="footer-contact-item"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20,  }} >
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg><a href="mailto:contact@mwresidentialcommercial.ca" style={{ fontSize: 12 }}>contact@mwresidentialcommercial.ca</a></div>
          <div className="footer-contact-item"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20,  }} >
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg> Mon–Sun: 8AM–8PM</div>
          <div className="footer-contact-item"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20,  }} >
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg> Emergency: 24/7</div>
          <div style={{ marginTop: 16,display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, color: 'var(--gray)' }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20,  }} >
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg> Halifax, Nova Scotia</div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 M.W Residential And Commercial Limited. All rights reserved.</span>
        <span>Halifax, Nova Scotia 🇨🇦</span>
      </div>
    </footer>
  )
}
