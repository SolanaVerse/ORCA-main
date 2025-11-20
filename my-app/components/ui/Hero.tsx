import React from 'react'

export default function Hero() {
  return (
    <section className="pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orca-600/10 via-transparent to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-orca-600/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-neon/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="text-center relative z-10">
        <h1 className="text-6xl font-extrabold tracking-tight leading-tight mb-6">
          <span className="text-orca-600">ORCA</span> IT Solutions
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Transform your business with cutting-edge web development, strategic digital marketing, 
          Web3 solutions, and expert IT consulting services. We deliver scalable solutions that drive growth.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#contact" className="px-8 py-4 rounded-lg bg-gradient-to-r from-orca-600 to-neon shadow-lg text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all">
            Get Started
          </a>
          <a href="#services" className="px-8 py-4 rounded-lg border border-neutral-700 text-lg font-semibold hover:border-orca-500 hover:bg-orca-600/10 transition-all">
            Our Services
          </a>
        </div>
      </div>
    </section>
  )
}