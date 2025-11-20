import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-transparent to-[#0a0f1a]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Why Choose ORCA?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            With over a decade of experience in IT solutions, we've helped hundreds of businesses 
            transform their operations and achieve digital excellence.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-orca-600 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Proven Track Record</h3>
                <p className="text-muted-foreground">500+ successful projects delivered across various industries</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-orca-600 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Expert Team</h3>
                <p className="text-muted-foreground">Certified professionals in latest technologies and methodologies</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-orca-600 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">Round-the-clock technical support and maintenance services</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Process</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-orca-600 flex items-center justify-center text-sm font-bold">1</div>
              <span>Discovery & Analysis</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-orca-600 flex items-center justify-center text-sm font-bold">2</div>
              <span>Strategy & Planning</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-orca-600 flex items-center justify-center text-sm font-bold">3</div>
              <span>Development & Implementation</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-orca-600 flex items-center justify-center text-sm font-bold">4</div>
              <span>Testing & Deployment</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-orca-600 flex items-center justify-center text-sm font-bold">5</div>
              <span>Support & Maintenance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}