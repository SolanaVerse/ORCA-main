import Hero from '../components/ui/Hero'
import Services from '../components/ui/Services'
import Portfolio from '../components/ui/Portfolio'
import Clients from '../components/ui/Clients'
import About from '../components/ui/About'
import Testimonials from '../components/ui/Testimonials'
import FAQ from '../components/ui/FAQ'
import ContactForm from '../components/ui/ContactForm'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Clients />
      <About />
      <Testimonials />
      <FAQ />
      
      {/* CONTACT SECTION */}
      <section id="contact" className="py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">Ready to transform your business? Let's discuss your project.</p>
        </div>
        <div className="flex justify-center">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}