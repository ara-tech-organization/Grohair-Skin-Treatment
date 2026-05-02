import logoImg from '../assets/Logo.png'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-3 min-[375px]:px-4 min-[425px]:px-5 py-1 min-[375px]:py-1.5 min-[425px]:py-2 bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Logo */}
      <img src={logoImg} alt="Grohair" className="h-[40px] min-[375px]:h-[50px] min-[425px]:h-[70px] w-auto object-contain" />

      <div className="flex items-center gap-4 min-[375px]:gap-5 min-[425px]:gap-6 h-full">
        {/* Treatments text-only button — no background */}
        <a 
          href="#treatments" 
          className="text-[14px] font-extrabold text-gray-900 border-b-2 border-transparent hover:border-red-700 transition-all active:scale-95 whitespace-nowrap pt-0.5"
        >
          Treatments
        </a>

        {/* Phone icon button */}
        <a
          href="tel:+918270156789"
          aria-label="Call us"
          className="w-9 h-9 bg-red-700 rounded-full flex items-center justify-center text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </div>
    </header>
  )
}
