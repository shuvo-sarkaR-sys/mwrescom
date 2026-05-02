'use client'
import { useState } from 'react'
import SnowCanvas from '@/components/SnowCanvas'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ first: '', last: '', email: '', phone: '', service: 'Snow Removal', message: '' })
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  function handleSubmit() {
    if (!form.first || !form.email || !form.message) {
      alert('Please fill in your name, email, and message.')
      return
    }
    setSubmitted(true)
  }

  const contactItems = [
    { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: 24, height: 24}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
, label: 'Phone', value: <a href="tel:9022336698">902-233-6698</a> },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: 24, height: 24}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
, label: 'Email', value: <a href="mailto:contact@mwresidentialcommercial.ca" style={{ fontSize: 14 }}>contact@mwresidentialcommercial.ca</a> },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: 24, height: 24}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
, label: 'Office Hours', value: 'Mon–Sun: 8AM–8PM' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: 24, height: 24}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
, label: 'Emergency Service', value: 'Available 24/7' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: 24, height: 24}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
, label: 'Service Area', value: 'Halifax Regional Municipality, NS' },
  ]

  return (
    <>
      <SnowCanvas />
      <Navbar />

      <div className="page-hero">
        <div className="page-hero-tag">Get in Touch</div>
        <h1 className="page-hero-title">CONTACT <span>US</span></h1>
      </div>

      <div style={{ background: 'var(--midnight)' }}>
        <div className="contact-layout">
          <div className="contact-info">
            <h3>We&apos;re Ready to Help</h3>
            <p>Whether you&apos;re looking to book service, get a quote, or just have a question, we&apos;re here. Reach out by phone, email, or fill out the form and we&apos;ll get back to you quickly.</p>

            {contactItems.map(item => (
              <div key={item.label} className="contact-item">
                <div className="contact-item-icon">{item.icon}</div>
                <div>
                  <div className="contact-item-label">{item.label}</div>
                  <div className="contact-item-value">{item.value}</div>
                </div>
              </div>
            ))}

            <div style={{ marginTop: 30, padding: 24, background: 'rgba(255,107,26,0.08)', border: '1px solid rgba(255,107,26,0.2)', borderRadius: 8 }}>
              <p style={{ fontSize: 14, color: 'var(--light-gray)', marginBottom: 12 }}>
                <strong style={{ color: 'var(--orange)' }}>🛡️ Satisfaction Guaranteed</strong>
              </p>
              <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--gray)', lineHeight: 1.7, margin: 0 }}>
                If our services don&apos;t exceed your expectations after the first visit, we&apos;ll give you a full refund. That&apos;s our promise.
              </p>
            </div>
          </div>

          <div className="contact-form-box">
            <h3>Send Us a Message</h3>
            {submitted ? (
              <div className="success-msg show">
                <div className="success-icon">✅</div>
                <h3>MESSAGE SENT!</h3>
                <p>Thanks for reaching out! We&apos;ll get back to you within 2–4 hours.</p>
              </div>
            ) : (
              <div className="cf-grid">
                <div className="form-group">
                  <label>First Name *</label>
                  <input type="text" placeholder="Jane" value={form.first} onChange={set('first')} />
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input type="text" placeholder="Smith" value={form.last} onChange={set('last')} />
                </div>
                <div className="form-group full">
                  <label>Email *</label>
                  <input type="email" placeholder="jane@example.com" value={form.email} onChange={set('email')} />
                </div>
                <div className="form-group full">
                  <label>Phone</label>
                  <input type="tel" placeholder="902-555-0000" value={form.phone} onChange={set('phone')} />
                </div>
                <div className="form-group full">
                  <label>Service Interest</label>
                  <select value={form.service} onChange={set('service')}>
                    <option>Snow Removal</option>
                    <option>Ice Control &amp; Salting</option>
                    <option>Landscaping</option>
                    <option>GoNano Treatment</option>
                    <option>Season Pass</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="form-group full">
                  <label>Message *</label>
                  <textarea placeholder="Tell us how we can help..." value={form.message} onChange={set('message')} />
                </div>
                <div className="form-group full" style={{ textAlign: 'center' }}>
                  <button className="submit-btn" onClick={handleSubmit} style={{ width: '100%' }}>Send Message →</button>
                  <p className="form-note" style={{ marginTop: 12 }}>We respond within 2–4 hours during business hours.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
