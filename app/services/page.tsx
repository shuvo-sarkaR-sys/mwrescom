import Link from 'next/link'
import SnowCanvas from '@/components/SnowCanvas'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = {
  title: 'Our Services | M.W Residential & Commercial',
}

export default function ServicesPage() {
  return (
    <>
      <SnowCanvas />
      <Navbar />

      <div className="page-hero service-hero">
        <div className="page-hero-tag">What We Offer</div>
        <h1 className="page-hero-title">OUR <span>SERVICES</span></h1>
      </div>

      <div style={{ background: 'var(--midnight)' }}>
        <div className="services-detail">

          {/* Snow Removal */}
          <div className="service-block">
            <div className="service-visual">
              <div className="service-visual-bg" style={{ background: 'linear-gradient(135deg, #04253a, #0a85c2)' }}>
                <Image src="/img-1.avif" alt="Snow Removal Service" width={500} height={340} style={{ borderRadius: 8, width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div>
              <div className="service-detail-tag">Primary Service</div>
              <h2 className="service-detail-title">SNOW REMOVAL &amp; ICE CONTROL</h2>
              <p className="service-detail-desc">Our flagship service. We monitor storm activity 24/7 and mobilize when accumulation hits 5cm. Both residential driveways and commercial properties serviced.</p>
              <ul className="service-detail-list">
                {['Driveway plowing','Walkway shoveling','Stairs clearing','Ice salting & treatment','Parking lots','Loading dock access','Driveway markers','Priority AM service'].map(i => <li key={i}>{i}</li>)}
              </ul>
              <div className="pricing-badge">Season Pass from $600</div>
              <div style={{ marginTop: 16 }}>
                <Link href="/quote" className="btn-primary">Book This Service</Link>
              </div>
            </div>
          </div>

          {/* Landscaping */}
          <div className="service-block reverse">
            <div className="service-visual">
              <div className="service-visual-bg" style={{ background: 'linear-gradient(135deg, #062a10, #0f5020)' }}>
                <Image src="/img-2.avif" alt="Landscaping Service" width={500} height={340} style={{ borderRadius: 8, width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div>
              <div className="service-detail-tag">Year-Round</div>
              <h2 className="service-detail-title">OUTDOOR &amp; LANDSCAPING</h2>
              <p className="service-detail-desc">Beautiful properties don&apos;t happen by accident. Our landscaping team designs, installs, and maintains outdoor spaces that enhance your home or business.</p>
              <ul className="service-detail-list">
                {['Lawn care & mowing','Garden bed design','Stone walkways','Sod installation','Seasonal cleanup','Mulching','Edging & trimming','Property cleanup'].map(i => <li key={i}>{i}</li>)}
              </ul>
              <div style={{ marginTop: 16 }}>
                <Link href="/quote" className="btn-primary">Get a Quote</Link>
              </div>
            </div>
          </div>

          {/* GoNano */}
          <div className="service-block">
            <div className="service-visual">
              <div className="service-visual-bg" style={{ background: 'linear-gradient(135deg, #1a1000, #3a2a00)' }}>
                <Image src="/img-6.webp" alt="GoNano Service" width={500} height={340} style={{ borderRadius: 8, width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div>
              <div className="service-detail-tag">Advanced Technology</div>
              <h2 className="service-detail-title">GONANO TREATMENT</h2>
              <p className="service-detail-desc">Partnered with GoNano, we offer advanced nano-coating technology that provides long-lasting surface protection. Ideal for driveways, walkways, and exterior surfaces.</p>
              <ul className="service-detail-list">
                {['Surface protection','Anti-ice coating','Long-lasting results','Eco-friendly formula'].map(i => <li key={i}>{i}</li>)}
              </ul>
              <p style={{ fontSize: 13, color: 'var(--gray)', marginBottom: 16 }}>
                Learn more about the science at <strong style={{ color: 'var(--sky)' }}>gonano.com</strong>
              </p>
              <Link href="/quote" className="btn-primary">Inquire Now</Link>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}
