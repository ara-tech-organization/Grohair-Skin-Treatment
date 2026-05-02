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

    fetch('https://adgrohairgloskinkaloor.com/api/email.php', {
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

    window.open('tel:+918270056789', '_self')
  }

  return (
    <section
      className="relative w-full flex flex-col overflow-hidden"
      style={{ minHeight: '480px' }}
    >
      {/* Background image layer */}
      {heroBg && (
        <div
          className="absolute inset-0 transition-transform duration-[2s] hover:scale-105"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',
          }}
        />
      )}

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(0, 0, 0, 0.62)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-12 flex-1 justify-center max-w-[380px] mx-auto">

        {/* Heading */}
        <h1 className="text-[32px] sm:text-[36px] font-bold text-white leading-[1.2] mb-4 drop-shadow-md">
          Consult Expert Skin Doctor in Kaloor
        </h1>

        {/* Subtext */}
        <p className="text-[17px] text-white/90 mb-6 leading-relaxed font-medium">
          Best Skin treatment in Kaloor
        </p>

        {/* Form fields */}
        <div className="w-full flex flex-col gap-3 mb-4">
          {/* Name */}
          <div className="text-left">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={form.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl text-[14px] font-medium bg-white/10 text-white placeholder-white/60 outline-none border-2 transition-colors backdrop-blur-sm ${errors.name ? 'border-red-500' : 'border-white/40 focus:border-white'}`}
            />
            {errors.name && <p className="text-red-400 text-[12px] mt-1 ml-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div className="text-left">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={form.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl text-[14px] font-medium bg-white/10 text-white placeholder-white/60 outline-none border-2 transition-colors backdrop-blur-sm ${errors.phone ? 'border-red-500' : 'border-white/40 focus:border-white'}`}
            />
            {errors.phone && <p className="text-red-400 text-[12px] mt-1 ml-1">{errors.phone}</p>}
          </div>

          {/* District */}
          <div className="text-left">
            <input
              type="text"
              name="district"
              placeholder="District *"
              value={form.district}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl text-[14px] font-medium bg-white/10 text-white placeholder-white/60 outline-none border-2 transition-colors backdrop-blur-sm ${errors.district ? 'border-red-500' : 'border-white/40 focus:border-white'}`}
            />
            {errors.district && <p className="text-red-400 text-[12px] mt-1 ml-1">{errors.district}</p>}
          </div>
        </div>

        {/* CTA button */}
        <button
          onClick={handleCall}
          className="btn-shimmer w-full flex items-center justify-center gap-3 text-white text-[15px] font-bold py-[13px] px-[30px] rounded-full shadow-lg transition-all active:scale-95"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Speak to Skin Doctor Instantly
        </button>
      </div>
    </section>
  )
}
