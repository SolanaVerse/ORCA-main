'use client'
import './globals.css'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import LoadingScreen from '../components/ui/LoadingScreen'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <html lang="en">
      <head>
        <title>ORCA IT Solutions - Web Development, Digital Marketing & IT Consulting</title>
        <meta name="description" content="Professional IT solutions including web development, digital marketing, Web3, and consulting services to accelerate your business growth." />
      </head>
      <body className="min-h-screen">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
        
        <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <Navbar />
          <div className="max-w-7xl mx-auto px-6">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}