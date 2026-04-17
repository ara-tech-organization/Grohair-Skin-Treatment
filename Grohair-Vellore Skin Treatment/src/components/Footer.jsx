import footerImg from '../assets/Footer.png'

const quickLinks = [
  { name: 'Home', link: '#hero' },
  { name: 'Before & After', link: '#results' },
  { name: 'Treatments', link: '#treatments' },
  { name: 'Patient Say', link: '#reviews' }
]
const services = [
  { name: 'PRP Therapy', link: '#prp' },
  { name: 'GFC Therapy', link: '#gfc' },
  { name: 'Scalp Care', link: '#scalp' },
  { name: 'Mesotherapy', link: '#meso' }
]

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=133/1,+Registrar+Periasamy+St,+opposite+to+Reliance+Smart,+Krishna+Nagar,+Sankaranpalayam,+Vellore,+Tamil+Nadu+632001'

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0f1117]">

      {/* ── Logo + tagline ── */}
      <div className="px-5 pt-7 pb-5 border-b border-white/10 flex items-center gap-3 min-[375px]:gap-4 min-[425px]:gap-6">
        <img src={footerImg} alt="Grohair" className="h-[42px] min-[375px]:h-[52px] min-[425px]:h-[64px] sm:h-20 w-auto object-contain shrink-0" />
        <p className="text-[13px] min-[375px]:text-[15px] min-[425px]:text-[14px] text-white/35 leading-relaxed font-semibold whitespace-nowrap">Advanced Grohair &amp; Gloskin<br />Vellore</p>
      </div>

      {/* ── Links ── */}
      <div className="flex px-5 py-6 border-b border-white/10 text-center">
        <div className="flex-1">
          <h4 className="text-[11px] font-extrabold text-white uppercase tracking-widest mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((l) => (
              <li key={l.name}><a href={l.link} className="text-[13px] text-white/50 hover:text-red-500 transition-colors">{l.name}</a></li>
            ))}
          </ul>
        </div>
        <div className="w-px bg-white/10 mx-2 self-stretch" />
        <div className="flex-1">
          <h4 className="text-[11px] font-extrabold text-white uppercase tracking-widest mb-4">Our Services</h4>
          <ul className="flex flex-col gap-3">
            {services.map((s) => (
              <li key={s.name}><a href={s.link} className="text-[13px] text-white/50 hover:text-red-500 transition-colors">{s.name}</a></li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Contact info ── */}
      <div className="px-5 py-5 border-b border-white/10 flex flex-col gap-4">

        {/* Address → Google Maps */}
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 active:text-red-500 group"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-red-500 shrink-0 mt-0.5">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[12px] text-white/45 leading-relaxed hover:text-red-400 active:text-red-400 transition-colors">
            133/1, Registrar Periasamy St, opposite to Reliance Smart, Krishna Nagar, Sankaranpalayam, Vellore, Tamil Nadu 632001
          </span>
        </a>

        {/* Phone → Dialer */}
        <a href="tel:+917571856789" className="flex items-center gap-3 group">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-red-500 shrink-0">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span className="text-[12px] text-white/45 hover:text-red-400 active:text-red-400 transition-colors">075718 56789</span>
        </a>

        {/* Email → Mail app */}
        <a href="mailto:vellore@adgrohair.com" className="flex items-center gap-3 group">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-red-500 shrink-0">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <span className="text-[12px] text-white/45 hover:text-red-400 active:text-red-400 transition-colors">vellore@adgrohair.com</span>
        </a>

      </div>

      {/* ── Copyright ── */}
      <div className="px-5 py-4 text-center">
        <p className="text-[11px] text-white/20">© 2026 GroHair &amp; GloSkin. All rights reserved.</p>
      </div>
    </footer>
  )
}
