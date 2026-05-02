import heroBg from '../assets/bg-hero.jpg'

export default function Hero() {
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
        <h1 className="text-[32px] sm:text-[36px] font-black text-white leading-[1.2] mb-6 drop-shadow-md">
          Consult Expert Skin Doctor in Dindigul
        </h1>

        {/* Subtext */}
        <p className="text-[17px] text-white/90 mb-10 leading-relaxed font-medium">
          Best Skin treatment in Dindigul
        </p>

        {/* CTA button - Shimmer style as in StickyBottomCta, but smaller font */}
        <a
          href="tel:+918270156789"
          className="btn-shimmer flex items-center justify-center gap-3 text-white text-[15px] font-bold py-[12px] px-[30px] rounded-full shadow-lg transition-all active:scale-95"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Speak to Skin Doctor Instantly
        </a>
      </div>
    </section>
  )
}
