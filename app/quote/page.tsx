'use client'
import { useState } from 'react'
import Link from 'next/link'
import SnowCanvas from '@/components/SnowCanvas'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const services = [
  { id: 'snow', icon: '❄️', label: 'Snow Removal' },
  { id: 'ice', icon: '🧊', label: 'Ice Control & Salting' },
  { id: 'landscape', icon: '🌿', label: 'Landscaping' },
  { id: 'gonano', icon: '🧪', label: 'GoNano Treatment' },
  { id: 'season', icon: '📅', label: 'Season Pass' },
  { id: 'commercial', icon: '🏢', label: 'Commercial Service' },
]

export default function QuotePage() {
  const [selected, setSelected] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', address: '', propertyType: 'Residential', notes: '', date: '', time: 'Morning (7AM–12PM)' })

  function toggle(id: string) {
    setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id])
  }

  function handleSubmit() {
    if (!form.firstName || !form.email) {
      alert('Please fill in your name and email address to continue.')
      return
    }
    setSubmitted(true)
    window.scrollTo(0, 0)
  }

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  return (
    <>
      <SnowCanvas />
      <Navbar />

      <div className="page-hero">
        <div className="page-hero-tag">Free Estimate</div>
        <h1 className="page-hero-title">GET A <span>QUOTE</span></h1>
      </div>

      <div style={{ background: 'var(--midnight)' }}>
        <div className="form-page">
          {submitted ? (
            <div className="success-msg show">
              <div className="success-icon">✅</div>
              <h3>QUOTE REQUEST SENT!</h3>
              <p>Thank you! We&apos;ve received your request and will contact you within 2–4 hours with a personalized quote.<br /><br />
                For urgent matters, call us directly at <strong style={{ color: 'var(--sky)' }}>902-233-6698</strong>.
              </p>
              <div style={{ marginTop: 30 }}>
                <Link href="/" className="btn-primary">Back to Home</Link>
              </div>
            </div>
          ) : (
            <div className="booking-grid">
              <div className="form-section-title">Personal Information</div>

              <div className="form-group">
                <label htmlFor="qFirstName">First Name *</label>
                <input id="qFirstName" type="text" placeholder="Jane" value={form.firstName} onChange={set('firstName')} />
              </div>
              <div className="form-group">
                <label htmlFor="qLastName">Last Name</label>
                <input id="qLastName" type="text" placeholder="Smith" value={form.lastName} onChange={set('lastName')} />
              </div>
              <div className="form-group">
                <label htmlFor="qEmail">Email Address *</label>
                <input id="qEmail" type="email" placeholder="jane@example.com" value={form.email} onChange={set('email')} />
              </div>
              <div className="form-group">
                <label htmlFor="qPhone">Phone Number</label>
                <input id="qPhone" type="tel" placeholder="902-555-0000" value={form.phone} onChange={set('phone')} />
              </div>

              <div className="form-section-title">Property Details</div>

              <div className="form-group full">
                <label htmlFor="qAddress">Service Address</label>
                <input id="qAddress" type="text" placeholder="123 Main Street, Halifax, NS" value={form.address} onChange={set('address')} />
              </div>
              <div className="form-group">
                <label htmlFor="qPropertyType">Property Type</label>
                <select id="qPropertyType" value={form.propertyType} onChange={set('propertyType')}>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                  <option>Strata / Condo</option>
                </select>
              </div>

              <div className="form-section-title">Services Needed</div>

              <div className="service-selector">
                {services.map(s => (
                  <div key={s.id} className="service-option">
                    <input type="checkbox" id={s.id} checked={selected.includes(s.id)} onChange={() => toggle(s.id)} />
                    <label htmlFor={s.id}>
                      <span className="service-option-icon">{s.icon}</span>
                      {s.label}
                    </label>
                  </div>
                ))}
              </div>

              <div className="form-section-title">Preferred Schedule</div>

              <div className="date-time-row">
                <div className="form-group">
                  <label htmlFor="qDate">Preferred Start Date</label>
                  <input type="date" id="qDate" value={form.date} onChange={set('date')} />
                </div>
                <div className="form-group">
                  <label htmlFor="qTime">Preferred Time</label>
                  <select id="qTime" value={form.time} onChange={set('time')}>
                    <option>Morning (7AM–12PM)</option>
                    <option>Afternoon (12PM–5PM)</option>
                    <option>Evening (5PM–8PM)</option>
                    <option>Flexible</option>
                  </select>
                </div>
              </div>

              <div className="form-group full">
                <label htmlFor="qMessage">Additional Notes</label>
                <textarea id="qMessage" placeholder="Any special instructions, gate codes, access notes, or specific concerns..." value={form.notes} onChange={set('notes')} />
              </div>

              <div className="submit-section">
                <button className="submit-btn" onClick={handleSubmit}>Request My Free Quote →</button>
                <p className="form-note">
                  We typically respond within 2–4 hours during business hours. For urgent needs, call <strong>902-233-6698</strong>.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  )
}
