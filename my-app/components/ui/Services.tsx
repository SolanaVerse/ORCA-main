import React from 'react'

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg text-muted-foreground">Complete IT solutions tailored to your business needs</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="card p-8 rounded-xl text-center">
          <div className="text-4xl mb-4">💻</div>
          <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
          <p className="text-muted-foreground mb-6">Custom websites, web applications, and e-commerce solutions built with modern technologies.</p>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• React & Next.js Applications</li>
            <li>• E-commerce Platforms</li>
            <li>• Progressive Web Apps</li>
            <li>• API Development</li>
          </ul>
        </div>
        
        <div className="card p-8 rounded-xl text-center">
          <div className="text-4xl mb-4">📱</div>
          <h3 className="text-2xl font-semibold mb-4">Digital Marketing</h3>
          <p className="text-muted-foreground mb-6">Strategic digital marketing campaigns to boost your online presence and drive growth.</p>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• SEO Optimization</li>
            <li>• Social Media Marketing</li>
            <li>• PPC Advertising</li>
            <li>• Content Marketing</li>
          </ul>
        </div>
        
        <div className="card p-8 rounded-xl text-center">
          <div className="text-4xl mb-4">🔧</div>
          <h3 className="text-2xl font-semibold mb-4">IT Consulting</h3>
          <p className="text-muted-foreground mb-6">Expert guidance on technology strategy, infrastructure, and digital transformation.</p>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Technology Strategy</li>
            <li>• Cloud Migration</li>
            <li>• Security Audits</li>
            <li>• System Integration</li>
          </ul>
        </div>
        
        <div className="card p-8 rounded-xl text-center">
          <div className="text-4xl mb-4">⛓️</div>
          <h3 className="text-2xl font-semibold mb-4">Web3 Development</h3>
          <p className="text-muted-foreground mb-6">Blockchain solutions, smart contracts, and decentralized applications for the future of web.</p>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Smart Contract Development</li>
            <li>• DeFi Applications</li>
            <li>• NFT Marketplaces</li>
            <li>• Blockchain Integration</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card p-8 rounded-xl">
          <div className="text-3xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold mb-3">Startup Solutions</h3>
          <p className="text-muted-foreground">MVP development, technical co-founder services, and scalable architecture for growing startups.</p>
        </div>
        
        <div className="card p-8 rounded-xl">
          <div className="text-3xl mb-4">🏢</div>
          <h3 className="text-xl font-semibold mb-3">Enterprise Services</h3>
          <p className="text-muted-foreground">Large-scale system integration, legacy modernization, and enterprise-grade security solutions.</p>
        </div>
      </div>
    </section>
  )
}