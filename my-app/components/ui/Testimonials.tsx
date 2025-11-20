import React from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "ORCA transformed our digital presence completely. Their web development team delivered a stunning, high-performance website that increased our conversions by 300%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "GrowthCorp",
      role: "Marketing Director", 
      content: "The digital marketing strategy ORCA implemented helped us reach new markets and grow our revenue by 150% in just 6 months. Exceptional results!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "InnovateLab",
      role: "CTO",
      content: "Their IT consulting services helped us modernize our entire infrastructure. The cloud migration was seamless and our system performance improved dramatically.",
      rating: 5
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-[#0a0f1a]/50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-lg text-muted-foreground">Trusted by businesses worldwide</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card p-8 rounded-xl">
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
            <div>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}