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
    { icon: '📞', label: 'Phone', value: <a href="tel:9022336698">902-233-6698</a> },
    { icon: '✉️', label: 'Email', value: <a href="mailto:contact@mwresidentialcommercial.ca" style={{ fontSize: 14 }}>contact@mwresidentialcommercial.ca</a> },
    { icon: '🕐', label: 'Office Hours', value: 'Mon–Sun: 8AM–8PM' },
    { icon: '🚨', label: 'Emergency Service', value: 'Available 24/7' },
    { icon: '📍', label: 'Service Area', value: 'Halifax Regional Municipality, NS' },
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
