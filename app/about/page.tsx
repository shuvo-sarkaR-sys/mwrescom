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

      <div className="page-hero about-hero">
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
              { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 30, height: 30, color: '#2a9df4' }} >
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
, title: 'Punctuality', desc: 'We understand that your schedule depends on ours. We show up when we say we will — rain, sleet, or blizzard.' },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 30, height: 30, color: '#2a9df4' }} >
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
</svg>
, title: 'Quality', desc: 'We never cut corners. Every job gets our full attention, from the edges of your driveway to the walkways and stairs.' },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 30, height: 30, color: '#2a9df4' }} >
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
</svg>
, title: 'Trust', desc: 'We earn your trust through consistent, professional results — not promises. Our reputation speaks for itself.' },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 30, height: 30, color: '#2a9df4' }} >
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
</svg>
, title: 'Communication', desc: 'Clear, proactive communication throughout every job. You always know when we\'re coming and what to expect.' },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 30, height: 30, color: '#2a9df4' }} >
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>
, title: 'Satisfaction Guaranteed', desc: 'If our services don\'t exceed your expectations after the first visit, we\'ll give you a full refund. No questions asked.' },
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
