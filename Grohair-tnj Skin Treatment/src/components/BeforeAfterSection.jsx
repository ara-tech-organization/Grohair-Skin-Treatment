import { useState, useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

import h1 from '../assets/h1.png'
import h11 from '../assets/h1-1.png'
import h2 from '../assets/h2.png'
import h21 from '../assets/h2-1.png'
import h3 from '../assets/h3.png'
import h31 from '../assets/h3-1.png'
import h4 from '../assets/h4.png'
import h41 from '../assets/h4-1.png'
import h5 from '../assets/h5.png'
import h51 from '../assets/h5-1.png'

const pairs = [
  { before: h1, after: h11 },
  { before: h2, after: h21 },
  { before: h3, after: h31 },
  { before: h4, after: h41 },
  { before: h5, after: h51 },
]

const STYLE = `
  @keyframes wipeOutRight {
    from { clip-path: inset(0 0 0 0); }
    to   { clip-path: inset(0 0 0 100%); }
  }
  @keyframes wipeInLeft {
    from { clip-path: inset(0 100% 0 0); }
    to   { clip-path: inset(0 0 0 0); }
  }
  @keyframes wipeOutLeft {
    from { clip-path: inset(0 0 0 0); }
    to   { clip-path: inset(0 100% 0 0); }
  }
  @keyframes wipeInRight {
    from { clip-path: inset(0 0 0 100%); }
    to   { clip-path: inset(0 0 0 0); }
  }
`

function WipeImg({ src, alt, exitDir, objPos = 'center center' }) {
  const [current, setCurrent] = useState(src)
  const [next, setNext] = useState(null)
  const pending = useRef(src)

  useEffect(() => {
    if (src === current && src !== pending.current) return
    if (src === current) return
    pending.current = src
    setNext(src)
    const t = setTimeout(() => {
      setCurrent(src)
      setNext(null)
    }, 420)
    return () => clearTimeout(t)
  }, [src])

  const outAnim = exitDir === 'right' ? 'wipeOutRight 0.42s ease forwards' : 'wipeOutLeft 0.42s ease forwards'
  const inAnim = exitDir === 'right' ? 'wipeInLeft 0.42s ease forwards' : 'wipeInRight 0.42s ease forwards'

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <img
        src={current}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ animation: next ? outAnim : 'none', objectPosition: objPos, transform: 'scale(1.1)' }}
      />
      {next && (
        <img
          src={next}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ animation: inAnim, objectPosition: objPos, transform: 'scale(1.1)' }}
        />
      )}
    </div>
  )
}

export default function BeforeAfterSection() {
  const headRef = useScrollReveal()
  const [idx, setIdx] = useState(0)
  const [touchX, setTouchX] = useState(null)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIdx(prev => (prev + 1) % pairs.length)
    }, 3500)
    return () => clearInterval(timerRef.current)
  }, [])

  const goTo = (newIdx) => {
    clearInterval(timerRef.current)
    setIdx(newIdx)
    timerRef.current = setInterval(() => {
      setIdx(prev => (prev + 1) % pairs.length)
    }, 3500)
  }

  const onTouchStart = (e) => setTouchX(e.touches[0].clientX)
  const onTouchEnd = (e) => {
    if (touchX === null) return
    const diff = touchX - e.changedTouches[0].clientX
    if (diff > 40) goTo((idx + 1) % pairs.length)
    else if (diff < -40) goTo((idx - 1 + pairs.length) % pairs.length)
    setTouchX(null)
  }

  return (
    <section id="results" className="py-7 bg-white scroll-mt-20">
      <style>{STYLE}</style>

      {/* Heading */}
      <div ref={headRef} className="reveal px-4 mb-5 text-center">
        <h2 className="text-[22px] font-bold text-gray-900 mb-1">
          Before <span className="text-red-700">&amp; After</span>
        </h2>
        <p className="text-[13px] text-gray-400">Visible results from our patients</p>
      </div>

      {/* Card */}
      <div
        className="mx-3 rounded-2xl overflow-hidden border border-gray-100 bg-white"
        style={{ height: '290px', position: 'relative' }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Before label */}
        <span
          className="absolute text-[13px] font-bold text-red-700 select-none"
          style={{ top: '10px', left: '16px', zIndex: 50 }}
        >
          Before
        </span>

        {/* BEFORE image — top left */}
        <div
          className="absolute rounded-[13px] overflow-hidden border-[3.5px] border-red-600/60 shadow-sm"
          style={{ width: '46%', aspectRatio: '1 / 1', top: '30px', left: '14px', zIndex: 10 }}
        >
          <WipeImg src={pairs[idx].before} alt="Before" exitDir="right" objPos="center top" />
        </div>

        {/* AFTER image — bottom right */}
        <div
          className="absolute rounded-[13px] overflow-hidden border-[3.5px] border-red-600/60 shadow-md"
          style={{ width: '45%', aspectRatio: '1 / 1', bottom: '30px', right: '7px', zIndex: 20 }}
        >
          <WipeImg src={pairs[idx].after} alt="After" exitDir="left" objPos="center top" />
        </div>

        {/* After label */}
        <span
          className="absolute text-[13px] font-bold text-red-700 select-none"
          style={{ bottom: '10px', right: '16px', zIndex: 50 }}
        >
          After
        </span>
      </div>
    </section>
  )
}
