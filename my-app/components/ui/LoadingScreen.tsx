'use client'
import React, { useState, useEffect } from 'react'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase(1), 500)
    const timer2 = setTimeout(() => setAnimationPhase(2), 2000)
    const timer3 = setTimeout(() => onComplete(), 3000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [onComplete])

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-[#05060a] via-[#0b0f16] to-[#05060a] flex items-center justify-center z-50 transition-all duration-1000 ${
      animationPhase === 2 ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    }`}>
      <div className={`text-center transition-all duration-1000 ${
        animationPhase === 0 ? 'scale-0 opacity-0' : 
        animationPhase === 1 ? 'scale-100 opacity-100' : 'scale-150 opacity-0'
      }`}>
        {/* ORCA Logo Animation */}
        <div className="relative mb-8">
          <svg width="200" height="200" viewBox="0 0 120 120" className="orca-opening-logo">
            {/* Orca main body */}
            <path d="M20 60 Q30 40 60 45 Q90 40 100 60 Q95 85 60 80 Q25 85 20 60" fill="url(#orcaGradient)" className="orca-body"/>
            {/* Orca head/snout */}
            <ellipse cx="60" cy="45" rx="25" ry="15" fill="url(#orcaGradient)" className="orca-head"/>
            {/* White belly patch */}
            <ellipse cx="60" cy="70" rx="30" ry="12" fill="#ffffff" opacity="0.9" className="orca-belly"/>
            {/* Dorsal fin */}
            <path d="M60 35 Q65 20 70 35 Q65 40 60 35" fill="url(#finGradient)" className="orca-dorsal"/>
            {/* Pectoral fins */}
            <ellipse cx="35" cy="65" rx="8" ry="15" fill="url(#finGradient)" transform="rotate(-30 35 65)" className="orca-fin-left"/>
            <ellipse cx="85" cy="65" rx="8" ry="15" fill="url(#finGradient)" transform="rotate(30 85 65)" className="orca-fin-right"/>
            {/* Tail flukes */}
            <path d="M15 65 Q10 55 5 65 Q10 75 15 65" fill="url(#finGradient)" className="orca-tail-top"/>
            <path d="M15 65 Q10 70 5 80 Q10 85 15 75" fill="url(#finGradient)" className="orca-tail-bottom"/>
            {/* Eye */}
            <circle cx="50" cy="40" r="3" fill="#ffffff" className="orca-eye-white"/>
            <circle cx="51" cy="39" r="1.5" fill="#000000" className="orca-eye"/>
            {/* White eye patch */}
            <ellipse cx="48" cy="38" rx="6" ry="4" fill="#ffffff" opacity="0.8" className="orca-eye-patch"/>
            
            <defs>
              <linearGradient id="orcaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#000000"/>
                <stop offset="30%" stopColor="#1a1a1a"/>
                <stop offset="70%" stopColor="#006fff"/>
                <stop offset="100%" stopColor="#7c5cff"/>
              </linearGradient>
              <linearGradient id="finGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#000000"/>
                <stop offset="100%" stopColor="#0057cc"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Company name */}
        <h1 className="text-5xl font-bold gradient-text">
          ORCA IT Solutions
        </h1>
      </div>
    </div>
  )
}