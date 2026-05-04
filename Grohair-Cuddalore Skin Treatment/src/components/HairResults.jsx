import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

import h1  from '../assets/h1.png'
import h11 from '../assets/h1-1.png'
import h2  from '../assets/h2.png'
import h21 from '../assets/h2-1.png'
import h3  from '../assets/h3.png'
import h31 from '../assets/h3-1.png'
import h4  from '../assets/h4.png'
import h41 from '../assets/h4-1.png'
import h5  from '../assets/h5.png'
import h51 from '../assets/h5-1.png'

const pairs = [
  { before: h1,  after: h11 },
  { before: h2,  after: h21 },
  { before: h3,  after: h31 },
  { before: h4,  after: h41 },
  { before: h5,  after: h51 },
]

export default function HairResults() {
  const headRef = useScrollReveal()

  const [mode,    setMode]    = useState('before') // 'before' | 'after'
  const [pairIdx, setPairIdx] = useState(0)
  const [visible, setVisible] = useState(true)
  const [exitDir, setExitDir] = useState('left')
  const [touchStart, setTouchStart] = useState(null)

  const transition = (newMode, newIdx, dir) => {
    setExitDir(dir)
    setVisible(false)
    setTimeout(() => {
      setMode(newMode)
      setPairIdx(newIdx)
      setVisible(true)
    }, 260)
  }

  // before → after: before exits RIGHT, after enters from left
  // after → before: after exits LEFT,  before enters from right
  const toggleMode = () => {
    if (mode === 'before') transition('after', pairIdx, 'right')
    else                   transition('before', pairIdx, 'left')
  }

  const goPrev = () => transition(mode, (pairIdx - 1 + pairs.length) % pairs.length, 'right')
  const goNext = () => transition(mode, (pairIdx + 1) % pairs.length,                'left')

  const onTouchStart = (e) => setTouchStart(e.touches[0].clientX)
  const onTouchEnd   = (e) => {
    if (touchStart === null) return
    const diff = touchStart - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? goNext() : goPrev()
    setTouchStart(null)
  }

  const currentImg = pairs[pairIdx][mode]

  return (
    <section className="py-8 bg-white">
      {/* Heading */}
      <div ref={headRef} className="reveal px-4 mb-5 text-center">
        <span className="inline-block bg-red-100 text-red-700 text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
          Real Results
        </span>
        <h2 className="text-[22px] font-extrabold text-gray-900 mb-1">
          Before &amp; <span className="text-red-600">After</span>
        </h2>
        <p className="text-[12px] text-gray-400">Actual patient transformations at Grohair</p>
      </div>

      {/* ── Single card ── */}
      <div
        className="mx-4 rounded-2xl overflow-hidden shadow border border-gray-100 bg-white"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Image area */}
        <div className="relative overflow-hidden bg-gray-100" style={{ aspectRatio: '4/3' }}>
          <img
            src={currentImg}
            alt={`${mode} result ${pairIdx + 1}`}
            className="w-full h-full object-cover"
            style={{
              transition: 'opacity 0.26s ease, transform 0.26s ease',
              opacity:    visible ? 1 : 0,
              transform:  visible
                ? 'translateX(0)'
                : exitDir === 'right'
                  ? 'translateX(55px)'
                  : 'translateX(-55px)',
            }}
          />

          {/* B / A label badge */}
          <div
            className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase text-white shadow-md"
            style={{
              background: mode === 'before' ? '#374151' : '#dc2626',
              transition: 'background 0.3s',
            }}
          >
            {mode === 'before' ? 'Before' : 'After'}
          </div>

          {/* Pair counter badge */}
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/40 text-white backdrop-blur-sm">
            {pairIdx + 1} / {pairs.length}
          </div>
        </div>

        {/* Controls */}
        <div className="px-4 py-3 border-t border-gray-100">
          {/* Before / After toggle */}
          <div className="flex justify-center mb-3">
            <div className="flex bg-gray-100 rounded-full p-1 gap-1">
              <button
                onClick={() => mode !== 'before' && toggleMode()}
                className={`px-5 py-1.5 rounded-full text-[12px] font-semibold transition-all duration-250 ${
                  mode === 'before'
                    ? 'bg-gray-700 text-white shadow-sm'
                    : 'text-gray-500'
                }`}
              >
                Before
              </button>
              <button
                onClick={() => mode !== 'after' && toggleMode()}
                className={`px-5 py-1.5 rounded-full text-[12px] font-semibold transition-all duration-250 ${
                  mode === 'after'
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'text-gray-500'
                }`}
              >
                After
              </button>
            </div>
          </div>

          {/* Prev · dots · Next */}
          <div className="flex items-center justify-between">
            <button
              onClick={goPrev}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-gray-50 active:bg-gray-100"
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-gray-500">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex gap-1.5">
              {pairs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => transition(mode, i, i >= pairIdx ? 'left' : 'right')}
                  className={`rounded-full transition-all duration-300 ${
                    i === pairIdx ? 'w-4 h-2 bg-red-600' : 'w-2 h-2 bg-gray-200'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-gray-50 active:bg-gray-100"
              aria-label="Next"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-gray-500">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
