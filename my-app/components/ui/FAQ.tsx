'use client'
import React, { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What services does ORCA IT Solutions offer?",
      answer: "We provide comprehensive IT services including web development, digital marketing, IT consulting, cloud solutions, and system integration. Our team specializes in modern technologies like React, Next.js, AWS, and more."
    },
    {
      question: "How long does a typical web development project take?",
      answer: "Project timelines vary based on complexity and requirements. A simple website typically takes 2-4 weeks, while complex web applications can take 2-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer 24/7 support and maintenance services for all our projects. This includes security updates, performance monitoring, bug fixes, and feature enhancements to keep your systems running smoothly."
    },
    {
      question: "What is your approach to digital marketing?",
      answer: "We create data-driven digital marketing strategies tailored to your business goals. Our approach includes SEO optimization, social media marketing, PPC advertising, content marketing, and analytics to maximize your ROI."
    },
    {
      question: "Can you help migrate our existing systems to the cloud?",
      answer: "Absolutely! We specialize in cloud migration services using AWS, Azure, and Google Cloud. We ensure minimal downtime, enhanced security, and improved performance during the migration process."
    },
    {
      question: "What makes ORCA different from other IT companies?",
      answer: "Our combination of technical expertise, personalized service, and proven track record sets us apart. We focus on understanding your business needs and delivering solutions that drive real results, not just technical implementations."
    }
  ]

  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-muted-foreground">Get answers to common questions about our services</p>
      </div>
      
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="card rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <span className="font-semibold">{faq.question}</span>
              <svg 
                className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-6">
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}