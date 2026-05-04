import { useState } from 'react'
import heroBg from '../assets/bg-hero.jpg'

export default function Hero() {
  const [form, setForm] = useState({ name: '', phone: '', district: '' })
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  function handleCall() {
    const newErrors = {}

    if (!form.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (!/^[a-zA-Z\s]+$/.test(form.name.trim())) {
      newErrors.name = 'Name must contain only letters'
    } else if (form.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters'
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      newErrors.phone = 'Enter a valid 10-digit mobile number'
    }

    if (!form.district.trim()) {
      newErrors.district = 'District is required'
    } else if (!/^[a-zA-Z\s]+$/.test(form.district.trim())) {
      newErrors.district = 'District must contain only letters'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const now = new Date()
    const date = now.toISOString().split('T')[0]
    const time = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })

    fetch('https://adgrohairgloskindindigul.in/api/email.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name.trim(),
        email: '',
        phone: form.phone.trim(),
        date,
        time,
        treatment: 'Skin Treatment',
        message: form.district.trim(),
        source: 'Website Form',
      }),
    }).catch(() => {})

    window.location.href = 'tel:+917599256789'
  }

  return (
    <section className="relative w-full flex flex-col overflow-hidden" style={{ minHeight: '500px' }}>

      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.60)' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 pt-10 pb-10 flex-1 justify-center">

        {/* Heading */}
        <h1 className="text-[30px] font-bold text-white leading-[1.25] mb-3 drop-shadow-md">
          Consult Expert Skin<br />Doctor in Kovilambakkam
        </h1>

        {/* Subtext */}
        <p className="text-[16px] text-white font-semibold mb-6">
          Best Skin treatment in Kovilambakkam
        </p>

        {/* Inputs */}
        <div className="w-full max-w-[360px] flex flex-col gap-3 mb-4">

          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={form.name}
              onChange={handleChange}
              className={`w-full px-5 py-[13px] rounded-full text-[14px] font-medium bg-white/15 text-white placeholder-white/70 outline-none border transition-colors backdrop-blur-sm ${
                errors.name ? 'border-red-400' : 'border-white/40 focus:border-white'
              }`}
            />
            {errors.name && <p className="text-red-400 text-[11px] mt-1 ml-3 text-left">{errors.name}</p>}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={form.phone}
              onChange={handleChange}
              className={`w-full px-5 py-[13px] rounded-full text-[14px] font-medium bg-white/15 text-white placeholder-white/70 outline-none border transition-colors backdrop-blur-sm ${
                errors.phone ? 'border-red-400' : 'border-white/40 focus:border-white'
              }`}
            />
            {errors.phone && <p className="text-red-400 text-[11px] mt-1 ml-3 text-left">{errors.phone}</p>}
          </div>

          <div>
            <input
              type="text"
              name="district"
              placeholder="District *"
              value={form.district}
              onChange={handleChange}
              className={`w-full px-5 py-[13px] rounded-full text-[14px] font-medium bg-white/15 text-white placeholder-white/70 outline-none border transition-colors backdrop-blur-sm ${
                errors.district ? 'border-red-400' : 'border-white/40 focus:border-white'
              }`}
            />
            {errors.district && <p className="text-red-400 text-[11px] mt-1 ml-3 text-left">{errors.district}</p>}
          </div>

        </div>

        {/* CTA button */}
        <button
          onClick={handleCall}
          className="btn-shimmer w-full max-w-[360px] flex items-center justify-center gap-3 text-white text-[15px] font-bold py-[14px] px-8 rounded-full shadow-lg transition-all active:scale-95"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 shrink-0">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Speak to Skin Doctor Instantly
        </button>

      </div>
    </section>
  )
}
