import Link from 'next/link'
import SnowCanvas from '@/components/SnowCanvas'
import Navbar from '@/components/Navbar'
import HeroSlider from '@/components/HeroSlider'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <SnowCanvas />
      <Navbar />

      {/* HERO */}
      <HeroSlider />

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stats-inner">
          {[
            { num: '500+', label: 'Properties\nServiced' },
            { num: '5+', label: 'Years of\nExperience' },
            { num: '24/7', label: 'Emergency\nService' },
            { num: '100%', label: 'Satisfaction\nGuaranteed' },
          ].map(s => (
            <div key={s.num} className="stat-item">
              <div>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label" style={{ whiteSpace: 'pre-line' }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <section className="why-section section-pad">
        <div className="section-header">
          <div className="section-eyebrow">Why M.W ResComm</div>
          <h2 className="section-title">WHY <span>CHOOSE US?</span></h2>
          <div className="section-line" />
        </div>
        <div className="why-grid">
          {[
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 32, height: 32 }}   >
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
, title: 'Reliable, All-Season Service', text: "From summer landscaping to winter snow control, we're equipped to handle every season. Our team shows up on time, works efficiently, and delivers consistent, high-quality results no matter the weather." },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  style={{ width: 32, height: 32}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
</svg>
, title: 'Professional Results, Every Time', text: "We treat every property like it's our own — whether it's a simple driveway clean-up or a full exterior project. Expect sharp finishes, attention to detail, and clear communication throughout every job." },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 32, height: 32}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
, title: 'Built on Trust & Reputation', text: 'Most of our work comes from repeat customers and referrals. We focus on earning long-term relationships through reliability, respect, and proven results on every project.' },
          ].map(c => (
            <div key={c.title} className="why-card">
              <div className="why-icon">{c.icon}</div>
              <div className="why-title">{c.title}</div>
              <p className="why-text">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="services-preview section-pad" style={{ paddingTop: 50 }}>
        <div className="section-header">
          <div className="section-eyebrow">What We Do</div>
          <h2 className="section-title">OUR <span>SERVICES</span></h2>
          <div className="section-line" />
        </div>
        <div className="services-grid">
          {[
            {
              icon: '❄️', title: 'Snow Removal & Ice Control',
              text: 'Residential and commercial snow plowing, shoveling, and ice treatment. Service begins at 5cm accumulation.',
              bg: 'url(/img-1.avif) center/cover no-repeat',
            },
            {
              icon: '🌿', title: 'Outdoor & Landscaping',
              text: 'Complete lawn care, garden beds, stone walkways, and property maintenance for all seasons.',
              bg: 'url(/img-2.avif) center/cover no-repeat',
            },
            {
              icon: '🧪', title: 'GoNano Treatment',
              text: 'Advanced nano-coating technology for long-lasting surface protection and treatment.',
              bg: 'url(/img-4.webp) center/cover no-repeat',
            },
          ].map(s => (
            <Link key={s.title} href="/services" className="service-card" style={{ textDecoration: 'none' }}>
              <div className="service-card-bg" style={{ background: s.bg }} />
              <div className="service-card-overlay" />
              <div className="service-card-content">
                <span className="service-card-icon">{s.icon}</span>
                <div className="service-card-title">{s.title}</div>
                <p className="service-card-text">{s.text}</p>
                <span className="service-card-link">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SEASON PASS */}
      <section className="season-section section-pad">
        <div className="season-inner">
          <div>
            <div className="season-badge">🔥 Act Now &amp; Save Big!</div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>SEASON <span>PASS</span></h2>
            <div className="section-line" style={{ margin: '20px 0' }} />
            <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--gray)', lineHeight: 1.8, marginBottom: 24 }}>
              Get full season coverage and never worry about snow again. Pay in full and save big on our comprehensive winter package.
            </p>
            <ul className="season-features">
              {[
                'Full season coverage: Nov 1 – April 1',
                'Service at 5cm of accumulation',
                'Driveway markers included',
                'Flexible payment options available',
                'Walkway & stairs clearing add-on',
                'Salting package add-on',
                'Priority AM service add-on',
              ].map(f => (
                <li key={f}><span className="check">✓</span>{f}</li>
              ))}
            </ul>      
            <div className="guarantee-box">
              <div className="guarantee-icon">🛡️</div>
              <div className="guarantee-text">
                <strong>Satisfaction Guaranteed</strong> — If our services don&apos;t exceed your expectations after the first visit, we&apos;ll give you a full refund.
              </div>
            </div>
          </div>
          <div className="season-price-box">
            <div className="season-price-label">1–4 Car Driveway</div>
            <div className="season-price"><small>from</small><br />$600</div>
            <p style={{ fontSize: 13, color: 'var(--gray)', margin: '10px 0 24px' }}>Per season · Add-ons available</p>
            <Link href="/quote" className="btn-primary" style={{ display: 'block', textAlign: 'center', padding: 16 }}>
              Reserve My Season Pass
            </Link>
            <p style={{ fontSize: 12, color: 'var(--gray)', marginTop: 14 }}>
              Or call us: <strong style={{ color: 'var(--sky)' }}>902-233-6698</strong>
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section section-pad">
        <div className="section-header">
          <div className="section-eyebrow">Client Reviews</div>
          <h2 className="section-title">WHAT PEOPLE <span>SAY</span></h2>
          <div className="section-line" />
        </div>
        <div className="testimonials-grid">
          {[
            { initial: 'R', name: 'Rachel M.', loc: 'Halifax, NS', text: "These guys are always on time, even during the worst snowstorms. My driveway and walkway are always clean before I leave for work. Super reliable and friendly service. Highly recommend if you want stress free winters!" },
            { initial: 'T', name: 'Tyler G.', loc: 'Bedford, NS', text: "From design to execution, their landscaping crew completely transformed our yard. The garden beds, stone walkway, and new lawn look amazing. They listened to what we wanted and delivered more than expected!" },
            { initial: 'J', name: 'Jason S.', loc: 'Armdale, NS', text: "I've used them for snow removal in the winter and yard work in the summer — both top-notch. The attention to detail is what stands out the most. It's hard to find a company that does both seasons so well." },
          ].map(t => (
            <div key={t.name} className="testimonial-card">
              <div className="quote-mark">&ldquo;</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.initial}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-loc">{t.loc}</div>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <div className="cta-strip">
        <h2>READY TO BOOK?</h2>
        <p>Contact us today and let us handle the weather — you handle everything else.</p>
        <Link href="/quote" className="cta-btn-white">Get a Free Quote</Link>
        <a href="tel:9022336698" className="cta-btn-white">📞 902-233-6698</a>
      </div>

      <Footer />
    </>
  )
}
