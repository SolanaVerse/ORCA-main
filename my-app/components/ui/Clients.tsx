import React from 'react'

export default function Clients() {
  const clients = [
    { name: "TechCorp", logo: "🏢", industry: "Enterprise Software" },
    { name: "StartupX", logo: "🚀", industry: "Fintech" },
    { name: "EcoGreen", logo: "🌱", industry: "Sustainability" },
    { name: "HealthPlus", logo: "🏥", industry: "Healthcare" },
    { name: "CryptoVault", logo: "⚡", industry: "Blockchain" },
    { name: "RetailMax", logo: "🛍️", industry: "E-commerce" },
    { name: "EduTech", logo: "📚", industry: "Education" },
    { name: "GameStudio", logo: "🎮", industry: "Gaming" }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orca-600/5 to-neon/5"></div>
      <div className="relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground">We've partnered with companies across various industries</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="card p-6 rounded-xl text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">{client.logo}</div>
              <h3 className="font-semibold mb-1">{client.name}</h3>
              <p className="text-sm text-muted-foreground">{client.industry}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-orca-400 mb-2">500+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orca-400 mb-2">200+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orca-400 mb-2">99%</div>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}