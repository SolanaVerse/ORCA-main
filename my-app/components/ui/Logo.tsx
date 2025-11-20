import React from 'react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizes = {
    sm: { svg: 32, text: 'text-lg' },
    md: { svg: 40, text: 'text-2xl' },
    lg: { svg: 60, text: 'text-4xl' }
  }

  const currentSize = sizes[size]

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <svg 
          width={currentSize.svg} 
          height={currentSize.svg} 
          viewBox="0 0 120 120" 
          className="logo-svg"
        >
          {/* Orca main body */}
          <path d="M20 60 Q30 40 60 45 Q90 40 100 60 Q95 85 60 80 Q25 85 20 60" fill="url(#logoGradient)" />
          {/* Orca head/snout */}
          <ellipse cx="60" cy="45" rx="25" ry="15" fill="url(#logoGradient)" />
          {/* White belly patch */}
          <ellipse cx="60" cy="70" rx="30" ry="12" fill="#ffffff" opacity="0.9" />
          {/* Dorsal fin */}
          <path d="M60 35 Q65 20 70 35 Q65 40 60 35" fill="url(#logoFinGradient)" />
          {/* Pectoral fins */}
          <ellipse cx="35" cy="65" rx="8" ry="15" fill="url(#logoFinGradient)" transform="rotate(-30 35 65)" />
          <ellipse cx="85" cy="65" rx="8" ry="15" fill="url(#logoFinGradient)" transform="rotate(30 85 65)" />
          {/* Tail flukes */}
          <path d="M15 65 Q10 55 5 65 Q10 75 15 65" fill="url(#logoFinGradient)" />
          <path d="M15 65 Q10 70 5 80 Q10 85 15 75" fill="url(#logoFinGradient)" />
          {/* Eye */}
          <circle cx="50" cy="40" r="3" fill="#ffffff" />
          <circle cx="51" cy="39" r="1.5" fill="#000000" />
          {/* White eye patch */}
          <ellipse cx="48" cy="38" rx="6" ry="4" fill="#ffffff" opacity="0.8" />
          {/* Tech elements */}
          <circle cx="75" cy="55" r="1" fill="#7c5cff" opacity="0.6" />
          <path d="M70 50 L75 45" stroke="#7c5cff" strokeWidth="0.5" opacity="0.6" />
          
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="30%" stopColor="#1a1a1a" />
              <stop offset="70%" stopColor="#006fff" />
              <stop offset="100%" stopColor="#7c5cff" />
            </linearGradient>
            <linearGradient id="logoFinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="100%" stopColor="#0057cc" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {showText && (
        <div className={`font-bold ${currentSize.text}`}>
          <span className="text-orca-600">ORCA</span>
          <span className="text-white ml-2">IT Solutions</span>
        </div>
      )}
    </div>
  )
}