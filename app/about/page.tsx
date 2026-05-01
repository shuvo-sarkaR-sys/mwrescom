import SnowCanvas from '@/components/SnowCanvas'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | M.W Residential & Commercial',
}

export default function AboutPage() {
  return (
    <>
      <SnowCanvas />
      <Navbar />

      <div className="page-hero">
        <div className="page-hero-tag">Our Story</div>
        <h1 className="page-hero-title">ABOUT <span>M.W</span><br />RESCOM</h1>
      </div>

      <div style={{ background: 'var(--midnight)' }}>
        <div className="about-content">
          <div className="about-body">
            <h3>Who We Are</h3>
            <p>M.W Residential and Commercial Limited is a Halifax-based property services company dedicated to keeping your home and business safe, clean, and maintained through every season.</p>
            <p>We specialize in snow removal, ice control, and comprehensive outdoor services. Whether it&apos;s clearing a driveway before the morning rush or managing a full commercial parking lot overnight, we deliver with quiet professionalism.</p>

            <h3 style={{ marginTop: 10 }}>Our Mission</h3>
            <p>We treat every property like it&apos;s our own. Our mission is simple: show up on time, do exceptional work, and build relationships that last for years. Most of our business comes from repeat clients and word-of-mouth — and that&apos;s exactly how we like it.</p>

            <h3 style={{ marginTop: 10 }}>Emergency Service</h3>
            <p>We offer 24/7 emergency service for those unexpected storms and icing events that can&apos;t wait until morning. When the weather hits hardest, we&apos;re already on our way.</p>

            <div className="hours-card">
              <div className="hours-title">Office Hours</div>
              <div className="hours-row">
                <span className="hours-day">Monday – Sunday</span>
                <span className="hours-time">8:00 AM – 8:00 PM</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">Emergency Service</span>
                <span className="hours-badge">24/7</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">Snow Season</span>
                <span className="hours-time">Nov 1 – April 1</span>
              </div>
            </div>
          </div>

          <div className="about-values">
            <h3>Our Core Values</h3>
            {[
              { icon: '⏰', title: 'Punctuality', desc: 'We understand that your schedule depends on ours. We show up when we say we will — rain, sleet, or blizzard.' },
              { icon: '🏆', title: 'Quality', desc: 'We never cut corners. Every job gets our full attention, from the edges of your driveway to the walkways and stairs.' },
              { icon: '🤝', title: 'Trust', desc: 'We earn your trust through consistent, professional results — not promises. Our reputation speaks for itself.' },
              { icon: '💬', title: 'Communication', desc: 'Clear, proactive communication throughout every job. You always know when we\'re coming and what to expect.' },
              { icon: '🛡️', title: 'Satisfaction Guaranteed', desc: 'If our services don\'t exceed your expectations after the first visit, we\'ll give you a full refund. No questions asked.' },
            ].map(v => (
              <div key={v.title} className="value-item">
                <div className="value-icon">{v.icon}</div>
                <div>
                  <div className="value-title">{v.title}</div>
                  <div className="value-desc">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
